---
name: MVP Team Pro
description: Marketing implementation firm. Follow-up and content, done for you.
colors:
  mvp-blue: "#0063fb"
  mvp-blue-strong: "#004ecc"
  mvp-blue-line: "#9fc3fd"
  mvp-blue-soft: "#e8f1ff"
  mvp-blue-tint: "#f4f8ff"
  accent-light: "#6cc2ff"
  deep-navy: "#062a5e"
  deep-navy-2: "#0a4396"
  ink: "#0b2a5c"
  text: "#173b5d"
  muted: "#5c7287"
  surface-soft: "#f3f8fd"
  card-line: "#dbe6f2"
  white: "#ffffff"
  on-dark-muted: "#cbdaf0"
  danger: "#d83a3a"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.25
  lead:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  secondary:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.45
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    letterSpacing: "0.12em"
  hand-note:
    fontFamily: "Caveat, cursive"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.05
rounded:
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  section: "64px"
  section-roomy: "96px"
  section-compact: "46px"
  card: "24px"
  gutter: "24px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.mvp-blue}"
    textColor: "{colors.white}"
    typography: "{typography.secondary}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.mvp-blue-strong}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.mvp-blue}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
    width: "230px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  stat-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 18px"
  cta-band:
    backgroundColor: "{colors.deep-navy}"
    textColor: "{colors.white}"
    padding: "44px 0"
---

# Design System: MVP Team Pro

## Overview

**Creative North Star: "The Operator's Briefing"**

The site reads like a capable operations manager walking an owner through what got done: plain claims, real numbers, a clear next step. Confidence comes from structure and proof, not decoration. Headlines are heavy and tightly tracked, body copy is roomy and easy to read, and every page alternates calm white reading sections with deep navy and MVP blue bands that mark the moments that matter.

The system is calm and trustworthy rather than loud. Shadows are soft and blue-tinted, corners are gently rounded, and hover states move a single pixel. The one human touch is the handwritten Caveat note, used sparingly, like a manager's margin comment on a report.

Everything is assembled from a fixed library of 25 approved section types (`shared/library/SECTIONS.md`, live reference in `shared/library/components.html`). New visual ideas enter the library first, with approval, and only then appear on a page.

**Key Characteristics:**
- White, navy and MVP blue only, with pale blue as a quiet accent.
- Heavy Manrope headlines with tight negative tracking; generous 1.6 body leading.
- High-contrast bands set the page rhythm: never more than two light sections in a row.
- Soft blue-tinted shadows and 8px or 12px corners; nothing sharp, nothing bubbly.
- Proof-first: stat tiles, checklists and comparison tables carry the argument.
- One optional handwritten note per moment, never as body text.

## Colors

A disciplined two-blue palette on white: MVP Blue marks action and emphasis, Deep Navy carries weight and contrast, and pale blues soften the space between.

### Primary
- **MVP Blue** (`mvp-blue`): the logo blue. Primary buttons, links, eyebrow labels, icons, list bullets, the highlighted word in a headline, and the solid `.s-bg-blue` band. It is the color of "do this next."
- **MVP Blue Strong** (`mvp-blue-strong`): hover state of primary buttons only.
- **MVP Blue Line** (`mvp-blue-line`): border of the secondary (outline) button.

### Secondary
- **Deep Navy** (`deep-navy`): the dark band color. Narrative bands, statement bands, dark steps, the CTA band, photo overlays. Paired with **Deep Navy 2** (`deep-navy-2`) for the subtle diagonal gradient used on most dark sections.
- **Accent Light** (`accent-light`): the only blue allowed as text on navy, for the highlighted line of a pull statement and handwritten notes on dark sections.

### Neutral
- **Ink** (`ink`): headings and strong labels on light backgrounds.
- **Text** (`text`): body copy.
- **Muted** (`muted`): secondary lines, captions, stat labels.
- **Surface Soft** (`surface-soft`): the lighter pale background (`.s-soft`, icon strip, hero media side).
- **MVP Blue Soft** (`mvp-blue-soft`): the stronger pale background (`.s-bg-pale`), icon circles, the primary panel of an asymmetrical grid.
- **MVP Blue Tint** (`mvp-blue-tint`): faint fill for testimonial bands.
- **Card Line** (`card-line`): borders on cards, tiles, inputs and FAQ items.
- **On-Dark Muted** (`on-dark-muted`): secondary text on navy.
- **Danger** (`danger`): the cross mark in "not for you" and comparison lists. Never used for anything else.

The header, footer and older pages also use a legacy set (`--navy`, `--blue`, `--bright`, `--soft`, `--line` and menu tokens) defined in the same `:root`. Section work uses the library tokens above.

