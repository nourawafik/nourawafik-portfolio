# nourawafik.com: project handbook

The single place for everything needed to maintain, review and grow the site. Keep it updated: every handoff that changes a rule, a fact or a setup step updates this file in the same commit.

Owner: Noura Wafik (نورا, never نورة) · hello@nourawafik.com

---

## 1. What the site is

- Noura's personal brand and design business: brand identity, websites and landing pages, digital products and design systems, in Arabic and English, for companies in Egypt and the Gulf.
- It must work for two readers:
  - **Clients**, who should leave with "she can do this for me" and send a quote request.
  - **Hiring managers**, who should leave with "senior, bilingual, ships real products".
- Languages: EN at `/`, AR at `/ar`. Every page exists in both, and the language switch keeps the page.
- Themes: light and dark on every page.

## 2. Where things live

| What | Where |
|---|---|
| Code | This repo, `nourawafik-portfolio`, branch `main` (production). GitHub remote `nourawafik/nourawafik-portfolio` (private). |
| Design canvas (all boards) | Claude artifact "Noura Wafik Brand Directions": https://claude.ai/artifact/FZEvDMRLevyUVP9txWDJ6h |
| Design handoffs (specs for Claude Code) | `design-handoff/pages/*.md`, with board screenshots in `design-handoff/boards/` |
| Board and screen generators (source) | `design-handoff/sources/` (see §8) |
| Mascot (Noon) SVGs | `public/mascot/` (live), `design-handoff/mascot/` (handoff copies) |
| Design system (tokens, type, Noon rules) | `DESIGN.md` |
| Adding a project | `PRODUCT.md` + `src/content/work.ts` |
| Praxa source design (read only) | Figma "KemeClinic Dashboard (Idaam)". Never edit Figma. |
| Hosting | Cloudflare Workers (free plan), via `@opennextjs/cloudflare` |
| Domain and email | `nourawafik.com`, registered at Cloudflare. Mail is received through Cloudflare Email Routing and forwarded to Noura's inbox. |

## 3. Rules that never change

- **Facts:** don't invent copy, prices, client names, testimonials, numbers or years. Every claim must be verified with Noura; leave out anything uncertain.
- **Project years:** never publish a project year or timeline.
- **Got-AI:** never mention it. The project is called Duet.
- **Arabic:**
  - Simple, clear Arabic that anyone in Egypt and the Gulf reads easily. No Egyptian dialect, and no stiff formal Arabic.
  - No tashkeel.
  - Noura speaks in the first person, feminine. The visitor is addressed in the general masculine.
  - Shared terms: الجوال, الوضع الداكن, الجلسة المباشرة, لوحات التحكم, المشروع التالي.
- **Costs:** Noura approves any cost before it happens.
  - Never upgrade the Cloudflare plan, add a payment method, or enable a paid product.
- **Secrets:** API keys and secrets are never written in the repo or in chat. Noura adds them herself (`wrangler secret put`).
- **Deploys:**
  - No production deploy and no DNS or domain change without Noura's explicit OK.
  - Previews go to `*.workers.dev` only.
- **Do not touch:** `public/resume.pdf`.
- **Photos:** personal photos stay local, and only the approved About photo is used.
- **Figma:** read only. Never touch the pages "User Journey - Mobile 📱 2" and "User Journey - Mobile 📱 dark".
- **Accounts:** don't sign in to Noura's accounts on her behalf.

## 4. Approved project facts

Use only these.

| Project | Approved facts | Do not publish |
|---|---|---|
| **Ulfa** (was Supporting Circle) | Bilingual mobile app for small-group mental health sessions. Role: product design and product management. Participant journey and facilitator journey. Four studies: participant app, live session, facilitator studio, design system (4 colours × light/dark = 8 contexts). | Real product name, user numbers |
| **Praxa** (was KemeClinic) | Web platform for US mental health clinics. Noura was the **only designer**. **Web only**. **Live in the US, 50+ clinics**. Four roles: admin, provider, patient, staff. AI drafts that the provider approves. Voice control. | User numbers, year, real names |
| **Duet** (never "Got-AI") | Two-sided AI hiring platform: Tempo for recruiters, Lyric for candidates. Noura was a **designer on a team**. **Live**. **Web and mobile**. Started from wireframes drafted by the business side. | Company details, AI architecture, numbers, "ten seconds"-type claims, timeline |

