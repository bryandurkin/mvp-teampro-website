// Bundles the static site into a single Worker script (dist/worker.js).
// Assets are embedded so deploys don't depend on Workers Static Assets uploads.
import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync } from "node:fs";
import { join, extname, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const include = [
  ...readdirSync(root).filter((name) => extname(name).toLowerCase() === ".html"),
  "styles.css",
  "script.js",
  "assets",
];
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

const files = {};
for (const entry of include) {
  for (const file of walk(join(root, entry))) {
    const type = types[extname(file).toLowerCase()];
    if (!type) continue;
    files["/" + relative(root, file)] = { type, body: readFileSync(file).toString("base64") };
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

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/worker.js"), worker);
console.log(`Bundled ${Object.keys(files).length} files into dist/worker.js`);

// Multi-page build enabled
