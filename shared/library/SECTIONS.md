# MVP Team Pro section library (approved list)

Every page on the site is built ONLY from these 25 section types (18 original sections plus 7 composition patterns).
Reference images for each are in mvpteampro/library/mockups/.
If a new design needs something not on this list, it is added here first,
approved by Bryan, and only then used on a page.

## Design rules
- Colors come only from the variables at the top of shared/styles.css (:root). No typed-in hex colors in section styles.
- Brand blue from the logo: #0063fb (add as a variable, for example --brand).
- Text sizes: body text at least 1rem (16px). Secondary text at least 0.875rem (14px). Only labels, eyebrows and fine print may go down to 0.75rem (12px). Nothing smaller.
- One class name per section type, with modifier classes for variants (example: .s-cards, .s-cards--4col, .s-cards--numbered).
- Handwritten notes (Caveat font) are an optional extra any section may use, placed the same way everywhere.
- Never use em dashes in page text.

## The section types

1. Hero
   Headline, text, one or two buttons, image on the right.
   Portrait option (.s-hero__media--portrait on .s-hero__media): anchors the photo crop near the top so a person's face sits in the same place on every page. Use the full-size photo (home_hero_bryan.jpg), not the small founder_portrait.webp.
   Left-anchored option (.s-hero__media--left): keeps people on the left side of a wide photo in frame.
   Optional extras: eyebrow label, large subheadline under the headline, overlay card on the image (checklist, quote, or stat list), handwritten note, detail list (Industry / Focus / Channels, as on the case study), service tags over the photo (Plumbing / HVAC / Electrical / Exterior, as on Home Services).
   Mockups: every page.

2. Icon strip
   One row of 3 to 5 short claims, each with an icon and one or two short lines.
   Mockups: under the hero on most pages; "From Follow-Up to Growth" icons on About.

3. Intro text block
   Centered heading and paragraphs, optional handwritten note.

4. Card grid
   Cards with icon, heading, and any of: short paragraph, bullet list, check list, link.
   Options: 3, 4, 5 or 6 columns; number badge (1, 2, 3...); big heading stat (5x8 / 5x12 / 7x24 coverage); small stat group inside the card (Results by Service / by Industry).
   Mockups: Common Challenges, How MVP Team Pro Helps, What We Measure, What Clients Can Expect, Our Approach, The Big Picture, Support When You Need It.
   Two columns (4G, .s-cards--2col): two larger cards side by side, stacking on phones, with an optional centered statement below (.s-intro__body inside the same section). Used for Specialized Programs on the home page.
   Single callout card (4H, .s-cards--callout): one card, no heading above it, for a short contextual bridge between two pages. Used on the Customer Reactivation page.
   Detailed cards (4I, .s-cards--detail): for long-form cards with several paragraphs and a list. Spaces the paragraphs, darkens the opening line and sets the closing line apart. Used for the six services on Customer Support & Follow-Up.
   External links: use the small arrow icon (.ext-icon) inside the link, and open in a new tab with rel="noopener".

5. Feature row
   3 or 4 columns, icon beside or above a heading and text. Light or dark background.
   Mockups: People / Process / Technology, More Long-Term Value, Why the Results Hold Up, Good Fit For / Not a Fit For / Prefer to Talk Now.

6. Step band
   A row of steps joined by arrows or a line.
   Options: dark background with intro text on the left (customer journey), with an optional eyebrow label above the steps; or light background timeline (Ongoing Growth Engine, First 30 Days); numbered or icon steps.
   Rows of four (6E): for journeys with seven or more steps, or steps that need a full sentence each. Heading above the steps instead of beside them. Approved for the Customer Support & Follow-Up page.

7. Dark statement band
   Dark navy band with two or three columns.
   Layouts: big stat (donut) plus checklist (Industrial); Goal / Result columns (case study).

8. Results
   Layouts: three photo cards with a big number each; or photo plus quote plus 4 stat tiles (featured result).

9. Stat grid
   Rows of big numbers with icon and label. 4 to 10 tiles.
   Mockups: By the Numbers (Results), five stats under the case study hero, Key Results.

10. Image card grid
    Cards with a photo on top, heading and text (Industries).

11. Image plus text split
    Image on one side, heading and paragraphs on the other.
    Founder bio is a version of this (portrait, quote, signature).
    Mockups: Why MVP Team Pro Exists, Built to Support Real Businesses (About).

12. Testimonial
    Layouts: single quote with photo and name (wide band); or three quotes side by side (Client Voices).
    Content comes from the approved testimonials list only.

13. Comparison table
    Two columns, one with crosses, one with checks, the preferred column highlighted.
    Mockup: Typical VA vs MVP Team Pro Managed Team (How It Works).

