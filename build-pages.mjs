// build-pages.mjs
// Assembles every page in /src by dropping in the shared header and footer
// from /partials, then writes the finished pages to the site folder.
//
// Usage:  node build-pages.mjs            (writes to ./site)
//         node build-pages.mjs public     (writes to ./public)

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.argv[2] || "site";
const SRC_DIR = "src";
const PARTIALS_DIR = "partials";

mkdirSync(OUT_DIR, { recursive: true });

const partials = {};
for (const file of readdirSync(PARTIALS_DIR)) {
  if (file.endsWith(".html")) {
    partials[file.replace(".html", "")] = readFileSync(join(PARTIALS_DIR, file), "utf8").trim();
  }
}

let built = 0;
for (const file of readdirSync(SRC_DIR)) {
  if (!file.endsWith(".html")) continue;
  let html = readFileSync(join(SRC_DIR, file), "utf8");

  html = html.replace(/<!--\s*include:\s*([\w-]+)\s*-->/g, (_, name) => {
    if (!partials[name]) {
      console.error(`ERROR: ${file} asks for partial "${name}" but partials/${name}.html does not exist.`);
      process.exit(1);
    }
    return partials[name];
  });

  writeFileSync(join(OUT_DIR, file), html);
  console.log(`built ${OUT_DIR}/${file}`);
  built++;
}

console.log(`Done. ${built} page(s) built with shared header and footer.`);
