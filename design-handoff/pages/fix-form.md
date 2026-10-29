# Quote form: typing bug, clearer fields, sending with Turnstile

Do this before anything else. Don't deploy to production.

## 1. Typing bug: every character loses focus

**What Noura sees:** in any field she has to click, type one letter, then click again for the next one.

**Cause:** `quote-form.tsx` defines `FormCard` (line ~411) and `StepsBlock` (line ~354) as functions **inside** `QuoteForm` and renders them as `<FormCard />`. Every state change creates a new component type, so React unmounts and remounts the whole form on each keystroke, and the focused input is lost.

**Fix:**
- Move `FormCard`, `StepsBlock` and any other inner components out to module level (or inline their JSX in `QuoteForm`'s return).
- Pass state and handlers as props. Don't define components inside components anywhere in this file.
- **Check:** type a full name, email and a long note without clicking again, on desktop and mobile, in AR and EN.

## 2. Clearer fields

| Field | Change |
|---|---|
| Name | `autoComplete="name"`, max 100. |
| Email | `type="email"`, `inputMode="email"`, `autoComplete="email"`, `dir="ltr"`, `autoCapitalize="none"`, `spellCheck={false}`. |
| Phone or WhatsApp | `type="tel"`, `inputMode="tel"`, `autoComplete="tel"`, `dir="ltr"`. Accept digits only, plus one leading `+`; spaces are allowed while typing. Strip anything else as it's typed, and paste is cleaned the same way. 7–15 digits when filled. Placeholder: `+20 10 0000 0000` in EN, `+966 50 000 0000` in AR. Error: "Enter a phone number with digits only, e.g. +20 10 0000 0000" / "اكتب رقما صحيحا بالأرقام فقط، مثل +20 10 0000 0000". |
| Company | `autoComplete="organization"`. |
| Budget | `inputMode="text"`, placeholder unchanged (amount and currency). |
| Notes | max 2000, with a live counter under the field once past 1500. |

**Also:**
- "(optional)" / "(اختياري)" has one space before it, on every field.
- Every label is a real `<label htmlFor>`.
- Every input is at least 52px tall, with 16px text, so iOS doesn't zoom in.
- The submit button shows "Sending…" / "جار الإرسال…" and is disabled while sending.

## 2b. "Copy email" button is missing its icon

On `/quote` and `/ar/quote` (boards 39–43), the "Copy email" / "انسخ الإيميل" pill shows text only. Add the copy icon before the text, the same one the contact section uses:

```svg
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
```

- Gap 6px. The icon doesn't flip in AR.
- After copying, swap it for a check icon and the label for "Copied" / "تم النسخ" for 2s, as well as showing the toast.
- Use one shared `CopyEmailButton` component, on the quote page and in the contact section, so they never differ again.

## 3. Sending: Turnstile + Cloudflare email

Noura already created the Turnstile widget.

**Site key (public, safe in code):** `0x4AAAAAAFnwCscYetrUXZnj`. Put it in `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.

**Turnstile widget:**
- Follow Cloudflare's existing-widget flow: https://developers.cloudflare.com/turnstile/spin/prompt.md
- Render the widget in managed mode above the submit button, with `language` set to `ar` or `en` to match the page.
- **The secret key is never written in the repo or in chat.** Tell Noura to run `npx wrangler secret put TURNSTILE_SECRET_KEY` in this folder herself and paste it at the prompt.
- **Hostnames:** the widget must allow `nourawafik.com`, `www.nourawafik.com` and the `*.workers.dev` preview host. Otherwise it fails on the preview. If the preview host isn't listed, tell Noura exactly which hostname to add in the Turnstile dashboard.

**The rest:** build `/api/quote` exactly as `fix-launch.md` B2 says:
- Server-side validation, the honeypot, Turnstile `siteverify`.
- The `send_email` binding `QUOTE_EMAIL` to her verified Email Routing destination, from `website@nourawafik.com`, with Reply-To set to the visitor.
- Nothing stored.
- Ask Noura which verified destination address to use.
- Stop if anything needs a paid plan.

**Test on the preview:**
1. Send one AR request and one EN request.
2. Noura confirms both arrived and that Reply goes to the visitor.
3. Send one request with Turnstile failing (e.g. an expired token): it must show the error banner, and what the visitor typed stays in the form.
