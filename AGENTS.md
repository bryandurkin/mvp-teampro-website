# MVP Team Pro website: rules for every agent and team member

Read this whole file before changing anything.

## How the site works
- Pages are edited in src/. Never edit the finished .html files in the repo root; the build overwrites them.
- The shared page head lives in partials/head.html (character set, viewport, font links including Caveat, and the stylesheet). Every page includes it with <!-- include: head --> inside <head>, followed by the page's own <title> and meta description. Never paste the shared head tags into a page.
- The header and footer live in partials/header.html and partials/footer.html. Every page includes them with <!-- include: header --> and <!-- include: footer -->. Never paste header or footer code into a page.
- Menu links start with / (example: /#services) so they work from any page.
- Build: node build-pages.mjs . && node scripts/build-worker.mjs
- library/ holds the approved section library (components.html), the section list (SECTIONS.md), the approved content lists (TESTIMONIALS.md and STATS.md) and the design mockups. It is reference only and never goes live.
- The current home and Home Services pages predate the library and are being rebuilt. Do not copy markup or styles from them. Copy only from library/components.html.

## How to build or change a page
1. Look at the mockup or request. List every section it contains.
2. Match each section to a type in library/SECTIONS.md. Most sections are an existing type or a variant of one.
3. If a section truly does not exist in the library, STOP. Describe it and ask for approval. Once approved, add it to SECTIONS.md and components.html first, then use it.
4. Build the page from library sections only, copying the markup and class names from library/components.html. Change the text and images, not the structure.
5. Show the result and the changes before committing.

When adding a new page, add its link to partials/header.html, and to partials/footer.html if it belongs there.

Hidden until its page exists: "Results" was removed from the header and footer menus because there is no Results page yet. When the Results page is built, add it back to partials/header.html as a top-level link between the Industries dropdown and the Resources dropdown, and to the footer menu between Industries and Resources, pointing to the new page.

A new page in src/ starts from this skeleton. Keep all three include lines and the script line, and fill <main> with library sections:

```html
<!doctype html>
<html lang="en">
<head>
  <!-- include: head -->
  <title>Page Title | MVP Team Pro</title>
  <meta name="description" content="One sentence about this page.">
</head>
<body>
<!-- include: header -->

<main>
  <!-- library sections go here -->
</main>

<!-- include: footer -->
<script src="script.js"></script>
</body>
</html>
```

Image paths: pages in src/ use assets/..., not ../assets/.... The library page uses ../assets/... only because it sits inside library/. Fix the path when copying markup from components.html.

## Design rules
- No new CSS unless a new section was approved in step 3.
- Colors only from the variables at the top of styles.css. Never type in a hex color.
- Text sizes: body at least 16px, secondary at least 14px, only labels and fine print at 12px.
- Use the logo image in the header and footer. Never recreate it as text.
- Icons: solid Heroicons, inline SVG.

## Content rules
- Never invent numbers, stats, results, client names, or testimonials. If a page needs one that has not been supplied, use the placeholder [STAT NEEDED] or [TESTIMONIAL NEEDED] and list it in your report.
- Nothing goes on a page unless it is in library/STATS.md (numbers, stats, results) or library/TESTIMONIALS.md (testimonials, client names).
- Testimonials come only from the approved testimonials list (library/TESTIMONIALS.md), in the client's exact words.
- Team wording: a U.S.-based leadership team with trained team members in the Philippines. Never say the whole team is U.S.-based.
- Never use em dashes in any page text or file.

## Safety
- Every push to main deploys the live site automatically. Never push without approval.
- Never commit or deploy without approval.
- Always explain what you changed in plain English.