### Named Rules
**The Variables Only Rule.** Every color comes from a `:root` variable in `shared/styles.css`. A typed-in hex value in a page or section style is a bug.

**The No New Colors Rule.** Navy, MVP blue, white and light blue are the whole palette. Danger red exists only for cross marks.

**The Pale Is an Accent Rule.** Pale blue backgrounds sit between white sections for relief. They are never the default page background.

## Typography

**Display Font:** Manrope (with Arial, sans-serif)
**Body Font:** Manrope (with Arial, sans-serif)
**Accent Font:** Caveat (with cursive), handwritten notes only

**Character:** One geometric sans in weights 400 to 800 does all the work: heavy and tightly tracked for headlines, relaxed and open for reading. Caveat adds a single human, handwritten voice on top.

### Hierarchy
- **Display** (700, clamp 2.5rem to 3.9rem, line-height 1.02, tracking -0.035em): the hero H1 only. One word or phrase may be wrapped in a span and turn MVP Blue.
- **Headline** (700, clamp 1.75rem to 2.35rem, line-height 1.12): section titles (`.s-title`).
- **Statement** (800, clamp 1.9rem to 3rem, line-height 1.15): pull statements and editorial statements. The second line turns MVP Blue (Accent Light on navy).
- **Title** (700, 1.125rem, line-height 1.25): card and feature headings.
- **Lead** (400, 1.0625rem, line-height 1.6): the paragraph under a section title and hero text, max about 600px wide.
- **Body** (400, 1rem, line-height 1.6): all reading text.
- **Secondary** (500, 0.875rem, line-height 1.45): captions, stat labels, detail lines, text links.
- **Label** (800, 0.75rem, tracking 0.12em, uppercase): eyebrows above section titles, in MVP Blue.
- **Hand note** (Caveat 700, 1.75rem, rotated -6deg): optional margin note, MVP Blue on light and Accent Light on dark.

### Named Rules
**The 16/14/12 Rule.** Body text is at least 16px, secondary text at least 14px, and only labels, eyebrows and fine print go down to 12px. Nothing smaller, ever.

**The One Voice, One Note Rule.** Caveat is never used for body copy, headings or buttons. One handwritten note per section at most.

## Layout

A centered container (max 1200px, 24px side gutter; 15px gutter below 780px) holds every section. Sections stack full width with a default vertical padding of 64px; roomy sections (narrative band, pull statement, photo-led, roomy CTA) use 96px, and most sections tighten to 46px on smaller screens. Section heads sit left-aligned at up to 760px wide, or centered for intro moments.

Grids are simple and even: 2 to 6 equal columns for cards, 4 or 5 for stat tiles, 3 to 5 for the icon strip, 50/50 or 40/60 for editorial splits. The hero is a two-column split where the copy half is white and the media half is pale blue, running to the viewport edge.

Breakpoints are 1060px (header collapses to a menu button), 900px (five and six column grids drop to three, four-item icon strips go two by two), 780px (most grids drop to two columns, splits stack) and 520px (single column, header CTA hides).

### Named Rules
**The Two Light Sections Rule.** Never more than two light sections (white, pale blue, soft) in a row.

**The Three Breaks Rule.** Every long landing page has at least three high-contrast breaks (navy, MVP blue, dark split, photo-led or dark band) before the final CTA. The hero does not count.

## Elevation & Depth

A hybrid system: tonal banding does most of the depth work (white against pale blue against navy), and soft, blue-tinted shadows lift interactive or proof elements just off the page. Shadows are always diffuse and low-contrast, tinted with navy rather than black.

### Shadow Vocabulary
- **Card** (`--shadow-card`: `0 8px 24px rgba(11,42,92,.06)`): resting state of cards, stat tiles and hero tags.
- **Lift** (`--shadow-lift`: `0 18px 40px rgba(11,42,92,.14)`): overlay cards on photos, the hero video frame, anything floating over imagery.
- **Brand** (`--shadow-brand`: `0 10px 24px rgba(0,99,251,.20)`): glow under the primary button only.
- **Menu** (`--shadow-menu`: `0 18px 42px rgba(7,57,99,.14)`): dropdown menus.

### Named Rules
**The Soft Lift Rule.** Shadows are tinted navy or blue, never pure black, and never sharper than the card shadow at rest.

**The Flat Bands Rule.** On navy and MVP blue sections, prefer white type, simple rules and icons over white cards. Depth on dark comes from contrast, not shadow.

## Shapes

