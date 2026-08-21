---
id: "sk-decision-002"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-02-01T10:00:00.000Z"
tags: ["sveltekit", "load-functions", "server", "universal", "data-loading", "page.server.ts"]
---

# Decision: Always use +page.server.ts for data loading, not +page.ts

## What was decided
All data loading in zero8-sveltekit goes through `+page.server.ts` — never `+page.ts` (universal load).

## Why
`+page.ts` runs on both server and client — which means it has no access to the filesystem, env vars, secrets, or the database. For a site that reads markdown posts from the filesystem and serves them, the universal load function can't do the job.

`+page.server.ts` runs server-only. It has access to:
- Filesystem (`import('../content/blog/${slug}.svx')` via Vite dynamic imports)
- Private env vars (API keys, secrets)
- Cloudflare runtime (bindings like KV, D1, R2)

The cost: `+page.server.ts` data must be serializable (no functions, no class instances, no undefined). This is a good constraint — it forces clean data contracts between server and client.

## When to use +page.ts instead
Only if the data needs to update on client-side navigation without a server round-trip, AND the data source is public (no secrets). For this site: never. For a SPA-style dashboard: maybe.

## Pattern in this codebase

```typescript
// +page.server.ts — correct
export const load: PageServerLoad = async ({ params }) => {
  const post = await import(`../../../content/blog/${params.slug}.svx`);
  return { html: body, meta: result.data };
};

// +page.svelte — receives typed PageData
let { data }: { data: PageData } = $props();
```

## The Svelte 5 warning this causes
In Svelte 5, `const x = data.posts` outside a reactive context captures a snapshot, not a live reference. You'll see: `This reference only captures the initial value of 'data'`. The fix: use `data.posts` directly in templates, or wrap derivations in `$derived(...)`.
