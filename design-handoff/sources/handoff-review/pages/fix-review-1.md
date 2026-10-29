# Design review 1: fixes before adding more projects

Reviewed the `rebrand` branch at `cf5ecf8`. The site was built and opened at 1440px and 390px, light and dark, on `/`, `/ar`, `/work/ulfa`, three Ulfa studies and `/work/duet`. Screenshots are in `boards/review-1/`.

Fix these in order. Don't deploy. When done, run the site locally and send Noura the links.

---

## A. Dark mode: elements that must not change

**Screenshots:** `01-dark-hero-and-cta.png`, `02-dark-about-contact.png`.

**Root cause:** these elements use theme tokens (`bg-accent`, `text-foreground`, `ring-surface`) that flip in dark mode. In both modes they must use fixed colours, as `pages/home-update-2.md` §4 says. Add two fixed tokens and use them:

```css
--ink-fixed: #0E2A2D;   /* text on yellow, white or teal surfaces, in both modes */
--teal-fixed: #0E7C7B;  /* hero art card, About logo badge */
```

| # | Element | Now in dark | Fix (same in both modes) |
|---|---|---|---|
| A1 | Hero art card (`hero.tsx`, `bg-accent`) | light teal `#7CC6C0`-ish with light arcs | `bg-[--teal-fixed]`, arcs `#0B6B6A` |
| A2 | "Hi!" / "أهلا!" sticker | white text on white, so it looks empty | text `--ink-fixed`, border `--ink-fixed` |
| A3 | "Open for new projects" sticker and the coral "English + عربي" sticker | light text on yellow / coral | text and border `--ink-fixed` |
| A4 | Every yellow button: header "Get a quote", hero, mobile menu, service "All in one" chip | white text on yellow (fails contrast) | text `--ink-fixed` |
| A5 | Contact block (yellow) | heading, text and email link are white; button is white with white text | all text `--ink-fixed`; button bg `--ink-fixed` with white text |
| A6 | About logo badge | light teal, broken image | bg `--teal-fixed`; ring takes the band colour (`#FFFFFF` light / `#0A2023` dark) |

**Check:** compare dark against `boards/10-home-ar-dark.png` and `boards/11-home-en-dark.png`.

## B. About photo badge: missing file

`about-section.tsx` loads `/logo/mark-on-dark.svg`, which doesn't exist (404). That's the broken image on top of the photo. Copy `design-handoff/logo/mark-on-dark.svg` (white mark, yellow dot) to `public/logo/mark-on-dark.svg`.

## C. Case study images: cropped or too big

### C1. Desktop and landscape images are cropped

**Screenshot:** `03-duet-images-cropped.png`.

`ImageWithCaption` forces `aspect-video` with `object-cover`, so anything that isn't 16:9 gets cut. For example:
- The Tempo screens are 16:10, so the top is cut.
- `two-voices` is about 2:1, so the sides are cut.
- The Praxa screens (3:2) will be cut too.

**Fix:**
- Render each image at its own ratio: pass `width` and `height` from the file, or use `style={{width:'100%',height:'auto'}}`. Don't force an aspect ratio and don't use `object-cover`.
- Style: radius 16, `1px solid var(--border)`, and the same soft shadow as the cards.
- The case study hero image gets radius 24 on desktop and 16 on mobile (it has none now).

### C2. Phone screenshots are huge on desktop

**Screenshot:** `04-phones-too-big-desktop.png`.

The phone grid uses 2 columns across the full content width, so each phone is about 540px wide and 1,170px tall.

**Fix:**
- Each phone is at most **260px wide**.
- The row has 4 phones on desktop (≥1024px), 2 on tablet, centred, with a 24px gap.
- Keep the 6px `#0E2A2D` frame and radius 28.

### C3. Phone screenshots are cut off on mobile

**Screenshot:** `05-phones-cut-mobile.png`.

On 390px the second phone runs off the screen.

**Fix:**
- On mobile, make the row a horizontal rail with each phone at `flex: 0 0 68%`, scroll-snap and dots. Same rail as on home.
- Follow the reading direction.

### C4. Video

The Duet video is correct. Keep `aspect-ratio: 1440/900`, and match the new image style: radius 16 and border.

## D. Typography on case study pages

Captions, decision numbers, metadata labels (Role, Timeline…) and the "Back" link use `font-mono` (`ui-monospace`). That's left over from the old style and doesn't match the brand.

**Fix:**
- Use the site font (Rubik) everywhere.
- Captions: 14px, `foreground-muted`, line-height 1.5.
- Decision numbers: Rubik 600 in `accent`.
- Metadata labels: 13px `foreground-muted`.
- Update `caption.tsx`, `decision.tsx`, `metadata-grid.tsx`, `work/[slug]/page.tsx` and the Ulfa colour table.

## E. Home page

### E1. Arrow buttons look heavy and the arrows are thin

**Screenshot:** `06-arrow-buttons.png`.

**Circle buttons on service cards:**
- 40px, with a **2px border in `line`**: `#D8D4C8` in light, `#2B4A4E` in dark. Don't use the dark ink border.
- The arrow inside is 18px with stroke 2.
- On the featured card the border is `#2B4A4E` and the arrow is white.
- The hover state stays as specced: fills yellow and rotates 45°.

**One arrow everywhere:** in "Read the case study", "Get a quote", "All work" and the next-project card, use this arrow at 16px, stroke 2, `currentColor`, flipped with `scaleX(-1)` on `/ar`:

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
```

### E2. Empty tag on the Ulfa card

**Screenshot:** `07-empty-tag-old-card.png`.

The Ulfa card shows an empty pill because `timeline` is empty. Don't render a tag when its value is empty, on every card.

### E3. KemeClinic card

Still shows the old card ("200+ active users"). This goes away with `pages/work-praxa.md`. Do that handoff after these fixes, or together with them.

## F. After the fixes

Take the same screenshots again (light and dark, 1440 and 390) of `/`, `/ar`, `/work/ulfa`, one Ulfa study, `/work/duet` and `/work/praxa`, and check each one against this list.
