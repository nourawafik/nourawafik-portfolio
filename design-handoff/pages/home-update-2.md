# Home page, update 2: no prices, card motion, mobile, dark mode

This updates `pages/home.md`. Where they differ, this file wins.

New references in `boards/`:

| File | What it shows |
|---|---|
| `07-home-ar.png`, `08-home-en.png` | Desktop, light (re-exported, no prices) |
| `10-home-ar-dark.png`, `11-home-en-dark.png` | Desktop, dark |
| `12-home-ar-mobile.png`, `13-home-en-mobile.png` | Mobile 390px, light |
| `14-home-ar-mobile-dark.png`, `15-home-en-mobile-dark.png` | Mobile 390px, dark |
| `16-menu-ar.png`, `17-menu-en.png` | Mobile menu, open |

## 1. No prices and no offers for now

Noura has not set her currency or prices yet.

- Remove every `[PRICE]` from the UI. Each service card now ends with a link "Get a quote" / "اطلب عرض سعر" plus a direction-aware arrow. It opens `mailto:hello@nourawafik.com`, with the package name in the subject, for example `Quote request: Brand identity` / `طلب عرض سعر: هوية بصرية`. On the featured card the link is `highlight` (yellow); on the other cards it is `accent`.
- The featured card chip changes from "Most popular" / "الأكتر طلبا" to **"All in one" / "كل حاجة في باقة"**. "Most popular" is a claim we cannot back up yet.
- Keep the offers code (`offers.ts`, `OfferBar`, the offer card treatment), but leave the offers list empty, so no offer bar and no offer card show anywhere.

## 2. Cards: depth and motion

This applies to every card on the site: project cards, service cards and the About trait cards. No flat cards.

**Resting state**
- Light: `box-shadow: 0 1px 2px rgba(14,42,45,.06), 0 10px 24px -14px rgba(14,42,45,.22)`.
- Dark: `0 1px 2px rgba(0,0,0,.25), 0 10px 24px -14px rgba(0,0,0,.6)`.

**Hover** (pointer devices only, `@media (hover: hover)`)
- Easing for all of these: `cubic-bezier(.2,.8,.2,1)`. Durations: 350ms for transform and shadow, 600ms for the image zoom.
- Card moves up: `translateY(-6px)`. Trait cards move up 4px.
- Shadow grows. Light: `0 2px 4px rgba(14,42,45,.06), 0 28px 48px -20px rgba(14,42,45,.38)`. Dark: add `0 0 0 1px #2B4A4E`.
- Project cards: the cover image scales to 1.05 inside its frame (`overflow: hidden`), and the title turns `accent`.
- The arrow in "Read the case study" / "Get a quote" moves 5px in the reading direction (right on `/`, left on `/ar`).
- Service cards: a 40px round arrow button sits in the top end corner (2px `line` border). On hover it fills `highlight` and rotates 45° toward the reading direction (-45deg on `/`, 45deg on `/ar`). Featured card: on hover a soft yellow glow `0 28px 52px -18px rgba(255,200,69,.45)`.

**Press:** `translateY(-2px) scale(.99)`.

**Focus:** when anything inside the card has keyboard focus (`:focus-within`), show the card's 3px `focus` outline with a 3px offset.

**Click area:** the whole card is clickable. Use a single link with a stretched `::after`, not nested links.

**Reduced motion:** under `prefers-reduced-motion: reduce`, no transforms at all; only the shadow changes.

## 3. Mobile (up to 640px)

**Header**
- The menu button (44px round, hamburger) sits right beside the logo, on the start edge: menu, then the logo.
- On the end side, only the language switch (EN / عربي).
- On mobile the header has no "Get a quote" button (it is in the hero and in the menu) and no theme toggle (that moves into the menu).

**Menu (open state)**
- Full screen, `bg` colour.
- Top: a close button (dark round, white X, aria-label "Close menu" / "اقفل القائمة") with the logo next to it.
- Then the 4 links in 26px/700, one per row, with a divider and a direction-aware arrow.
- Then two segmented controls with labels: Language (عربي | English) and Theme (Light | Dark / فاتح | غامق).
- Bottom: Noon waving next to "Ready to start?" / "يلا نبدأ؟", a full-width yellow "Get a quote" button (56px tall) and the email link.
- Behaviour: focus trap, Esc closes it, it closes on link click, and focus returns to the menu button.

**Horizontal card rails**
- These scroll sideways on mobile instead of stacking:
  - Selected work (3 cards)
  - Services (6 cards)
  - About trait cards (3)
- Rail CSS:
  - `display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 14px`
  - The rail bleeds to the screen edges: `margin-inline: -16px; padding: 8px 16px 18px`
  - Hidden scrollbar
- Each card: `flex: 0 0 84%; scroll-snap-align: start`. Trait cards: 68%. The next card peeks in, so people see there is more.
- Rails follow the reading direction: on `/ar` the first card is on the right.
- Under the work and services rails, show page dots: 8px dots, the active one 22px wide in `accent`. Update them on scroll (IntersectionObserver). They are `aria-hidden`; the rail itself gets `role="region"`, an `aria-label` and `tabindex="0"` so keyboard users can scroll it.
- Cards don't lift on touch; keep only the press state.

**Other mobile sizes**
- Side padding 16px.
- H1 40px.
- H2 30px.
- Hero art card 380px tall, radius 32.
- Marquee text 20px, band 56px.
- Contact block padding 28px, radius 28.
- Sections 64px top padding.
- The Ask Noura launcher shows only the round button on mobile (no "Ask Noura" pill).

## 4. Dark mode

Rule: things designed as always dark use a fixed `ink` colour, never the `foreground` token, because `foreground` flips in dark mode.

| Element | Light | Dark |
|---|---|---|
| Page | `#F6F4EE` | `#0E2A2D` |
| Cards, header buttons | `#FFFFFF` | `#17393D` |
| About band, marquee band, featured card, footer, project image placeholders | white / `#0E2A2D` | `#0A2023` (sunk), with a 1px `#2B4A4E` border on the marquee and the footer top |
| Featured card in dark | | `#0A2023` with a 2px inset `#FFC845` ring |
| Text / muted / subtle | `#0E2A2D` / `#3E5558` / `#6B675C` | `#F6F4EE` / `#A9C2C4` / `#8FAAAD` |
| Links, prices, eyebrows, tag text | `#0E7C7B` / `#0B6B6A` | `#7CC6C0` |
| Tag background | `#E6F4F3` | `#123F42` |
| Secondary button | white bg, teal border | transparent bg, `#5BB5AF` border, `#7CC6C0` text |
| Header logo | teal mark, dark name | white mark, `#F6F4EE` name, yellow dot |
| Theme toggle icon | moon | yellow sun, aria-label "Light mode" / "الوضع الفاتح" |
| Focus ring | `#0E2A2D` | `#FFC845` |

**Never change in dark:**
- Hero art card (`#0E7C7B` with `#0B6B6A` arcs, white Noon).
- Stickers (white, yellow and coral, with dark text and a dark border).
- The yellow contact block: set `color: #0E2A2D` on it explicitly, so its heading and text never inherit light text. Its dark button stays `#0E2A2D` with white text.
- The About photo and its teal badge (the badge ring takes the band colour).
- The Ask Noura launcher.

Check every text and background pair in both modes against WCAG AA.
