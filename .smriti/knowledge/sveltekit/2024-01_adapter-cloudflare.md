---
id: "sk-decision-001"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-01-15T10:00:00.000Z"
tags: ["sveltekit", "adapter", "cloudflare", "deployment", "workers"]
---

# Decision: Cloudflare adapter over Node/Vercel/static

## What was decided
Both zero8-sveltekit and tabstack-sveltekit use `@sveltejs/adapter-cloudflare` — not the auto adapter, not Node, not static.

## Why
Cloudflare Workers run at the edge — zero cold start, globally distributed, sub-10ms TTFB. For a personal site and a SaaS product, this is the correct default. The Node adapter requires a server to maintain. The static adapter breaks dynamic routes (blog slugs, OG image generation, API routes).

The Cloudflare adapter gives you Workers + Pages assets in one deploy. The `wrangler.toml` binds KV namespaces (used for click tracking), D1 databases (future), and the Workers route pattern covers both bare domain and www.

## Concrete implication
`wrangler.toml` must declare:
- `compatibility_date` — use a recent date, it affects which runtime APIs are available
- `[[routes]]` for both `domain.com/*` and `www.domain.com/*`
- `[assets]` pointing to `.cloudflare/public`
- Any KV/D1 bindings before they're used in code

## What to avoid
The `auto` adapter detects the deployment environment at build time, which breaks local `wrangler dev` previews — the worker gets built for the wrong runtime. Always pin `adapter-cloudflare` explicitly.

## Related decisions
→ `nodejs_compat` compatibility flag required in wrangler for Node built-ins (Buffer, path, etc.)
→ Worker entry at `.cloudflare/worker.js` — don't change this path, adapter generates it
