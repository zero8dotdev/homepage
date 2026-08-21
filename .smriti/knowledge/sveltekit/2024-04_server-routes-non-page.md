---
id: "sk-decision-004"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-04-05T10:00:00.000Z"
tags: ["sveltekit", "server-routes", "og-image", "rss", "sitemap", "api", "+server.ts"]
---

# Decision: +server.ts for all non-HTML outputs

## What was decided
Any route that returns something other than an HTML page uses `+server.ts` — not a page with a load function.

## Current inventory in zero8-sveltekit
| Route | Returns | Why +server.ts |
|---|---|---|
| `/feed.xml` | RSS XML | Non-HTML, needs `Content-Type: application/rss+xml` |
| `/sitemap.xml` | XML sitemap | Non-HTML |
| `/robots.txt` | Plain text | Non-HTML |
| `/llms.txt` | Plain text | LLM-readable site summary |
| `/og/blog/[slug]` | PNG image | OG image generated at runtime |
| `/pixel/[id]` | 1×1 GIF | Email open tracking pixel |
| `/t/[id]` | 302 redirect | Click tracking before forwarding |
| `/unsubscribe/[id]` | JSON/redirect | Email unsubscribe handler |

## The pattern
```typescript
export const GET: RequestHandler = ({ params, request }) => {
  // generate content
  return new Response(body, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};
```

## OG image generation
The `/og/blog/[slug]` route is the most complex. It:
1. Loads the blog post metadata (same dynamic import as the page)
2. Renders a `SocialCard.svelte` component to HTML via `render()`
3. Returns a PNG (via an HTML-to-image lib or satori)

This keeps OG images dynamic (they reflect current post metadata) without a separate service.

## Why not static files for sitemap/robots?
Static files in `/static/` don't have access to the post list at build time in Cloudflare Workers deployments without SSG. Generating them at runtime from `getAllPosts()` means they're always current. The cost is one extra function invocation per crawl — acceptable.
