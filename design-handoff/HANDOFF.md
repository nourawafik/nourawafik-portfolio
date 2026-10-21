# Design handoff: Noura Wafik rebrand (nourawafik.com)

This folder is the single source of truth for the new brand. It replaces the current visual language of the site (green accent, Space Grotesk, Alexandria). Read this file first, then `DESIGN.md`, then look at `boards/`.

## 1. What is changing and why

The site is no longer only a job-hunting portfolio. It becomes Noura's personal brand and design + marketing practice, while still working for hiring managers.

- **Primary audience (new):** founders and businesses in the Gulf and Egypt who need a brand, a website, a digital product or content, in Arabic and English.
- **Secondary audience (kept):** hiring managers and design leads.
- **Positioning line:** brand, product and marketing design for businesses in the Gulf and Egypt, in Arabic and English, from idea to launch.
- Bilingual parity rules in `PRODUCT.md` stay: `/` (EN) and `/ar` (AR) are equal and structurally identical.

`PRODUCT.md` must be updated to reflect the new audience and purpose (keep its structure). Do not write marketing claims or numbers that Noura has not given you; use clearly marked placeholders like `[PRICE]` instead.

## 2. Folder contents

| Path | What it is |
|---|---|
| `DESIGN.md` | The new design system: colour, type, radius, spacing, logo, mascot, components, accessibility rules |
| `tokens/tokens.css` | CSS variables, light + `.dark`, names match the current `globals.css`, plus a Tailwind v4 `@theme inline` block |
| `tokens/tokens.json` | Same tokens as data, with the type scale and measured contrast ratios |
| `logo/` | Mark (5 colourways + small-size + favicon), horizontal and stacked lockups for EN and AR, normal and on-dark |
| `mascot/` | Noon the mascot: wave, explain, celebrate, idea, think, wink, on-dark, on-yellow, plus `logo-wakes-up-animated.svg` |
| `icons/` | 12 icons, 24px grid, 2px stroke, `currentColor` |
| `patterns/` | Noon-arc tile, dot-grid tile, arc divider |
| `boards/` | PNG renders of the approved boards. Visual reference only; the SVG and token files are what you build with |
| `QUESTIONS.md` | Where you write design questions (see section 8) |

## 3. Logo rules (non-negotiable)

- The logo is **drawn**, not typed. Never recreate the name with a font. Use the SVG files.
- One language per lockup. Never place the Arabic and English lockups together.
- EN site: `logo/lockup-en.svg` (mark on the left). AR site: `logo/lockup-ar.svg` (mark on the right).
- Minimum width: 130px horizontal, 100px stacked. Below that, and for avatars and icons, use the mark alone. Under 32px use `logo/mark-small-32.svg`. Favicon: `logo/favicon.svg` (also export 32px and 180px PNGs from it for `icon` and `apple-icon`).
- The dot is always yellow `#FFC845`, except on a yellow background (white) and in one-colour print.
- The logo never gets a face. Faces only appear on Noon.

## 4. Implementation plan (suggested order)

Work on a new branch (for example `rebrand`). Commit in small steps. Do not deploy to production without Noura's approval.

