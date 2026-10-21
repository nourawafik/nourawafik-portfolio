---
name: Noura Wafik — Brand & Portfolio
description: Bilingual brand and product-design practice; the design system is the visual language.
colors:
  bg: "#F6F4EE"
  surface: "#FFFFFF"
  sunk: "#ECE9E1"
  fg: "#0E2A2D"
  muted: "#3E5558"
  subtle: "#6B675C"
  line: "#D8D4C8"
  line-strong: "#8F8A7D"
  accent: "#0E7C7B"
  accent-hover: "#0B6B6A"
  accent-press: "#095A59"
  accent-soft: "#E6F4F3"
  on-accent-soft: "#0B6B6A"
  on-accent: "#FFFFFF"
  highlight: "#FFC845"
  on-highlight: "#0E2A2D"
  coral: "#FF6B5B"
  focus: "#0E2A2D"
  success: "#1A7340"
  warning: "#865C00"
  error: "#B42318"
  info: "#2364AA"
  bg-dark: "#0E2A2D"
  surface-dark: "#17393D"
  sunk-dark: "#0A2023"
  fg-dark: "#F6F4EE"
  muted-dark: "#A9C2C4"
  subtle-dark: "#8FAAAD"
  line-dark: "#2B4A4E"
  line-strong-dark: "#6F8F92"
  accent-dark: "#5BB5AF"
  accent-hover-dark: "#7CC6C0"
  accent-press-dark: "#93D0CC"
  accent-soft-dark: "#123F42"
  on-accent-soft-dark: "#7CC6C0"
  on-accent-dark: "#0E2A2D"
  highlight-dark: "#FFC845"
  focus-dark: "#FFC845"
typography:
  display:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0"
  display-mobile:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0"
  h1:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  h1-mobile:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0"
  h2:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0"
  h2-mobile:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  h3:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0"
  h3-mobile:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
  body-lg:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  body:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  small:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  tag: "8px"
  control: "16px"
  card: "24px"
  section: "32px"
  pill: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
  button-highlight:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    borderColor: "{colors.accent}"
    borderWidth: "2px"
    rounded: "{rounded.pill}"
  tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.on-accent-soft}"
    rounded: "{rounded.tag}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    borderColor: "{colors.line-strong}"
    borderWidth: "2px"
    rounded: "{rounded.control}"
design-system-font: "Rubik"
---

# Design System: Noura Wafik — Brand & Portfolio

## Overview

**Creative Direction: "Round Stroke"**

Built from the logo's own parts: one rounded stroke, the curve of the Arabic noon, and the yellow dot. Round ends and soft corners everywhere. The teal speaks with authority; the yellow marks the one action that matters on a page. Both scripts — Arabic and Latin — are set in the same typeface, Rubik, which was designed for both. There are no secondary font families.

Every text pairing below meets WCAG 2.1 AA (normal text 4.5:1, large text and UI parts 3:1). Exact values are in `tokens/tokens.json` and `tokens/tokens.css`.

## Logo

- **Mark:** the Arabic noon and the Latin N share one stroke; the yellow dot sits above the noon. Stroke weight: 17 units on a 180-unit mark.
- **Lockups:** the names are drawn with the same stroke weight and round ends as the mark. One language per lockup — never combine AR and EN.
- **Colourways:** teal mark + dark name on light; white mark + white name on dark or teal; dark mark + white dot on yellow; one-colour dark or white for print.
- **Minimum sizes:** horizontal 130px, stacked 100px. Smaller: mark alone; under 32px: `mark-small-32.svg`. Favicon: `favicon.svg`.
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
| on-accent-soft | #0B6B6A | #7CC6C0 | Text on accent-soft |
| on-accent | #FFFFFF | #0E2A2D | Text on accent fills |
| highlight | #FFC845 | #FFC845 | The single most important CTA, the dot, accents |
| coral | #FF6B5B | #FF6B5B | Secondary accent, announcement posts |
| focus | #0E2A2D | #FFC845 | 3px focus outline, 3px offset |

**Rules:**
- White text only on dark, teal 500 and darker.
- Dark text on white, paper, yellow, coral and all light tints.
- Colour never carries meaning alone: links are underlined, messages have an icon.
- Never text on light highlight (#FFC845) or coral (#FF6B5B) in body size.

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

**Rules:**
- Minimum 16px for any reading text; 14px only for labels and dates.
- No letter-spacing or faux italic on Arabic.
- Uppercase tracking only for short English labels.
- Line length 60–75 characters.
- Arabic body never goes below 16px.

## Shape and Space

- **Radius:** tags 8px, inputs 16px, cards 24px, page sections 32px, buttons and chips fully round (pill).
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Touch targets:** at least 44px.
- **Icons:** 24px grid, 2px stroke, round caps and joins, `currentColor`. Directional icons mirror on `/ar`.

## Components

- **Primary button:** teal bg, white text, hover/press states, disabled sunk + muted text. Shape: pill.
- **Highlight button:** yellow bg, dark text. One per view, for "Get a quote". Shape: pill.
- **Secondary button:** white bg, 2px teal border, teal text; hover: accent-soft bg + on-accent-soft text. Shape: pill.
- **Link:** teal, underlined.
- **Tag:** accent-soft bg, on-accent-soft text, radius 8px or full.
- **Card / project card:** surface bg, radius 24px, image on top, tags, title, one-line summary, "Read the case study" link.
- **Alert:** semantic bg + 2px semantic border + icon + bold title + body.
- **Input:** 2px line-strong border, radius 16px, 44px min height, visible label.

## Focus Ring

3px solid focus colour, 3px offset. Same rule for every focusable element.
- Light mode: `#0E2A2D` (dark) for contrast on paper bg.
- Dark mode: `#FFC845` (yellow) for contrast on dark bg.

## Noon (mascot)

- Noon's body is the logo itself; the dot becomes her head, the N's last stroke her arm.
- Head always yellow with dark features and outline. Body teal by default.
- Moments: wave (welcome), explain (tips, case studies), celebrate (launches), idea (head glows), think (loading, 404, Ask Noura typing), wink (quick tricks).
- Noon appears in content, stickers, the 404 page, and Ask Noura. Never in the profile photo slot, CV or formal proposals.
- Always respect `prefers-reduced-motion`.

## Accessibility

WCAG 2.1 AA is the floor. Full RTL support for Arabic, designed natively not mirrored. Icon-only buttons need `aria-label`. Colour never carries meaning alone.
