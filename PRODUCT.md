# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and design leads at B2B SaaS companies in the Gulf (Saudi Arabia, UAE), hiring a full-time product designer. Secondary: hiring managers at remote-first international companies hiring for the same role.

Their job is to judge quickly whether Noura can own complex product design end-to-end, then decide whether to open a case study, download the resume, or get in touch.

Arabic-speaking recruiters and founders in the Gulf are a first-class audience. For them, `/ar` is the primary way into the site, not a courtesy translation.

## Product Purpose

The personal portfolio of Noura Wafik, a product designer based in Cairo with 3 years in product design and a background in brand and visual design. It exists to land a full-time role, either remote or based in the Gulf, at a B2B SaaS company.

Success means a qualified hiring manager reads at least one case study and makes contact, or downloads the resume.

## Positioning

A bilingual (Arabic/English) product designer for data-heavy, multi-role SaaS across web and mobile, who starts from the design system. The work is in healthtech, mental wellness and AI tools: dashboards, multi-portal products, and AI interaction patterns.

The claim that's hard to copy: real Arabic/RTL product design built into the system itself (one system serving 2 languages × 2 platforms × 2 modes), shown in shipped work, not just stated.

## Operating Context

- Visitors usually come from a job application, LinkedIn, or a recruiter's message, and skim before they commit to reading.
- Case studies are long-form MDX pages at `/work/[slug]`, written in Noura's own voice.
- The resume is a PDF at `public/resume.pdf`. Noura designs it in Figma, and it is never generated from code.
- Contact: `hello@nourawafik.com` and `linkedin.com/in/nourawafik`.

## Capabilities and Constraints

- **Stack:** Next.js 16 (App Router), React 19, TypeScript strict, Tailwind v4 (CSS-first tokens in `globals.css`), MDX case studies. Deployed on Vercel.
- **Bilingual parity:** the English site and the Arabic `/ar` site must be equally complete and **structurally identical**. Neither side is an afterthought. Every section, case study and route on one side has a counterpart on the other.
  - *Known gap:* the homepages match (Hero, Work, About, Contact), but Arabic case-study pages don't exist yet; case studies are English-only.
  - *Open decision:* `/ar` is currently a standalone page with no locale routing. Reaching full parity may need a routing change. This hasn't been decided yet.
- **Copy:** finalized copy has an intentional voice. Never rewrite it without asking.

## Brand Commitments

- Name: Noura Wafik / نورا وفيق.
- The Arabic copy addresses readers in the plural imperative (تصفحوا، تواصلوا) and describes Noura with feminine forms (مصممة، مقيمة).

## Evidence on Hand

- Three case studies, in this order: Da'eratna (`src/content/case-studies/dayratna.mdx`), KemeClinic (`kemeclinic.mdx`) and Got-AI (`got-ai.mdx`). Images are in `public/work/`.
- **No testimonials exist.** Never invent quotes, recommendations, client logos or endorsements.
- **Metrics:** state them exactly as verified, or leave them out. Never estimate, round up or add to them.
- **NDA and anonymization:** some work is under NDA. A product screen can only be published after its identity has been changed: full recolour, a neutral name and logo, and replaced data, with the screen labelled "Anonymized". The design decisions shown must still be real and defensible.
  - *Open decision:* which projects or screens fall under this rule hasn't been confirmed. Check with Noura before publishing any new product screen.
- *Inconsistency to resolve:* `homepage-final-copy.md` gives Da'eratna's timeline as "2024–present", while the case-study data says "2026".

## Product Principles

1. **Proof over claims.** Every positioning statement is backed by a real artifact, decision or verified number, or it's cut.
2. **Arabic is not a translation.** Both languages get the same structure, depth and craft, and RTL is designed, not mirrored.
3. **Respect the skim.** A hiring manager should understand role, scope and outcome within seconds, and still find depth for a full read.
4. **Truthful under NDA.** Anonymize the identity, never the reasoning. Nothing shown is fabricated or inflated.
5. **The site is a work sample.** Its own craft, accessibility and bilingual handling are judged as evidence.

## Accessibility & Inclusion

WCAG AA contrast is the standard (earlier token changes were made specifically to pass AA at 14px). Full RTL support for Arabic, with proper Arabic typography rather than a Latin fallback.
