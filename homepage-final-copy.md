# Homepage — Final Copy

> Replace all placeholder text in the homepage with the content below.
> Voice notes are inline — don't include them in the rendered output.
> The actual copy is what's between the `---` markers.

---

## SECTION 1 — HERO

**Display headline:**
```
Product Designer
```

**Subheadline (body-lg, muted):**
```
SaaS, healthtech, AI tools
```

**Body paragraph (body, default color):**
```
I design data-heavy SaaS — dashboards, mobile apps, and AI tools — for healthtech and HR tech teams. Bilingual (Arabic/English). Based in Cairo, working across MENA.
```

**Primary CTA button:**
```
See selected work
```
→ Links to `/#work`

**Ghost CTA button:**
```
Get in touch
```
→ Links to `/#contact`

---

## SECTION 2 — SELECTED WORK

**Section heading (h2):**
```
Selected Work
```

**Section subheading (small, muted) — optional, can skip if it adds noise:**
```
Recent projects in product design
```

### Card 1 — Supporting Circle (the hero card)

**Index:** `01`

**Title (h3):**
```
دايرتنا · Da'eratna
```

**Tagline (body, muted):**
```
Bilingual mental wellness platform for Saudi Arabia and Egypt
```

**Metadata row (mono):**
```
Lead designer · Web + mobile · 2024–present
```

**Card link target:** `/work/dayratna`

---

### Card 2 — KemeClinic

**Index:** `02`

**Title (h3):**
```
KemeClinic
```

**Tagline (body, muted):**
```
Multi-role telepsychology SaaS for US clinics
```

**Metadata row (mono):**
```
Solo designer · 200+ active users · 2024–present
```

**Card link target:** `/work/kemeclinic`

---

### Card 3 — Got-AI

**Index:** `03`

**Title (h3):**
```
Got-AI
```

**Tagline (body, muted):**
```
AI-powered hiring platform with dual AI assistants
```

**Metadata row (mono):**
```
Product designer · Web + mobile · 2024–present
```

**Card link target:** `/work/got-ai`

---

## SECTION 3 — ABOUT

**Section heading (h2):**
```
About
```

**Body paragraphs:**

```
I'm Noura — a product designer based in Cairo. I have 3 years in product design and a background in brand and visual design. I work end-to-end: research, information architecture, interaction design, and design systems.
```

```
I'm bilingual (Arabic and English) and I design products for healthtech, AI tools, and wellness platforms across MENA and the US. Recent work includes leading design across multi-platform bilingual products and mentoring junior designers on system-led workflows.
```

```
Currently open to full-time roles, remote or based in the Gulf region.
```

**Primary CTA button:**
```
Download resume
```
→ Links to `/resume.pdf` (download attribute)

**Ghost CTA button:**
```
LinkedIn
```
→ Links to `https://linkedin.com/in/[your-handle]` (external, new tab)

---

## SECTION 4 — CONTACT

**Section heading (h2):**
```
Get in touch
```

**Body (body-lg):**
```
For full-time opportunities or product design discussions:
```

**Email (large, clickable, h3 size):**
```
hello@nourawafik.com
```
→ `mailto:hello@nourawafik.com`

**Below email — link rows (small, muted labels, foreground links):**

| Label | Value | URL |
|---|---|---|
| LinkedIn | linkedin.com/in/[your-handle] | https://linkedin.com/in/[your-handle] |
| Behance | behance.net/[your-handle] | https://behance.net/[your-handle] |

> Note: Replace `[your-handle]` with your actual handle before deploying.
> If you don't want phone on the homepage, leave it off — keep it for the resume only.

---

## NAV LABELS (for translation file `en.json`)

```json
{
  "nav": {
    "work": "Work",
    "about": "About",
    "contact": "Contact"
  },
  "theme": {
    "toggleLight": "Switch to light mode",
    "toggleDark": "Switch to dark mode"
  },
  "language": {
    "switchToArabic": "العربية",
    "switchToEnglish": "English"
  }
}
```

---

## FOOTER

**Left side (small, muted):**
```
hello@nourawafik.com
```

**Right side (small, muted, link icons):**
- LinkedIn icon → external link
- Behance icon → external link

**Bottom row (mono, very muted):**
```
© 2026 Noura Wafik · Built with Next.js, deployed on Vercel
```

> The "Built with Next.js, deployed on Vercel" line is intentional —
> it signals technical fluency to hiring managers who notice these details.

---

## METADATA (for `<head>` and Open Graph)

**Site title:**
```
Noura Wafik — Product Designer
```

**Meta description (under 160 chars):**
```
Bilingual product designer based in Cairo, designing data-heavy SaaS, healthtech platforms, and AI tools across MENA. Currently open to full-time roles.
```

**Open Graph title:**
```
Noura Wafik — Product Designer
```

**Open Graph description:**
```
Designing data-heavy SaaS, healthtech, and AI tools. Bilingual (Arabic/English). Based in Cairo, working across MENA.
```

**OG image text content (when we generate it):**
- Top-left: "Noura Wafik"
- Center: "Product Designer"
- Bottom-left: "SaaS · Healthtech · AI tools"
- Bottom-right: "nourawafik.com"
- Background: `#FAFAF9` light or `#0F1115` dark
- Text: `#1F2937` light or `#F5F5F4` dark
- No images, no logos, no decorations — typography only
