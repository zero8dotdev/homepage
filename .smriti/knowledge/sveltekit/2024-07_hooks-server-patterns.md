---
id: "sk-decision-007"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-07-01T10:00:00.000Z"
tags: ["sveltekit", "hooks", "locals", "session", "middleware", "cross-cutting"]
---

# Decision: hooks.server.ts is the universal cross-cutting concern hub

## What was decided
Every SvelteKit project uses `hooks.server.ts` as the single place for request-level cross-cutting concerns. Nothing that needs to run on every request goes anywhere else.

## What goes in hooks across projects

| Project | What hooks resolves |
|---|---|
| apna-nagar-nigam | JWT session from `__session` cookie → `locals.session` |
| dotwebsite | Site identity from hostname → `locals.site`, customer from host → `locals.customer` |
| utc-online | Adaptive copy mode from Accept-Language + cookie → `locals.mode`, session → `locals.session` |
| zero8-sveltekit | (minimal — no auth) |

## The canonical pattern

```typescript
export const handle: Handle = async ({ event, resolve }) => {
  // 1. Resolve cross-cutting state into locals
  event.locals.session = await getSession(event.cookies);
  event.locals.mode = resolveMode(event.request.headers);

  // 2. Run the request
  const response = await resolve(event);

  // 3. Post-response mutation (headers, cache)
  response.headers.set('X-Frame-Options', 'DENY');
  applyCacheHeaders(response, event.url.pathname);

  return response;
};
```

## locals typing — required in app.d.ts

```typescript
// src/app.d.ts
declare global {
  namespace App {
    interface Locals {
      session: { phone: string; residentId: string } | null;
      site: SiteSlug;
      mode: 'yatri' | 'regular';
    }
  }
}
```

Without the `app.d.ts` declaration, `event.locals.session` is typed `unknown` everywhere — you lose IDE completion and type safety in load functions.

## What does NOT go in hooks

Route guards. `if (!locals.session) throw redirect(303, '/login')` belongs in the route's `+page.server.ts` load function or a `+layout.server.ts`, not in hooks. Hooks runs for every request including static assets. Guards that run universally in hooks cause false redirects on assets and API routes.

## Security headers (apna-nagar-nigam pattern)

```typescript
response.headers.set('X-Frame-Options', 'DENY');
response.headers.set('X-Content-Type-Options', 'nosniff');
response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
```

Add these in hooks for any project that handles user data. Cloudflare adds some headers by default but not all of these.
