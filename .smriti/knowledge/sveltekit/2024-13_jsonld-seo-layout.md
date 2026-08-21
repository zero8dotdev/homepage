---
id: "sk-decision-013"
category: "patterns"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-12-15T10:00:00.000Z"
tags: ["sveltekit", "seo", "jsonld", "structured-data", "layout", "svelte-head", "meta"]
---

# Decision: JSON-LD structured data and per-page SEO override in the layout

## The pattern (dotwebsite)

The layout owns all SEO tags. Individual pages can override title/description via their load function return value — the layout falls back to site defaults.

```svelte
<!-- +layout.svelte -->
<script lang="ts">
  import { page } from '$app/state';
  const site = $derived(data.site);
  // Per-page override with site-level fallback
  const metaTitle = $derived(
    page.data.metaTitle ?? site.seo.title
  );
  const metaDescription = $derived(
    page.data.metaDescription ?? site.seo.description
  );
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content={metaTitle} />
  {@html siteJsonLd}
</svelte:head>
```

```typescript
// Any +page.server.ts that needs a custom title
export const load = () => ({
  metaTitle: 'Hotels in Dehradun — Best Stays 2025',
  metaDescription: '...'
});
```

## Why in the layout, not each page
Centralizing SEO tags in the layout means:
- You can't forget to add `<svelte:head>` on a new page
- Site-wide defaults always apply
- Structured data (JSON-LD) fires on every page without repetition
- Canonical URL is always computed correctly (one place to fix if the logic changes)

## JSON-LD builder pattern

```typescript
// $lib/schema/builders.ts
export function buildWebSite(site: SiteData) {
  return {
    '@type': 'WebSite',
    name: site.pwa.name,
    url: site.seo.canonicalBase,
    description: site.seo.description
  };
}
```

```typescript
// $lib/schema/render.ts
export function jsonLdScripts(schemas: object[]): string {
  return schemas
    .map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');
}
```

`{@html siteJsonLd}` in `<svelte:head>` renders the JSON-LD. Use `{@html ...}` not `{siteJsonLd}` — the latter would HTML-escape the JSON.

## Multi-language SEO (en/hi)

dotwebsite serves Hindi and English content. The layout derives titles/descriptions based on `lang`:

```svelte
const metaTitle = $derived(
  page.data.metaTitle ?? (lang === 'hi' ? site.seo.titleHi : site.seo.title)
);
```

`hreflang` tags are still missing — a known gap. Google should see both language versions linked.

## Standalone mode
Pages that are customer white-labels or full-screen flows (`/start`, `/pitch/*`) use `isStandalone = true`. When standalone, the layout skips rendering `<svelte:head>` entirely — those pages manage their own meta.
