# Noura Wafik design system

Built from the logo's own parts: one rounded stroke, the curve of the Arabic noon, and the yellow dot. Round ends and soft corners everywhere. Every text pairing below meets WCAG 2.1 AA (normal text 4.5:1, large text and UI parts 3:1). Exact values live in `tokens/tokens.json` and `tokens/tokens.css`.

## Logo

- **Mark:** the Arabic noon and the Latin N share one stroke; the yellow dot sits above the noon. Stroke weight: 17 units on a 180-unit mark.
- **Lockups:** the names are drawn with the same stroke weight and round ends as the mark. English lowercase x-height equals the mark's body; the Arabic body fills the same band. One language per lockup.
- **Colourways:** teal mark + dark name on light; white mark + white name on dark or teal; dark mark + white dot on yellow; one-colour dark or white for print.
- **Minimum sizes:** horizontal 130px wide, stacked 100px. Smaller: mark alone; under 32px: `mark-small-32.svg` (heavier stroke, round dot).
- **Don't:** retype the name in a font, add a face to the logo, recolour the dot, use the mark in yellow or coral on white, combine AR and EN lockups.

## Colour

| Role | Light | Dark | Use |
|---|---|---|---|
| bg | #F6F4EE | #0E2A2D | Page background |
| surface | #FFFFFF | #17393D | Cards, panels |
| sunk | #ECE9E1 | #0A2023 | Wells, disabled fills |
| fg | #0E2A2D | #F6F4EE | Body text, headings |
| muted | #3E5558 | #A9C2C4 | Secondary text |
| subtle | #6B675C | #8FAAAD | Helper text, captions |
| line | #D8D4C8 | #2B4A4E | Decorative dividers only |
| line-strong | #8F8A7D | #6F8F92 | Input borders, icons (UI, ≥3:1) |
| accent | #0E7C7B | #5BB5AF | Links, primary buttons, the mark |
| accent-hover / press | #0B6B6A / #095A59 | #7CC6C0 / #93D0CC | Button and link states |
| accent-soft | #E6F4F3 | #123F42 | Tag and selection fills |
| on-accent-soft | #0B6B6A | #7CC6C0 | Text on accent-soft (accent itself is only 4.4 there) |
| on-accent | #FFFFFF | #0E2A2D | Text on accent |
| highlight | #FFC845 | #FFC845 | The single most important CTA, the dot, accents. Never text on light |
| coral | #FF6B5B | #FF6B5B | Secondary accent, announcement posts. Never text on light; never white text on it |
| focus | #0E2A2D | #FFC845 | 3px focus outline, 3px offset |
| success | #1A7340 on #E4F4EA | #6FD39A on #123A2A | Messages |
| warning | #865C00 on #FFF4D6 | #FFC845 on #3A3112 | Messages |
| error | #B42318 on #FDECEA | #FF8C7F on #3F1E1B | Messages (deliberately not coral) |
| info | #2364AA on #E5EFFA | #8DB8F0 on #16304F | Messages |

Rules: white text only on dark, teal 500 and darker. Dark text on white, paper, yellow, coral and all light tints. Colour never carries meaning alone: links are underlined, messages have an icon and a word.

### Social content colours

Tip: yellow bg + dark text. Case study: dark bg + white text + yellow label. Behind the scenes: paper bg + dot grid + teal label. Announcement/offer: coral bg + dark text. Idea/quote: teal bg + white text (yellow only for dots, not words: 3.3:1).

## Typography

One family for both scripts: **Rubik** (Google Fonts), weights 400, 500, 700, 800.

| Step | Desktop / mobile | Weight | Line height EN / AR |
|---|---|---|---|
| Display | 56 / 36 | 800 | 1.1 / 1.3 |
| H1 | 44 / 32 | 700 | 1.15 / 1.35 |
| H2 | 32 / 26 | 700 | 1.2 / 1.4 |
| H3 | 24 / 20 | 500 | 1.3 / 1.5 |
| Body L | 18 | 400 | 1.6 / 1.8 |
| Body | 16 | 400 | 1.6 / 1.8 |
| Small | 14 | 400 | 1.5 / 1.7 |

Minimum 16px for any reading text; 14px only for labels and dates. No letter-spacing or faux italic on Arabic. Uppercase tracking only for short English labels. Line length 60–75 characters.

## Shape and space

- Radius: tags 8, inputs 16, cards 24, page sections 32, buttons and chips fully round.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Touch targets: at least 44px.
- Icons: 24px grid, 2px stroke, round caps and joins, one colour (`currentColor`). Directional icons mirror on `/ar`. Icon-only buttons need an `aria-label`.
- Patterns: noon arcs (sections, covers), dot grid (behind the scenes), confetti (celebrations only). One yellow dot per pattern area.

## Noon (mascot)

- Noon's body is the logo itself; the dot becomes her head, the N's last stroke her arm.
- Head always yellow with dark features and outline (white head on yellow backgrounds). Body teal by default, coral when celebrating, white on dark.
- Moments: wave (welcome), explain (tips, case studies), celebrate (launches), idea (the head glows: Noura means light), think (loading, 404, Ask Noura typing), wink (quick tricks).
- Noon appears in content, stickers, the 404 page, loading and Ask Noura. Never in the profile photo slot, CV or formal proposals; the logo is the formal face.
- Motion: the logo "wakes up" (`mascot/logo-wakes-up-animated.svg`) for video intros and the site loader. Respect `prefers-reduced-motion`.

## Components

- **Primary button:** accent bg, white text, hover accent-hover, press accent-press, disabled sunk bg + line-strong text.
- **Highlight button:** yellow bg, dark text. One per view, for "Get a quote".
- **Secondary button:** white bg, 2px accent border, accent text; hover accent-soft bg with on-accent-soft text.
- **Link:** accent, underlined.
- **Tag:** accent-soft bg, on-accent-soft text, radius 8 or full.
- **Sticker (social only):** 3px dark border, slight rotation.
- **Card / project card:** surface bg, radius 24, image on top, tags, title, one-line summary, "Read the case study" link with a direction-aware arrow.
- **Alert:** semantic bg + 2px semantic border + icon + bold title + body.
- **Input:** 2px line-strong border, radius 16, 44px min height, visible label.
- **Ask Noura:** see `HANDOFF.md` section 7.