Gently rounded and consistent. Cards, tiles, panels and the hero video use a 12px radius; buttons, inputs, FAQ items, overlays and dropdown links use 8px. Circles appear only for icon backgrounds, numbered step badges and the stat donut. The pill shape (999px) is reserved for small service tags over hero photos. Borders are 1px in Card Line on light surfaces and a translucent white on dark ones. Pull statements carry a 4px MVP Blue rule on their left edge.

## Components

Calm and trustworthy: solid fills, soft shadows, gentle corners, quiet hover states.

### Buttons
- **Shape:** gently rounded (8px).
- **Primary:** MVP Blue fill, white 800-weight text at 0.94rem, 14px by 22px padding, soft blue glow underneath. Text usually ends with a right arrow.
- **Hover:** shifts to MVP Blue Strong and lifts 1px; transitions run 0.2s ease.
- **Secondary:** white fill, MVP Blue text, 1px MVP Blue Line border. Used beside a primary, never alone as the main action.
- **White:** white fill with navy text, minimum 230px wide, for the CTA band and other dark sections.
- **Text link:** 0.875rem, 800 weight, MVP Blue, with an arrow. External links add the small external-arrow icon and open in a new tab.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** white on light sections; MVP Blue Soft for a featured primary panel.
- **Shadow Strategy:** card shadow at rest (see Elevation & Depth).
- **Border:** 1px Card Line.
- **Internal Padding:** 24px (48px for the asymmetrical primary panel).
- **Variants:** 2 to 6 columns, number badge, big heading stat, small stat group, callout, and detailed long-form.

### Stat Tiles
- **Style:** white tile, 12px corners, Card Line border, card shadow, icon beside a big Ink number (1.5rem, 800) and a Muted label. The stacked variant enlarges the number to 2.25rem.
- **Rule:** every number comes from the approved stats list; a missing one shows as [STAT NEEDED].

### Inputs / Fields
- **Style:** white fill, 1px Card Line border, 8px corners, 12px by 14px padding, 16px text.
- **Focus:** browser default at present; no custom focus style is defined yet.

### Navigation
- **Header:** sticky, near-white with a light blur and a hairline bottom border, 82px tall. Logo image left (200px), centered links in navy 700 at 0.82rem turning blue on hover, primary "Get Your Free Leak Report" button right.
- **Dropdowns:** white 330px panel, 12px corners, menu shadow, fading in and sliding 8px. Each item has a bold title and a small muted description.
- **Mobile:** below 1060px a bordered menu button opens a full-width panel; dropdowns expand inline. Below 520px the header button hides.
- **Footer:** logo and one-line description on the left, small bold links on the right, fine print row below.

### FAQ Accordion
- **Style:** white item, 1px Card Line border, 8px corners, bold Ink question with an MVP Blue plus sign that becomes a minus when open. One or two columns.

### CTA Band (signature)
- **Style:** full-width band with a gradient from Deep Navy to MVP Blue, heading and one line of text on the left, a white button and a "No pressure" style reassurance line on the right. 44px padding on every page, 96px in the roomy variant. Every page ends with it.

### Named Process Rail (signature)
- **Style:** named stages, each under a bar that deepens in color toward the last stage, with a short sentence under each. No numbers and no arrows; the names and the deepening bars carry the direction. Horizontal on desktop, vertical with the bar on the left on phones.

## Do's and Don'ts

### Do:
- **Do** build every page from the 25 library section types, copying markup and class names from `shared/library/components.html`.
- **Do** take every color from the `:root` variables in `shared/styles.css`.
- **Do** keep body text at 16px or more, secondary at 14px or more, and only labels at 12px.
- **Do** alternate light and dark: at most two light sections in a row, and at least three high-contrast breaks before the final CTA.
- **Do** use solid Heroicons as inline SVG for icons, in MVP Blue on light and white on dark.
- **Do** use the logo image in the header and footer.
- **Do** end every page with the CTA band.

### Don't:
- **Don't** type a hex color into a page or section style, or introduce any color outside navy, MVP blue, white and light blue.
- **Don't** add new CSS unless a new section type has been approved and added to the library first.
- **Don't** recreate the logo as text.
- **Don't** use pale blue as the default background.
- **Don't** put white cards on navy or MVP blue bands unless they are genuinely needed.
- **Don't** turn every list or idea into a card; consider typography, a rail, a split, a list or a pull statement first.
- **Don't** use numbered steps (Step 1, 01 / 02) in the composition patterns 19 to 25.
- **Don't** use photos of handshakes, headsets or posed sales teams; use candid conversation between professionals.
- **Don't** use Caveat for anything but an occasional handwritten note.
- **Don't** use em dashes in any text.