14. Team grid
    Square portraits (cartoon illustrations) with name and role, grouped by department.
    Mockup: Meet the Team (About).

15. Logo strip
    Heading and text plus a row of partner or CRM logos. Light or dark background.

16. Booking section
    Form on the left, scheduling calendar on the right, "What to Expect" steps below.
    The calendar is an embed from the scheduling tool, not custom built.
    Mockup: Fit Call page.

17. FAQ
    Accordion, one or two columns, optional "View All FAQs" link.

18. Call-to-action band
    Dark band, heading, one line of text, one button, "No pressure" line. Same size on every page.
    Roomy (18B, .s-cta--roomy): more vertical space, for a page that ends on one strong message. Approved for Referral Team Pro How It Works.

## Composition patterns (19 to 25)

Approved for Referral Team Pro How It Works. They give a page rhythm without changing the brand: same fonts, colors, buttons and spacing.
Rule: do not turn every list or idea into a card. Before using a card, ask whether the content reads better as typography, a process rail, a split layout, an image, a list, a pull statement or a narrative band. No numbered steps (Step 1, 01 / 02) in these patterns.

19. Editorial split (.s-editorial)
    A large statement (.s-editorial__statement, optional .s-editorial__sub) on one side, supporting copy, a list, a rail or a visual on the other.
    Options: 50/50 (default), 40/60 (.s-editorial--40), 60/40 (.s-editorial--60), swapped sides (.s-editorial--reverse), vertically centered (.s-editorial--center).
    Divided (.s-editorial--divided): two equal columns with one central rule and a heading each (.s-editorial__heading). A lighter alternative to the comparison table.

20. Image plus text offset (.s-offset)
    A large human photograph with a text panel that overlaps its edge. Optional stacked list or button in the panel.
    Options: image left (default) or right (.s-offset--reverse). Photos: candid conversation between professionals. No handshakes, headsets or posed sales teams.

21. Named process rail (.s-rail, inside any section; .s-process for a section built around one)
    Named stages, each under a bar that deepens in color toward the last stage, with a short sentence under each. No numbers and no arrows: the names and the deepening bars carry the direction.
    Horizontal on desktop; on phones, and with .s-rail--vertical everywhere, the bar sits on the left of each stage.
    .s-rail--outcome adds a check mark to the last stage when it is a real outcome. Leave it off for loops and cycles.

22. Large pull statement (.s-pull, or .s-pull__text inside another section)
    One or two large lines with generous space. The second line goes in a <span> and turns brand blue. Centered option: .s-pull--center.

23. Stacked feature list (.s-stack)
    Optional small icon, heading and one sentence per item, separated by rules instead of boxes.
    Options: without icons (.s-stack--plain), two columns (.s-stack--2col). Works on the narrative band.

24. Asymmetrical content grid (.s-asym)
    One primary idea in a soft panel (.s-asym__primary) takes more space; supporting ideas stack beside it (usually a .s-stack). Options: 60/40 (default), 50/50 (.s-asym--even).

25. Narrative band (.s-narrative)
    Full-width navy band for one major idea: large headline, short copy, simple columns with dividers (.s-narrative__cols, .s-narrative__col), optional pull statement. No white cards on the band unless genuinely needed.

## Background treatments and page rhythm

Add one background class to a section. Text, lists, rails and stacks inside a dark section switch to white automatically; cards keep their normal colors.

| Treatment | Class | Use for |
|---|---|---|
| White | .s-bg-white (or no class) | Default reading sections |
| Pale blue | .s-bg-pale (stronger) or .s-soft (lighter) | An accent between white sections. Not the default background |
| Solid navy | .s-bg-navy | Major narrative moments, important statements, section transitions |
| Solid MVP blue | .s-bg-blue | Important statements and a strong break; white text and check lists on blue |
| Dark split | .s-editorial .s-editorial--dark | An editorial split on navy, with a light rule between the sides |
| Photo-led | .s-photo, .s-photo__img, .s-photo__body | A full-width human photograph with a navy overlay and white text |
| Dark callout band | .s-pull .s-pull--dark (navy) or .s-pull--blue | One or two large lines on a solid band |

Existing dark sections also count as dark: 5D (.s-features--dark), 6B (.s-steps--dark), 7 (.s-statement), 25 (.s-narrative), 18 (.s-cta).

Rules:
- Never more than two light sections in a row (white, pale blue and .s-soft are all light).
- Pale blue is an accent, not the default background.
- Use navy and MVP blue for major narrative moments, section transitions and important statements.
- On dark backgrounds, prefer white type and simple lines or icons over white cards.
- Every long landing page has at least 3 meaningful high-contrast breaks (navy, MVP blue, dark split, photo-led or dark band) before the final CTA. The hero does not count.
- Only the existing brand colors: navy, MVP blue, white and light blue. No new colors.
