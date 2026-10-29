# Design review 2: fixes after `work-library-2`

Noura reviewed the site after `afaf383`. Fix these in order. Don't deploy to production. When you're done, run the site locally, send her the links, and refresh the `workers.dev` preview under the same rules as before (free plan only, no domain, no DNS).

**Boards `32`–`36`** ("What I do") are replaced. **New file:** `mascot/noon-wave-on-yellow.svg`.

---

## A. Language switch keeps you on the same page

**Bug:** the switch in `nav.tsx` and `nav-ar.tsx` is hard-coded to `/ar` and `/`. In the desktop header, the mobile header and the mobile menu, it always goes to the home page. `footer.tsx` does the same.

**Fix:**
- Build the link from `usePathname()`, in one shared helper used by all four places:
  - EN → AR: `/work/praxa` → `/ar/work/praxa`.
  - AR → EN: `/ar/work/praxa` → `/work/praxa`.
- Keep the query string and the hash: `/work?feature=sched` → `/ar/work?feature=sched`.
- If a page has no counterpart, fall back to the other language's home. Today every page has one.
- Keep `hrefLang` and `lang` on the link.

**Check:** switch language on every route (home, `/work` with filters, Ulfa hub, each study, Praxa, Duet). Each switch lands on the same page.

## B. "What I do" section (boards 32–36)

### B1. The art is too big

Today the tile is `aspect-ratio: 1` across the full card width, so it's about 270px tall.

**Desktop:**
- Tile **120px tall**, full card width, radius 18, `#E6F4F3`, padding 12px.
- The SVG is `object-contain` inside it, so it ends up about 96px tall.

### B2. Cards have different heights

In AR, "مواقع وصفحات هبوط" wraps to two lines, so that card is taller.

**Fix:**
- The `<li>` is `h-full` and the `<a>` inside it is `h-full flex flex-col`, so all four cards stretch to the tallest one in the row.
- Text stays top-aligned.

### B3. Mobile: a list instead of a rail

The cards look tiny on mobile. The cause: `flex: 0 0 80%` is on the `<a>`, not on the `<li>`, so the rail items shrink. A rail is also the wrong pattern for four short cards.

**Replace the rail (below `md`) with a vertical list** (boards 35–36):
- Gap 12px. No horizontal scroll and no dots.
- Each card is a 2-column grid: `84px 1fr`, column gap 16px, padding `14px 16px`, radius 24.
- **Tile:** 84 × 84px, `#E6F4F3`, radius 18, padding 6px. It spans both rows, on the start side (right in AR).
- **Title:** 18px, weight 700.
- **Line:** 14px, line-height 1.55, `foreground-muted`.
- The whole card stays one link, with the same `aria-label`s.

## C. "All work" button on mobile

In `selected-work.tsx` the link is `hidden md:inline-flex`, so it doesn't exist on mobile.

**Fix:**
- On mobile, show it **under** the project rail as a full-width outline button: 48px tall, pill shape, 2px `ink` border, text `ink`.
  - Label: "All work" / "كل الأعمال", with the arrow (flipped in AR).
- On desktop, keep the current link next to the heading.

## D. Contact section: Noon must match the design

Today it uses `noon-wave.svg`, which has a yellow head and dot and a teal body. On the yellow block that looks wrong. The design (home boards) has an **ink `#0E2A2D` body, a white head and ink features**, and only the arm (the last stroke of the ن) waves.

**Fix:**
- Use `mascot/noon-wave-on-yellow.svg`, inline, as a small React component, so its CSS can be toggled.
- When the section is about 40% in view, add the class `is-waving` to the `<svg>`, once per page view. The arm rotates 4° → 26° → 4° around its base, twice, 1.4s each. The CSS is already inside the SVG.
- With reduced motion, there's no animation (handled inside the SVG).
- Size: 220 × 212 desktop, 150px wide on mobile, as in the boards.
- Don't change `noon-wave.svg`. It's still used in the menu and in Ask Noura.

## E. Motion: one consistent set

Noura asked to review the transitions. Today durations are mixed (150, 200, 300, 350, 600ms), there are no page or scroll transitions, and there's one `animate-bounce`. Use these tokens everywhere, in `globals.css`:

```css
--ease-out: cubic-bezier(.2,.8,.2,1);
--dur-fast: 150ms;   /* colour, opacity, focus */
--dur-base: 250ms;   /* hover lift, chips, pills, panel open */
--dur-slow: 450ms;   /* reveals, page enter, sheet */
```

| What | Motion |
|---|---|
| Links, buttons, chips (colour) | `--dur-fast` |
| Card hover | lift `-4px` + shadow, `--dur-base` `--ease-out` (work cards, "What I do", next-project) |
| Page enter (every route, including the language switch) | `main` fades in from `opacity 0` + `translateY(8px)`, `--dur-slow`. Use `app/template.tsx`. No exit animation, and no layout shift. |
| Scroll reveal | Section headings and cards fade up 12px, `--dur-slow`, once, with IntersectionObserver at 15%. Cards in a row stagger by 60ms, up to 4. Nothing above the fold animates on load except the hero's own art. |
| `/work` filter or search change | The grid fades out and in at `--dur-base`. The count updates at the same time. No jump in page height while the content swaps. |
| Filters panel (desktop) | height + opacity, `--dur-base` |
| Filter sheet (mobile) | slides up at `--dur-slow`; the scrim fades at `--dur-base` |
| Toast ("Email copied") | fade + 8px up, `--dur-base`; stays 2s |
| Remove | `animate-bounce`, wherever it is |

- Everything above sits inside `motion-safe:`, or is off under `prefers-reduced-motion: reduce`.
- The looping Noon animations ("What I do", hero) keep their own timing.

## F. "Get a quote": keep it as is for launch

It opens the visitor's email app with the subject and the template from `work-library-2.md` §4. "Copy email" is the fallback for people with no mail app. No change.

## G. Hide "Ask Noura" for launch

Put the launcher and panel behind `NEXT_PUBLIC_ASK_NOURA`, off by default, so it can come back later with no code change. With it off, nothing renders and no requests are made. Don't delete the component.

## H. Check

Check at 1440 and 390, light and dark, EN and AR:

- [ ] The language switch keeps the page, the filters and the hash, from the header, mobile header, menu and footer.
- [ ] "What I do": 120px art on desktop, equal card heights in AR and EN, and the mobile list matches boards 35–36.
- [ ] "All work" shows on mobile.
- [ ] Contact Noon has an ink body and white head, and waves once when the section comes into view.
- [ ] Motion uses the three durations only, and nothing moves with reduced motion.
- [ ] Ask Noura is gone with the flag off.
