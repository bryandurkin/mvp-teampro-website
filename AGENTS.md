# MVP Team Pro website: rules for every agent and team member

Read this whole file before changing anything.

## How the site works
- Pages are edited in src/. Never edit the finished .html files in the repo root; the build overwrites them.
- The header and footer live in partials/header.html and partials/footer.html. Every page includes them with <!-- include: header --> and <!-- include: footer -->. Never paste header or footer code into a page.
- Build: node build-pages.mjs . && node scripts/build-worker.mjs
- library/ holds the approved section library (components.html), the section list (SECTIONS.md) and the design mockups. It is reference only and never goes live.

## How to build or change a page
1. Look at the mockup or request. List every section it contains.
2. Match each section to a type in library/SECTIONS.md. Most sections are an existing type or a variant of one.
3. If a section truly does not exist in the library, STOP. Describe it and ask for approval. Once approved, add it to SECTIONS.md and components.html first, then use it.
4. Build the page from library sections only, copying the markup and class names from library/components.html. Change the text and images, not the structure.
5. Show the result and the changes before committing.

## Design rules
- No new CSS unless a new section was approved in step 3.
- Colors only from the variables at the top of styles.css. Never type in a hex color.
- Text sizes: body at least 16px, secondary at least 14px, only labels and fine print at 12px.
- Use the logo image in the header and footer. Never recreate it as text.
- Icons: solid Heroicons, inline SVG.

## Content rules
- Never invent numbers, stats, results, client names, or testimonials. If a page needs one that has not been supplied, use the placeholder [STAT NEEDED] or [TESTIMONIAL NEEDED] and list it in your report.
- Testimonials come only from the approved testimonials list, in the client's exact words.
- Team wording: a U.S.-based leadership team with trained team members in the Philippines. Never say the whole team is U.S.-based.
- Never use em dashes in any page text or file.

## Safety
- Never commit, push, or deploy without approval.
- Always explain what you changed in plain English.
