# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (new):** founders and businesses in the Gulf and Egypt who need a brand, a website, a digital product or content, in Arabic and English.

**Secondary (kept):** hiring managers and design leads at product companies.

Arabic-speaking founders in the Gulf are a first-class audience. For them, `/ar` is the primary way into the site, not a courtesy translation. Both audiences reach the site through different paths (direct referral, LinkedIn, portfolio directories, job boards) and judge it differently, but the site serves both with equal depth.

## Product Purpose

The personal brand site and portfolio of Noura Wafik, a brand and product designer based in Cairo. It positions her bilingual design + marketing practice — brand identity, websites, digital products, and content — for businesses in the Gulf and Egypt, while also presenting her portfolio to hiring managers.

Success for founders: they understand the service offer, see proof of craft, and get in touch or request a quote.
Success for hiring managers: they read at least one case study and make contact or download the resume.

## Positioning

Brand, product and marketing design for businesses in the Gulf and Egypt, in Arabic and English, from idea to launch.

The claim that's hard to copy: real Arabic/RTL product design built into the system itself (one system serving 2 languages × 2 platforms × 2 modes), shown in shipped work, not just stated. Bilingual by design, not translation.

## Services

| Package | Includes | Type |
|---|---|---|
| Launch package | Brand identity + bilingual website + launch posts | One-off |
| Brand identity | Logo, colours, AR/EN type, usage guide | One-off |
| Website | Bilingual website design and build | One-off |
| Product design | UX/UI for an app or SaaS, or an RTL review of an existing product | Project |
| Content subscription | Monthly social content design and copy | Monthly |
| Design support | Monthly design hours/requests | Monthly |

Prices: `[PRICE]` — pending Noura's confirmation. Never estimate or invent prices.

## Operating Context

- Primary CTA everywhere: "Get a quote" / "اطلب عرض سعر" — highlight button — links to `mailto:hello@nourawafik.com`.
- Secondary CTA: "See my work" / "شوف أعمالي".
- Case studies are long-form MDX pages at `/work/[slug]`, written in Noura's own voice.
- The resume is a PDF at `public/resume.pdf`. Noura designs it in Figma; it is never generated from code.
- Contact: `hello@nourawafik.com` and `linkedin.com/in/nourawafik`. No contact form; mailto button only.

## Capabilities and Constraints

- **Stack:** Next.js 16 (App Router), React 19, TypeScript strict, Tailwind v4 (CSS-first tokens in `globals.css`), MDX case studies. Deployed on Vercel.
- **Bilingual parity:** the English site `/` and the Arabic site `/ar` must be equally complete and **structurally identical**. Neither side is an afterthought. Every section and route on one side has a counterpart on the other.
  - *Known gap:* Arabic case-study pages don't exist yet; case studies are English-only.
  - *Open decision:* `/ar` is currently a standalone page with no locale routing. Reaching full parity may need a routing change.
- **Copy:** finalized copy has an intentional voice. Never rewrite it without asking. Never invent copy, prices, client names, testimonials or numbers.

## Brand Commitments

- Name: Noura Wafik / نورا وفيق.
- The Arabic copy addresses readers in the plural imperative (تصفحوا، تواصلوا) and describes Noura with feminine forms (مصممة، مقيمة).
- The logo is drawn — never recreated with a font.

## Evidence on Hand

- Three case studies, in this order: Da'eratna (`src/content/case-studies/dayratna.mdx`), KemeClinic (`kemeclinic.mdx`) and Got-AI (`got-ai.mdx`). Images are in `public/work/`.
- **No testimonials exist.** Never invent quotes, recommendations, client logos or endorsements.
- **Metrics:** state them exactly as verified, or leave them out. Never estimate, round up or add to them.
- **NDA and anonymization:** some work is under NDA. A product screen can only be published after its identity has been changed: full recolour, a neutral name and logo, and replaced data, with the screen labelled "Anonymized".
  - *Open decision:* which projects or screens fall under this rule hasn't been confirmed. Check with Noura before publishing any new product screen.

## Product Principles

1. **Proof over claims.** Every positioning statement is backed by a real artifact, decision or verified number, or it's cut.
2. **Arabic is not a translation.** Both languages get the same structure, depth and craft, and RTL is designed, not mirrored.
3. **Respect the skim.** A visitor should understand the offer and the work within seconds, and still find depth for a full read.
4. **Truthful under NDA.** Anonymize the identity, never the reasoning. Nothing shown is fabricated or inflated.
5. **The site is a work sample.** Its own craft, accessibility and bilingual handling are judged as evidence.

## Accessibility & Inclusion

WCAG AA contrast is the standard. Full RTL support for Arabic, with proper Arabic typography rather than a Latin fallback. Icon-only controls need `aria-label`. Colour never carries meaning alone.
