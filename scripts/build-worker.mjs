// Compatibility shim. The Cloudflare Git build for the mvp-website Worker was set up to run
// "node scripts/build-worker.mjs" from the repo root, so this keeps that command working.
// It builds the MVP Team Pro site. For any site, use: node scripts/build-site.mjs <site-folder>
import { buildSite } from "./build-site.mjs";

buildSite("mvpteampro");
