---
id: "sk-decision-009"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-09-01T10:00:00.000Z"
tags: ["sveltekit", "cloudflare", "workers", "platform", "env", "kv", "secrets", "bindings"]
---

# Decision: Accessing Cloudflare bindings via event.platform.env

## What was decided
In SvelteKit on Cloudflare Workers, secrets, KV namespaces, D1 databases, and other bindings are accessed via `event.platform?.env` — NOT via `process.env` or `import.meta.env`.

## Why not process.env or import.meta.env
`process.env` is a Node.js construct — not available in the Cloudflare Workers runtime (unless `nodejs_compat` is enabled, and even then it's limited). `import.meta.env` is a Vite/build-time concept — values are baked into the bundle at deploy, not runtime secrets.

Cloudflare Workers inject bindings into the request context at runtime. The only place to access them is `event.platform.env`.

## The pattern (server-side only)

```typescript
// In load functions, actions, or +server.ts
export const load: PageServerLoad = async ({ platform }) => {
  const kv = platform?.env.CLICKS; // KV namespace
  const secret = platform?.env.SESSION_SECRET; // Secret
  const db = platform?.env.DB; // D1 database
};

// In hooks.server.ts
export const handle: Handle = async ({ event, resolve }) => {
  const secret = event.platform?.env.SESSION_SECRET || 'dev-secret';
};
```

## The `?` is important
`platform` is `undefined` in local dev (unless using `wrangler dev`). Always use optional chaining. Provide a fallback for dev:

```typescript
const secret = event.platform?.env.SESSION_SECRET || 'dev-secret';
```

## Declaring bindings in wrangler.toml

```toml
[[kv_namespaces]]
binding = "CLICKS"
id = "8386b8b4885642e882667c6d79ee3575"

[vars]
SESSION_SECRET = "change-in-prod"

[[d1_databases]]
binding = "DB"
database_name = "myapp"
database_id = "..."
```

## TypeScript types for platform

In `src/app.d.ts`:
```typescript
declare global {
  namespace App {
    interface Platform {
      env: {
        CLICKS: KVNamespace;
        SESSION_SECRET: string;
        WEB_ANALYTICS_TOKEN?: string;
      };
    }
  }
}
```

Without this, `platform.env` is typed as `Record<string, unknown>` and you lose type safety on binding names.

## Across projects

| Project | Bindings used |
|---|---|
| zero8-sveltekit | `CLICKS` (KV for click tracking) |
| apna-nagar-nigam | `SESSION_SECRET` (JWT signing), payment gateway keys |
| dotwebsite | `WEB_ANALYTICS_TOKEN` (CF Web Analytics), `WEB_TRAFFIC` (Analytics Engine) |