1. **Tokens.** Replace the colour values in `src/app/globals.css` with `tokens/tokens.css` (same variable names; new ones added: `subtle`, `accent-hover`, `on-accent-soft`, `highlight`, `on-highlight`, `coral`, `on-coral`, `focus`, `*-bg` for messages). Keep the `.dark` class approach (next-themes).
2. **Font.** Load Rubik with `next/font/google`, subsets `latin` and `arabic`, weights 400/500/700/800, exposed as `--font-rubik`. Remove Space Grotesk, Alexandria, Figtree and Almarai (including `public/fonts/` files) once nothing references them.
3. **Type scale.** Use the scale in `DESIGN.md`. This replaces the current Script Scale Rule: Arabic uses the same pixel sizes as English with more line height. Check it optically in the browser; if Rubik Arabic reads visibly larger than Latin at a given step, reduce that Arabic step and note it in `DESIGN.md`. Arabic body never goes below 16px.
4. **Logo + favicon + OG images.** Swap header/footer logos, favicon, `apple-icon`, and regenerate both `opengraph-image` routes in the new style.
5. **Components.** Restyle buttons, links, tags, cards, inputs and alerts per `DESIGN.md`. Remove the old mirror graphic and audience switch only if Noura confirms (ask in `QUESTIONS.md`).
6. **Pages.** Home (hero, services, selected work, about, contact) in EN and AR with identical structure. Add a Services section/page with the packages from section 6 using placeholders for prices. Keep the three existing case studies.
7. **404 page** with Noon thinking (`mascot/noon-think.svg`).
8. **Ask Noura** (section 7). Build the UI first; wire the AI backend only after Noura chooses the provider and adds the key herself.
9. Update `DESIGN.md` (repo root) from this folder's `DESIGN.md`, and update `PRODUCT.md`.

## 5. Things you must not do

- Do not touch `public/resume.pdf`.
- Do not delete or rewrite case-study content; restyle only.
- Do not invent copy, prices, client names, testimonials or numbers.
- Do not put API keys or secrets in code, commits or chat. Keys go in Vercel environment variables, set by Noura.
- Do not deploy to production without Noura's explicit OK.

## 6. Services and packages (structure only, prices pending)

| Package | Includes | Type |
|---|---|---|
| Launch package | Brand identity + bilingual website + launch posts | One-off |
| Brand identity | Logo, colours, AR/EN type, usage guide | One-off |
| Website | Bilingual website design and build | One-off |
| Product design | UX/UI for an app or SaaS, or an RTL review of an existing product | Project |
| Content subscription | Monthly social content design and copy | Monthly |
| Design support | Monthly design hours/requests | Monthly |

Primary CTA everywhere: "Get a quote" / "اطلب عرض سعر" (highlight button). Secondary: "See my work" / "شوف أعمالي".

## 7. Ask Noura (AI assistant)

- Floating round launcher in the bottom corner on the end side of every page (bottom-left on `/ar`, bottom-right on `/`), teal with Noon's face (`mascot/noon-wave.svg` style), 72px, with `aria-label`.
- Panel: teal header with Noon avatar, title "Ask Noura" / "اسأل نورا", subtitle that it is an AI assistant and can make mistakes. Visitor messages: teal bubble, white text, on the end side (EN right, AR left). Assistant messages: paper `#F6F4EE` bubble, dark text. Quick-reply chips under answers ("See my work", "Get a quote"). Input with visible label for screen readers, 44px targets, send button.
- Typing state: small Noon thinking avatar + "Noon is thinking" / "نون بتفكر" with three animated dots, `role="status"`.
- Behaviour: answers only from the site's content (services, case studies, about), in the page's language. Suggests a package and hands off to the contact form. Never gives final prices, contract terms or promises; it says Noura will reply.
- Backend: decide with Noura (provider, model, spending limit, rate limiting, logging). Server-side route only; key from an environment variable.

## 8. When you need design help

You cannot reach the design session directly. Instead:

1. Write the question in `design-handoff/QUESTIONS.md` (one numbered item, what you need, which page/component, a screenshot path if useful).
2. Tell Noura there are open questions.
3. Noura brings them to the design chat; the answer and any new assets are written back into this folder (and `QUESTIONS.md` is marked answered).

For small decisions that the tokens and rules already cover, decide yourself and note it in `QUESTIONS.md` under "Decisions made".

## 9. Open items Noura still owes (do not guess these)

- Final copy for the hero and services (AR and EN), and package prices.
- Which case studies to show first, and whether to add brand/graphic work.
- Booking link (if any) and where the contact form sends (default: `hello@nourawafik.com`).
- A recent profile photo.
- Ask Noura: AI provider and API key (Noura adds it in Vercel).
- Whether the current audience switch and mirror graphic stay.
