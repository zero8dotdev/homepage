---
id: "sk-decision-008"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-08-10T10:00:00.000Z"
tags: ["sveltekit", "multi-tenant", "hostname", "hooks", "cloudflare", "workers"]
---

# Decision: Multi-tenant site resolution from hostname in hooks.server.ts

## What was decided (dotwebsite)
One SvelteKit codebase, one Workers deployment — serves 50+ city sites (dehradun.uttarakhand.dev, haridwar.uttarakhand.dev, etc.). Site identity is derived from the hostname at request time.

## The architecture

```
Request: dehradun.uttarakhand.dev/hotels
        ↓
hooks.server.ts: resolveSite('dehradun.uttarakhand.dev') → 'dehradun'
        ↓
event.locals.site = 'dehradun'
        ↓
+layout.server.ts: getSite(locals.site) → full SiteData JSON
        ↓
layout: renders with Dehradun content, theme, SEO
```

## Static data via import.meta.glob (bundled at build time)

```typescript
const siteModules = import.meta.glob<SiteData>('$lib/data/sites/*.json', {
  eager: true,
  import: 'default'
});

export function getSite(slug: SiteSlug): SiteData {
  const cached = siteCache.get(slug);
  if (cached) return cached;
  const data = siteModules[`/src/lib/data/sites/${slug}.json`];
  siteCache.set(slug, data);
  return data;
}
```

`eager: true` bundles all JSON files into the Worker at build time. Zero latency for data access — no KV fetch, no D1 query, no round-trip. Cost: larger Worker bundle (~50KB for 50 city JSONs). Acceptable because site data is read-only and changes infrequently (redeploy to update).

## Adapter config for pure Workers mode

```js
adapter: adapter({
  routes: {
    include: ['/*'],
    exclude: ['<all>']
  }
})
```

`exclude: ['<all>']` means Cloudflare serves all static assets directly from the edge cache. Only dynamic requests hit the Worker. This is the correct production config — do NOT use default `adapter()` which serves assets through the Worker unnecessarily.

## Theme injection via transformPageChunk

Each site has a theme (primaryColor, secondaryColor, accentColor). These are injected as CSS custom properties in the HTML:

```svelte
{@html `<style>:root{--site-primary:${site.theme.primaryColor}}</style>`}
```

Alternative: CSS class on `<body>` per site. The inline style approach was chosen because it avoids maintaining a CSS class per site and works with the dynamic `$derived` pattern.

## Customer subdomain detection

White-label customers get their own hostname (customer.com → served by the same Worker). `matchCustomerHost(hostname)` resolves to a customer config or null. `locals.customer !== null` drives the `isStandalone` layout mode that hides standard nav.