**Coming later:** KemeMeet and Brain Health USA (same client as Praxa), Ulfa web and landing page, brand identity work, and marketing and social media work.

**About Noura** (approved for the site):
- Based in Cairo.
- Designing since 2020 (show it as "6+ years", computed from 2020).
- Brand and product designer.
- Also knows code and marketing.

## 5. Site map and features

- `/`, `/ar`: home, in this order:
  1. hero
  2. services marquee
  3. selected work (featured items from `work.ts`)
  4. "What I do" (4 cards with animated Noon)
  5. about
  6. contact
- `/work`, `/ar/work`: work library.
  - Search (title, summary and `keywords`, with Arabic letter normalization) and type chips.
  - A Filters panel (desktop) or bottom sheet (mobile) for industry and feature.
  - Studies appear only when a feature filter or a search is active.
  - The state is kept in the URL.
- **Project pages:** `/work/ulfa` (hub plus 4 studies), `/work/praxa`, `/work/duet`, and the same under `/ar`. Each one ends with the next-project card.
- `/quote`, `/ar/quote`: the quote request form.
  - Fields: name and email (required); phone or WhatsApp; services (required, multi-select); company; language; start time; budget; notes.
  - It's sent free through a Cloudflare `send_email` binding to Noura's verified address, with Turnstile against spam. Nothing is stored.
- **Social links:** `src/content/social.ts`, where each link has `visible`.
  - Now: LinkedIn shown; Behance (`https://www.behance.net/nourawafik`) hidden until it's ready; Instagram hidden.
- **Hidden features, kept in the code:**
  - **Ask Noura:** behind `NEXT_PUBLIC_ASK_NOURA`, off for launch.
  - **Packages and offers:** `services-section.tsx`, `offer-bar.tsx`, `offers.ts`. They're not rendered until there's a pricing study.

## 6. Hosting, email and costs

- **Cloudflare Workers, free plan.**
  - Limits: 100k requests/day; above that, requests fail with error 1027, with no charge.
  - Cloudflare Images free tier: 5,000 transformations a month; above that, new transforms fail, with no charge.
- **Scripts:**
  - `npm run build:cf`: runs `opennextjs-cloudflare build` then `node scripts/patch-cf-email.mjs` (post-build patch required to resolve the `cloudflare:email` virtual module at runtime). Keep the compressed size under 3 MiB on the free plan.
  - `npm run preview:cf`: local preview.
  - Previews go to `*.workers.dev` only.
- **Auto-deploy:** `main` branch is connected to the `nourawafikstudio` Worker via Cloudflare Workers Builds. Every push to `main` triggers a build and deploy automatically. Build command: `npx opennextjs-cloudflare build && node scripts/patch-cf-email.mjs`. Deploy command: `npx wrangler deploy`.
- **Vercel:** disconnected as of 2026-10-29. Cloudflare Workers is the only host.
- **Secrets and variables (names only, values never in the repo):**
  - `TURNSTILE_SECRET_KEY`: Worker secret. Set with `npx wrangler secret put TURNSTILE_SECRET_KEY` — never in repo, never in chat.
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: build variable in Workers Builds dashboard.
  - `NEXT_PUBLIC_ASK_NOURA`: `false`.
- **Email:**
  - MX records are `route1/2/3.mx.cloudflare.net` (Cloudflare Email Routing). Never touch these.
  - The quote form sends via the `QUOTE_EMAIL` binding to `noura.wafik.nada@gmail.com`, from `website@nourawafik.com`, Reply-To set to the visitor's email.
  - Email is built as a hand-crafted RFC 5322 MIME string (base64 body, RFC 2047 encoded subject). `mimetext` is not used.
