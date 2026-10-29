# Final review after launch: what's still missing

I reviewed `main` at `5c1b285`, built locally, on every route at 1440 and 390, light and dark, AR and EN.

**What passed:**
- All internal links return 200.
- The language switch keeps the page.
- No broken images.
- No tashkeel and no Egyptian dialect left.
- The theme defaults to light.
- Turnstile and email send work.

Fix the items below. They deploy by themselves when pushed to `main`. Then check them on `nourawafik.com`.

## 1. Bug: horizontal scroll on `/ar/quote`

The honeypot input uses `position:absolute; left:-9999px`. In RTL that pushes the page about 10,000px wide, so the Arabic quote page scrolls sideways, worst on mobile.

**Fix:** use the visually-hidden pattern, with no big offset:

```css
position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; border:0;
```

- Keep `tabIndex={-1}`, `aria-hidden`, and `autoComplete="new-password"`.
- **Check:** `/ar/quote` and `/quote` at 390px have no horizontal scroll (`scrollWidth === clientWidth`).

## 2. Copy from `copy-final.md` that isn't applied yet

I compared the live text against `copy-final.md` A and A-EN. These rows are still the old text. Use the exact strings from that file.

| Page | Missing |
|---|---|
| AR home | Selected work H2 is still "أعمال حقيقية، لحياة حقيقية". It should be "مشاريع حقيقية لعملاء حقيقيين". |
| EN home | The About paragraph is still the old one ("I work end to end… I also know code and marketing…"). Use the A-EN "About, rest" text, starting "I bring together design thinking…". |
| EN home | Design systems card: "Components and clear rules that keep a product consistent as it scales." |
| EN home + `work.ts` | Ulfa card: "An Arabic and English mobile app that brings people together with mental health facilitators, in small circles and structured sessions." |
| EN home + `work.ts` | Praxa card: "A clinic platform for four roles (admin, provider, patient and staff), with AI the provider reviews and approves before it reaches the patient's record." |
| EN home, About cards | Start each line with a capital: "Use Praxa, a platform I helped design, in the US." and "Designing digital products and brand identities for markets in Egypt, the Gulf and the US." |
| EN Ulfa hub | Principle 1: "Calm colors, with contrast beyond AA in light and dark modes." |
| EN Praxa | Intro "…use to run their work…". Four roles "…but each has a different home." AI section and Voice control: the A-EN text. |
| EN Duet | Intro, "One design system, two voices", and What I learned 01–03: the A-EN text. |
| EN `/work` | The title is "Work — Noura Wafik, product and brand designer — Noura Wafik". Drop the name from the page title, so the template adds it once. |

**Check:** search the rendered text of every page for each A-EN string. Every one must be found.

## 3. Contact block on mobile (AR and EN)

Noon now sits above the heading, but there's about 150px of empty yellow between Noon and the heading.
- Noon: 120px wide, start-aligned, 16px above the heading.
- Block padding: 24px.

## 4. Reply-To

Sending is stable now. Put back `Reply-To: <visitor email>` in the MIME headers, with the address validated server-side and no line breaks, then send one test request.
- If Cloudflare rejects it again, keep it off and tell Noura.
- **Check:** pressing Reply in Gmail goes to the visitor.

## 5. Clean-up

- Make sure `.review-snapshot.tgz` and `.review-sources.tgz` stay ignored. Noura can delete them.
- Remove `mimetext` from `package.json` if nothing imports it anymore.
