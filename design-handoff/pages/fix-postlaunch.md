# After launch: form, defaults, favicon, share image, auto-deploy

The site is live on `nourawafik.com`, and email routing works. Fix these in order. Each change goes to production with `npm run build:cf && npx wrangler deploy` (the free plan, nothing else), and is checked on the live domain afterwards.

New assets are in `design-handoff/launch-assets/`.

## 1. Quote form doesn't send (highest priority)

**What Noura sees on the live site:** the send button either does nothing, or the error banner appears ("copy the email and send it yourself").

**Find the real cause before changing code:**
1. Run `npx wrangler secret list`. It shows names only. `TURNSTILE_SECRET_KEY` must be in the list. If it isn't, ask Noura to run `npx wrangler secret put TURNSTILE_SECRET_KEY`.
2. Run `npx wrangler tail nourawafikstudio --format pretty`, and ask Noura to submit once in EN and once in AR. Report:
   - the status code
   - the `error` value from `/api/quote` (`misconfigured`, `turnstile_required`, `turnstile_failed`, `invalid`, or an exception from `QUOTE_EMAIL.send`)
3. In the browser, confirm the Turnstile widget actually renders on `/quote`, and that `onTurnstileSuccess` fires, so the token isn't empty.

**Likely causes to check:**
- **The widget doesn't render.** The implicit render (`class="cf-turnstile"` + `data-callback` on `window`) is unreliable in a React client component and with client-side navigation.
  - Switch to **explicit rendering**: load `api.js?render=explicit`, then call `turnstile.render(ref, { sitekey, callback, 'expired-callback', 'error-callback', language })` in a `useEffect`, and `turnstile.remove` on unmount.
  - Keep the token in state. Reset the widget after every submit, success or error.
- **The submit button is disabled while the token is empty, with no feedback.** Keep it enabled. If there's no token yet, show "Checking you're human…" / "جار التحقق…" and wait. If the widget fails, show the error banner.
- **The email send fails.** Check the `QUOTE_EMAIL.send` call against the current Cloudflare "Send emails from Workers" docs:
  - `EmailMessage` from `cloudflare:email`
  - a raw MIME message with From `website@nourawafik.com`, To the verified destination, Reply-To the visitor, a Subject and a Message-ID
  - `mimetext` or an equivalent

  Log the exception message (never the visitor's data) so the logs show why.

**Done when:** Noura submits on `/quote` and `/ar/quote` from her phone and her laptop, both emails arrive in her Gmail, and Reply goes to the address typed in the form.

## 2. Defaults: English and light

**Language:** `/` is already English and there's no automatic redirect, so that part doesn't change. Arabic shows only when someone opens `/ar` or switches language.

**Theme:** today it's `defaultTheme="system" enableSystem` in `providers.tsx`, so a visitor whose phone or laptop is in dark mode gets dark. Noura wants **light by default**.
- Change it to `defaultTheme="light"` and `enableSystem={false}`.
- The theme toggle still works, and the visitor's own choice is remembered.

## 3. Favicon: the Vercel/Next icon shows in browser tabs

`src/app/favicon.ico` is still the create-next-app default, and it overrides the brand icon.

- Replace `src/app/favicon.ico` with `launch-assets/favicon.ico` (16, 32 and 48px, from the brand mark).
- Add `src/app/icon.svg` (`launch-assets/icon.svg`) and `src/app/apple-icon.png` (`launch-assets/apple-icon.png`, 180px).
- Delete the unused starter files in `public/`: `vercel.svg`, `next.svg`, `file.svg`, `globe.svg`, `window.svg`.
- **Check:** view the page source and confirm the `<link rel="icon">` tags point to the new files. The tab shows the ن mark in a hard refresh or a private window.

## 4. Share image: the old picture shows when the link is shared

**Replace the home share images with the new ones:**
- `src/app/(en)/opengraph-image.tsx`: delete it, and add `src/app/(en)/opengraph-image.png` = `launch-assets/og-en.png` (1200×630).
- `src/app/ar/opengraph-image.png`: replace it with `launch-assets/og-ar.png`.
- Add the same files as `twitter-image.png` beside each.
- `og:image:alt`:
  - EN: "Noura Wafik — Bring your idea to life. Digital products and brand identities, designed in Arabic and English."
  - AR: "نورا وفيق — اجعل فكرتك ترى النور. مصممة منتجات رقمية وهويات بصرية، بالعربي والإنجليزي."
- The project pages keep their own generated share images.

**Check:** fetch `https://nourawafik.com` and `/ar`, and confirm `og:image` points to the new PNGs (absolute `https://nourawafik.com/...` URLs).

**Tell Noura:** platforms cache the old picture. After this deploy she can force a refresh:
- **LinkedIn:** paste the link in LinkedIn Post Inspector.
- **Facebook / WhatsApp:** paste it in the Facebook Sharing Debugger and click "Scrape again".
- **WhatsApp on its own:** it can keep the old one for a few days.

## 5. Git and automatic deploys

**Merge (only after Noura confirms she removed the domain from the Vercel project and disconnected the repo there):**
- Merge `rebrand` into `main` and push.
- From now on, `main` is the live site.

**Auto-deploy with Cloudflare Workers Builds:**
- It's free on the Workers Free plan: 3,000 build minutes a month and 1 build at a time. There's no charge; builds just stop if the minutes run out.
- Noura connects GitHub herself, because it needs her GitHub authorization. Give her these exact steps and values:
  1. Cloudflare dashboard → Workers & Pages → `nourawafikstudio` → Settings → Builds → **Connect** → choose the GitHub repo `nourawafik/nourawafik-portfolio`.
  2. **Branch:** `main`.
  3. **Build command:** `npx opennextjs-cloudflare build`.
  4. **Deploy command:** `npx wrangler deploy` (or `npx opennextjs-cloudflare deploy`, whichever the current OpenNext docs say).
  5. **Build variable:** `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = `0x4AAAAAAFnwCscYetrUXZnj`. It's public. `.env.local` isn't in git, so the build needs it here.
  6. The runtime secret `TURNSTILE_SECRET_KEY` is already on the Worker and stays there. Don't add it as a build variable.
- **Check:** push one small commit (for example the handbook update below) and confirm the build runs and deploys by itself.

**Handbook:** update `docs/HANDBOOK.md` §2 and §6:
- Live on Cloudflare since 2026-10-29.
- Vercel retired.
- `main` = production, deployed automatically by Workers Builds.
- Manual deploy, if ever needed: `npm run build:cf && npx wrangler deploy`.
- Secrets: `TURNSTILE_SECRET_KEY` (runtime). Build variable: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
- The `workers.dev` URL is off. Previews from now on: `npm run preview:cf` locally.
