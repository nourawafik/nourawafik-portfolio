---
name: Noura Wafik — Portfolio
description: Bilingual product-design portfolio; the design system is the visual language.
colors:
  bg: "#F4F2EE"
  surface: "#FFFEFB"
  sunk: "#EAE7E0"
  fg: "#13140F"
  muted: "#636258"
  line: "#E0DDD4"
  line-strong: "#857E6F"
  accent: "#1B5E3F"
  accent-press: "#144A31"
  accent-soft: "#E3EFE8"
  on-accent: "#FFFFFF"
  success: "#1B5E3F"
  warning: "#8A5A00"
  error: "#9B2226"
  info: "#2F4F7A"
  bg-dark: "#121310"
  surface-dark: "#1A1B17"
  sunk-dark: "#0C0D0A"
  fg-dark: "#E9EAE2"
  muted-dark: "#8D8D82"
  line-dark: "#262720"
  line-strong-dark: "#787B6F"
  accent-dark: "#8FD6AE"
  accent-press-dark: "#A8E0C0"
  accent-soft-dark: "#10261C"
  on-accent-dark: "#04150D"
  success-dark: "#8FD6AE"
  warning-dark: "#E8B65A"
  error-dark: "#F08A8D"
  info-dark: "#9DB8E8"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "48px"
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "34px"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "26px"
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "19px"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
    letterSpacing: "0"
  small:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "14px"
    lineHeight: 1.65
    letterSpacing: "0"
  label-mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    letterSpacing: "0"
  display-ar:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "48px"
    letterSpacing: "0"
  headline-ar:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "34px"
    letterSpacing: "0"
  title-ar:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "26px"
    letterSpacing: "0"
  subtitle-ar:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "19px"
    letterSpacing: "0"
  body-ar:
    fontFamily: "Almarai, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.85
    letterSpacing: "0"
  label-ar:
    fontFamily: "Almarai, system-ui, sans-serif"
    fontSize: "12.5px"
    lineHeight: 1.85
    letterSpacing: "0"
rounded:
  control: "10px"
  card: "14px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
  button-primary-press:
    backgroundColor: "{colors.accent-press}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.control}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  panel-sunk:
    backgroundColor: "{colors.sunk}"
    rounded: "{rounded.card}"
  chip:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.control}"
---

<!-- DECIDED SYSTEM, NOT YET IMPLEMENTED (2026-10-07). Noura confirmed these tokens before the code adopted them. The code still uses the earlier neutral system (Inter, IBM Plex Sans Arabic, Tailwind grays, square corners). Treat this file as the target; re-run /impeccable document once the migration lands. -->

# Design System: Noura Wafik — Portfolio

## Overview

**Creative North Star: "Bilingual Systems Studio"**

A calm stone-and-pine foundation where Arabic and Latin typography carry equal weight. The site doesn't decorate itself: tokens, mirrored layouts and component states are the graphics, because the system is the work being shown. Depth comes from panels sunk into the page, never from shadows. One pine accent marks the few things that matter on a page and nothing else.

The density is that of a well-made product spec: generous reading measure, quiet chrome, and precise small-scale detail in metadata and numbers. Both scripts are designed natively. Arabic has its own typefaces, line-height and zero tracking, not Latin settings mirrored.

**Key Characteristics:**
- Warm stone neutrals with a single pine (light) / celadon (dark) accent.
- Two type families per script: Space Grotesk + Figtree for Latin, Alexandria + Almarai for Arabic. JetBrains Mono only for numbers, code and Latin labels.
- Depth from sunk panels and tonal steps, never shadows.
- Soft-cornered controls and cards; pills only for chips.
- Graphics come from the design system itself, never from illustration.

## Colors

Warm, low-chroma stone with one pine-green voice; every pairing is verified against WCAG 2.2 in both modes.

### Primary
- **Pine** (light) / **Celadon** (dark): the single accent. Primary buttons, the active state, and the rare inline emphasis. As text it reaches 6.91:1 on bg in light mode and 11.01:1 in dark.
- **Pine Press** / **Celadon Press**: hover and pressed states of the accent.
- **Pine Wash** / **Deep Pine Wash** (`accent-soft`): the only tinted background in the system, for chips and accent-adjacent fills. Accent on it is 6.54:1 / 9.42:1.
- **On-Accent**: text and icons on accent fills (white in light mode, near-black pine in dark).

### Neutral
- **Stone** (`bg`): the page.
- **Paper** (`surface`): raised content such as cards, inputs and secondary buttons.
- **Quarry** (`sunk`): panels pressed into the page. This is the system's only way of showing depth.
- **Ink** (`fg`): primary text, 16.55:1 / 15.39:1 on bg.
- **Graphite** (`muted`): secondary text, 5.49:1 / 5.56:1 on bg.
- **Hairline** (`line`): decorative section dividers only (1.21:1). Never a UI boundary.
- **Edge** (`line-strong`): input borders, secondary button borders and any interactive edge. 3.60:1 / 4.32:1 on bg, so it passes the 3:1 UI requirement.

### Semantic
Success (same value as the accent), warning, error and info. Each passes as text on bg in both modes. There are no soft-background versions.

### Named Rules
**The One Accent Rule.** There is one accent colour, and it appears at most three times per page.

**The Two Inks Rule.** Text uses `fg` or `muted` and nothing else. There is no third "subtle" level.

