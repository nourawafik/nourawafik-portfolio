# Case study: Duet

The project is renamed for confidentiality. Every screen was redrawn for the portfolio, with a product identity of its own. Reference board: `boards/18-work-duet.png`. Assets: `work/duet/`.

## 1. Rename

The third case study is now called **Duet**. Its recruiter assistant is **Tempo** and its candidate assistant is **Lyric**. The exact old-to-new mapping is in Noura's chat message to you; it is kept out of this file on purpose.

- Slug: `duet`. Rename the MDX file to `duet.mdx`.
- No redirect from the old slug: the old URL should 404.
- Remove the old name from everything the public can see: page text, alt text, OG images, sitemap, metadata, JSON-LD, `case-studies.ts`, the home cards, and the repo's docs.
- New tagline: "Two-sided AI hiring platform with an assistant for each side". Keep the role, timeline and platform fields as they are.
- Delete the old images in `public/work/` for this project.

## 2. Add a confidentiality note

Put this right under the intro paragraph, styled as a small muted note with a lock or info icon:

> Names, people and company details are changed, and every screen shown here was redrawn for this case study. The original work is under NDA.

## 3. Images

Copy `design-handoff/work/duet/` to `public/work/duet/`. Every image has a `-dark` version: use the existing `srcDark` support.

| Where | File(s) | Caption |
|---|---|---|
| Home card thumbnail (4:3) | `duet-thumb.png` / `duet-thumb-dark.png` | (none) |
| Case study hero (16:9) and OG image | `duet-hero.png` / `duet-hero-dark.png` | (none) |
| Hero challenge, right after Decision 01 | `tempo-reasons.mp4` / `tempo-reasons-dark.mp4`, posters `tempo-reasons-poster.png` / `tempo-reasons-dark-poster.png` | "The score never arrives alone: the reasons come with it" |
| Hero challenge, after Decision 03 (replaces the first ImageGrid) | `tempo-review.png`, `tempo-disagree.png` (2 columns) | "Score and reasons in one view, in recruiter language" / "Disagreeing takes ten seconds and lands in the audit trail" |
| Designing Lyric, after the decisions (replaces the second ImageGrid) | `lyric-roles.png`, `lyric-profile.png`, `lyric-prep.png` (3 columns on desktop; a horizontal rail on mobile, like the home cards) | "After a no, Lyric looks forward" / "Suggestions, not critique" / "Prep built from this role, not a template" |
| Design system section, after the first paragraph | `two-voices.png` | "Same components, two voices" |

Phone screenshots: show them at their natural ratio (390×844), with a 6px `#0E2A2D` device frame and radius 28. Don't crop them.

## 4. Video component

Add a small MDX component, `<Video src poster srcDark posterDark caption />`:
- `autoPlay muted loop playsInline`, `preload="metadata"`, radius 16, same shadow as the images.
- Under `prefers-reduced-motion: reduce`: no autoplay; show the poster with a 56px round play button (aria-label "Play video" / "شغل الفيديو").
- Swap to the dark source in dark mode.
- It is decorative, with the caption as text: add `aria-label` equal to the caption.

## 5. Product identity (for reference only, used inside the screens)

- Tempo `#4B4FD8`, Lyric `#F0794A`, ink `#1B1F3B`, paper `#FBFAF8`, font Inter.
- Do not use these colours in the site UI. The site stays on Noura's tokens.

## 6. Waiting on Noura

The Status section says a pilot is "planned for 2026". Leave the text as it is until Noura confirms the current status.
