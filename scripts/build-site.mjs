// Builds one site folder (for example: node scripts/build-site.mjs mvpteampro).
//
//   1. Collects the shared files (shared/styles.css, shared/script.js, shared/assets if present)
//      and the site's own assets into <site>/dist/site/.
//   2. Builds every page in <site>/src/ into <site>/dist/site/, dropping in the header, footer and
//      head from <site>/partials/ when the site has its own copy, otherwise from shared/partials/.
//   3. Bundles that folder into a single Worker script, <site>/dist/worker.js.
//      Assets are embedded so deploys don't depend on Workers Static Assets uploads.
//
// Each site deploys to its own Cloudflare Worker, named in <site>/wrangler.jsonc.
import {
  readFileSync, readdirSync, statSync, mkdirSync, writeFileSync, existsSync, rmSync, cpSync,
} from "node:fs";
import { join, extname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const repo = fileURLToPath(new URL("..", import.meta.url));

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function walk(path) {
  return statSync(path).isDirectory()
    ? readdirSync(path).flatMap((name) => walk(join(path, name)))
    : [path];
}

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

export function buildSite(site) {
  if (!site || !/^[a-z0-9-]+$/.test(site)) fail("usage: node scripts/build-site.mjs <site-folder>");
  const siteDir = join(repo, site);
  const srcDir = join(siteDir, "src");
  const sharedDir = join(repo, "shared");
  if (!existsSync(srcDir) || !readdirSync(srcDir).some((name) => name.endsWith(".html"))) {
    fail(`${site}/src has no pages yet, so there is nothing to build or deploy.`);
  }

  const outDir = join(siteDir, "dist");
  const pubDir = join(outDir, "site");
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(pubDir, { recursive: true });

  // 1. Shared files, then the site's own assets (a site's file wins over a shared one).
  for (const name of ["styles.css", "script.js"]) {
    const from = join(sharedDir, name);
    if (existsSync(from)) cpSync(from, join(pubDir, name));
  }
  for (const dir of [join(sharedDir, "assets"), join(siteDir, "assets")]) {
    if (existsSync(dir)) cpSync(dir, join(pubDir, "assets"), { recursive: true });
  }

  // 2. Pages. A partial in <site>/partials/ overrides the one in shared/partials/.
  const partials = {};
  for (const dir of [join(sharedDir, "partials"), join(siteDir, "partials")]) {
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) {
      if (file.endsWith(".html")) partials[file.replace(".html", "")] = readFileSync(join(dir, file), "utf8").trim();
    }
  }
  // Each page links styles.css and script.js with a short fingerprint of the file
  // (styles.css?v=1a2b3c4d), so browsers fetch the new copy as soon as either file changes.
  const versions = {};
  for (const name of ["styles.css", "script.js"]) {
    const path = join(pubDir, name);
    if (existsSync(path)) versions[name] = createHash("sha256").update(readFileSync(path)).digest("hex").slice(0, 8);
  }
  let built = 0;
  for (const file of readdirSync(srcDir)) {
    if (!file.endsWith(".html")) continue;
    let html = readFileSync(join(srcDir, file), "utf8");
    html = html.replace(/<!--\s*include:\s*([\w-]+)\s*-->/g, (_, name) => {
      if (!partials[name]) fail(`${site}/src/${file} asks for partial "${name}" but no ${name}.html exists in ${site}/partials or shared/partials.`);
      return partials[name];
    });
    html = html.replace(/(href|src)="(styles\.css|script\.js)"/g, (match, attr, name) =>
      versions[name] ? `${attr}="${name}?v=${versions[name]}"` : match);
    writeFileSync(join(pubDir, file), html);
    built++;
  }
  console.log(`built ${built} page(s) for ${site} into ${site}/dist/site`);

  // 3. Worker bundle.
  const include = [
    ...readdirSync(pubDir).filter((name) => extname(name).toLowerCase() === ".html"),
    ...["styles.css", "script.js", "assets"].filter((name) => existsSync(join(pubDir, name))),
  ];
  const files = {};
  for (const entry of include) {
    for (const file of walk(join(pubDir, entry))) {
      const type = types[extname(file).toLowerCase()];
      if (!type) continue;
      files["/" + relative(pubDir, file).split(sep).join("/")] = { type, body: readFileSync(file).toString("base64") };
    }
  }

  const worker = `const FILES = ${JSON.stringify(files)};

const cache = new Map();
function decode(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export default {
  async fetch(request) {
    let path = new URL(request.url).pathname;

    if (path.endsWith("/")) path += "index.html";

    // Support clean page URLs like /home-services-franchises
    if (!FILES[path] && !path.includes(".")) {
      const htmlPath = path + ".html";
      if (FILES[htmlPath]) path = htmlPath;
    }

    const file = FILES[path];
    if (!file) return new Response("Not found", { status: 404 });

    if (!cache.has(path)) cache.set(path, decode(file.body));
    return new Response(cache.get(path), {
      headers: {
        "content-type": file.type,
        "cache-control": path.endsWith(".html") ? "no-cache" : "public, max-age=3600",
      },
    });
  },
};
`;
  writeFileSync(join(outDir, "worker.js"), worker);
  console.log(`Bundled ${Object.keys(files).length} files into ${site}/dist/worker.js`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) buildSite(process.argv[2]);