**The Two Lines Rule.** `line` is decoration and `line-strong` is affordance. Anything a user can interact with gets `line-strong`.

**The Semantic Quarantine Rule.** Semantic colours never appear in site chrome. They live only inside product screens and form messages.

**The Recompute Rule.** Any colour change must recompute the full contrast table, light and dark, before it ships.

## Typography

**Latin display/headings:** Space Grotesk
**Latin body:** Figtree
**Arabic display/headings:** Alexandria
**Arabic body, labels, metadata:** Almarai
**Numbers, code, Latin-only labels:** JetBrains Mono

**Character:** Space Grotesk's engineered geometry over Figtree's friendly, readable text; Alexandria and Almarai give Arabic the same relationship, so the two scripts read as equals rather than a primary and its translation.

### Hierarchy
Sizes are shared across both scripts. Heading line-height runs from 105% (display) to 150% (h3), depending on level. Latin body text is 165% and all Arabic text is 185%.

- **Display** (48px; Latin −3% tracking): the hero statement.
- **Headline / h1** (34px; Latin −2.5%): page titles.
- **Title / h2** (26px; Latin −2%): section headings.
- **Subtitle / h3** (19px; Latin −1%): card titles and decision headings.
- **Body** (16px, 0 tracking): running text.
- **Small** (14px): secondary text and captions.
- **Micro** (12.5px): labels and metadata. Latin labels may use JetBrains Mono; Arabic labels always use Almarai.

### Named Rules
**The Zero Tracking Rule.** Arabic letter-spacing is always 0. Negative tracking breaks the letter joins.

**The No Mono Arabic Rule.** Never set Arabic in JetBrains Mono. It has no Arabic glyphs, and the bidi algorithm scrambles the word order. Arabic labels use Almarai.

**The Equal Scripts Rule.** Arabic gets its own families, line-height and tracking. It is never Latin styling mirrored.

## Layout

The spacing scale is 4, 8, 12, 16, 24, 32, 40, 48 and 64px. Every gap, padding and margin comes from it. English and Arabic pages are structurally identical: the Arabic layout is the English layout mirrored for RTL, with the same sections, the same order and the same components.

## Elevation & Depth

The system is flat at rest, with no shadows anywhere. Depth only goes down: content that needs grouping or emphasis sits in a **sunk panel** (`sunk`) pressed into the stone page, while cards sit on `surface`, one tonal step up. Separation comes from tone and borders, never from blur or shadow.

### Named Rules
**The Sunk, Never Lifted Rule.** No drop shadows under cards or anything else. If something needs depth, sink it.

## Shapes

There are three radii. **Controls** (buttons, inputs) use gently softened corners (10px), **cards and panels** slightly rounder ones (14px), and **chips** are full pills (999px). Nothing else is rounded, and no other radius values exist.

## Components

### Buttons
- **Shape:** control radius (10px).
- **Primary:** accent fill with on-accent text. The press state moves to accent-press (on-accent on press is 10.23:1 / 12.60:1).
- **Secondary:** surface fill, `fg` text, `line-strong` border.
- **Focus:** see Focus Ring; the same treatment applies to every variant.

### Chips
- **Style:** pill radius, accent-soft fill, accent text. Chips are the pill shape's only use.

### Cards / Containers
- **Card:** surface background, card radius (14px), no shadow.
- **Sunk panel:** sunk background, card radius, no shadow. Use it to group or emphasise content.
- **Border:** `line` only where purely decorative; `line-strong` if the card is itself interactive.

### Inputs / Fields
- **Style:** surface fill, `line-strong` border, control radius.
- **Error:** error colour on the message text only, never as a chrome fill.

### Focus Ring
A 2px gap in `bg`, then a 3px `accent` ring outside it, never a spread shadow. One rule for every focusable element, primary and ghost buttons alike. The gap means the ring only ever touches the page background (accent on bg is 6.91:1 / 11.01:1), so it never has to contrast with the element it surrounds.

### Signature: system-derived graphics
Diagrams, tokens, mirrored LTR/RTL layouts and component-state sheets serve as the site's imagery. Any visual that isn't a product screen must be built from the design system's own parts.

## Do's and Don'ts

### Do:
- **Do** keep the accent to three appearances or fewer per page.
- **Do** use `line-strong` on every interactive edge and `line` only for decorative dividers.
- **Do** give depth by sinking content into a `sunk` panel.
- **Do** set Arabic in Alexandria (headings) and Almarai (body, labels, metadata), at 185% line-height and 0 tracking.
- **Do** recompute the full light/dark contrast table after any colour change.
- **Do** keep English and Arabic pages structurally identical.

### Don't:
- **Don't** look like a template portfolio: no hero gradients, glassmorphism, or mockups floating on blobs.
- **Don't** over-animate: no scroll-jacking, parallax, or motion that slows a skimming reader.
- **Don't** put soft grey drop shadows under cards.
- **Don't** set Arabic text in a monospace font.
- **Don't** apply negative letter-spacing to Arabic.
- **Don't** chain metadata with middle dots ("Lead designer · Web + mobile · 2026"). Bilingual name pairs such as "دايرتنا · Da'eratna" are names, not metadata, and keep their dot.
- **Don't** use decorative illustration. Graphics must come from the design system itself.
- **Don't** use semantic colours in site chrome.
- **Don't** add a third text colour, a second accent, or soft semantic backgrounds.
- **Don't** use Inter or IBM Plex Sans Arabic. Both have been removed from the system.
