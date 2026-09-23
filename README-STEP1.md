# Step 1: Shared header and footer

## What changed
- The header and footer now live in ONE place: `partials/header.html` and `partials/footer.html`.
- Pages live in `src/`. Where the header or footer goes, the page just says:
  `<!-- include: header -->` and `<!-- include: footer -->`
- `build-pages.mjs` stitches them together and writes finished pages to the site folder.
- Menu links now start with `/` (example: `/#services`) so they work from any page.

## Rules
1. Never edit the header or footer inside a page. Edit the file in `partials/`.
2. Never edit the finished pages in the site folder. Edit `src/`, then run the build.
3. A new page = copy a file in `src/`, keep both include lines, replace the middle.

## Build
node build-pages.mjs <site-folder>
