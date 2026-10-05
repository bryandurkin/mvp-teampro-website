# MVP Team Pro Website

The marketing website for MVP Team Pro, built as static pages and served by a Cloudflare Worker.

Before changing anything, read [AGENTS.md](AGENTS.md). It covers how pages are built, the section library, design and content rules, and how deploys work.

## Layout

- `shared/`: styles (fonts, colors, buttons, sections), script, header/footer/head partials, section library. Used by every site.
- `mvpteampro/`: the MVP Team Pro site (`src/` pages, `assets/`, `library/` reference, `wrangler.jsonc`). Deploys to the Worker `mvp-website`.
- `referralteampro/`: Referral Team Pro site (own header/footer in `partials/`, Worker `referral-teampro`).
- `authorityhub/`: empty placeholder. It will get its own `wrangler.jsonc` and Worker.

## Build and deploy

- `node scripts/build-site.mjs <site>` builds `<site>/dist/` (generated, not committed).
- `npx wrangler deploy -c mvpteampro/wrangler.jsonc` builds and deploys MVP Team Pro.
- The root `wrangler.jsonc` and `scripts/build-worker.mjs` are compatibility shims so the current Cloudflare Git build (root directory `/`, build command `node scripts/build-worker.mjs`) keeps working. They can be removed once Cloudflare is pointed at the `mvpteampro` root directory.
- Cloudflare note: an unrelated Worker named `authority-hub` already exists in the account. Pick a different name, or confirm, before the Authority Hub site gets its config.

## Cloudflare Workers setup (per site)

| Worker | Root directory | Branch | Deploy command |
|---|---|---|---|
| `mvp-website` | `/` (current shim) | `main` | `npx wrangler deploy` |
| `referral-teampro` | `referralteampro` | `main` | `npx wrangler deploy` |
| `mvp-website-preview` | `previews/mvpteampro` | `claude/mvp-redesign` (MVP redesign work, reviewed here before merging to `main`) | `npx wrangler deploy` |

Leave the dashboard build command blank. Each site's `wrangler.jsonc` runs its own build.