- **patch-cf-email.mjs:** `scripts/patch-cf-email.mjs` is a required post-build step. opennextjs-cloudflare's esbuild compiles dynamic `import('cloudflare:email')` to `require()`, which the Workers runtime rejects for virtual modules. The script rewrites the compiled `handler.mjs` to use a static ESM import instead. If the build passes but emails fail at runtime with a module error, check this script first.
- **Launch checklist** (completed 2026-10-29):
  1. ✅ Final preview checked on Vodafone wifi and on mobile data, in light and dark, AR and EN.
  2. ✅ `nourawafik.com` connected to the Worker.
  3. ✅ HTTPS, `/ar`, sitemap and quote form (EN and AR) verified on live domain.
  4. Update the CV, LinkedIn and Behance links (Noura).

## 7. How work flows

1. Claude (design) designs on the canvas artifact and writes a handoff in `design-handoff/pages/`, with boards in `design-handoff/boards/`.
2. Noura sends Claude Code the one-line instruction to implement it on `rebrand`.
3. Claude Code commits, runs the site locally, and refreshes the `workers.dev` preview.
4. Noura reviews, and comments go back to the canvas.

**Handoff history:**

| Handoff | What it covered |
|---|---|
| `home.md`, `home-update-2.md` | Home page design |
| `work-duet.md`, `work-ulfa.md`, `work-praxa.md` | The three case studies |
| `fix-review-1.md` | Review 1: dark mode, image cropping, typography |
| `copy-duet-and-seo.md` | Duet rewrite + SEO titles |
| `work-library.md`, `work-library-2.md` | `/work`, search and filters, "What I do", AR pages, contact |
| `fix-review-2.md`, `fix-marquee-rtl.md` | Language switch, "What I do" layout, motion, Ask Noura flag, AR marquee |
| `fix-launch.md`, `fix-launch-2.md` | Simple Arabic, quote form, social links, final review fixes |
| `fix-postlaunch.md` | Post-launch fixes: Turnstile widget mounting, `cloudflare:email` virtual module patch, RFC 5322 MIME email, honeypot autofill bypass, favicon/OG, light default theme, Vercel disconnect, Workers Builds auto-deploy |

## 8. Design sources: regenerating boards and screens

`design-handoff/sources/` holds the Python scripts that drew every case-study screen, cover, video and canvas board, plus the canvas boards themselves (`brand/project/*.dc.html` and `canvas.json`).

| Folder | Contents |
|---|---|
| `ulfa/` | Ulfa screens: `u2.py` (themes and palettes), `s_*.py` (screen sets), `run_*.py`, `thumbs*.py`, `board_*.py` |
| `praxa/` | Praxa: `kit.py` (tokens, icons, shell), `screens.py`, `run.py`, `video.py` (voice-command MP4s), `cover.py`, `board.py` |
| `duet/` | Duet screens, covers and animation |
| `brand/` | Canvas boards: `gen_work.py`, `gen_lib2.py` (work library, "What I do", Noon animations), `gen_quote.py`, `run_*.py` |
| `noon/`, `noon2/` | Noon mascot SVG sources |
| `sbar.py` | The iOS status bar used in every phone screen |

**To run:**
- Python 3 with Playwright (Chromium), and the fonts from `@fontsource` (Rubik, Inter, Fraunces, Readex Pro, IBM Plex Sans Arabic, Nunito, Plus Jakarta Sans, JetBrains Mono).
- The scripts were written for a scratch folder: update the base path `B` at the top of `brand/gen_work.py` (and the matching paths in the other folders) before running.

## 9. Open items

- Testimonials section: only with real quotes, used with permission.
- WhatsApp button: waiting for Noura to choose the number. A separate WhatsApp Business number with two-step verification is recommended.
- Behance and Instagram: switch `visible` on when they're ready.
- Ask Noura: back later, with a reviewed knowledge base and its cost approved first.
- Pricing and packages study, then decide whether to show packages.
- New projects: KemeMeet, Brain Health USA, Ulfa web/landing, brand, marketing.
