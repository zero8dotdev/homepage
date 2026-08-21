---
id: "sk-decision-006"
category: "product"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-06-01T10:00:00.000Z"
tags: ["sveltekit", "blog", "seo", "related-posts", "title-truncation", "open-graph"]
---

# Decision: Related posts algorithm and SEO title truncation

## Related posts — tags first, recency as tiebreaker

```typescript
const related = getAllPosts()
  .filter((p) => p.slug !== params.slug)
  .map((p) => ({
    ...p,
    shared: p.tags.filter((t) => result.data.tags.includes(t)).length
  }))
  .sort((a, b) => b.shared - a.shared || +new Date(b.date) - +new Date(a.date))
  .slice(0, 3);
```

Logic: count shared tags with the current post. More shared tags → higher score. Tie goes to the more recent post. Take top 3.

Why this over ML-based similarity: zero overhead, no embedding calls, works with 3 posts. Revisit if corpus grows beyond ~50 posts where tag overlap becomes too coarse.

## SEO title truncation

Google truncates `<title>` at ~60 characters in search results. The pattern:

```typescript
const titleWithBrand = `${data.meta.title} · zero8.dev`;
const pageTitle = titleWithBrand.length <= 60 ? titleWithBrand : data.meta.title;
```

If the full title fits in 60 chars, keep the brand suffix. If it would get truncated, drop the suffix — a truncated title is worse than one without branding.

This means post titles should stay under ~47 characters to always include the brand. Longer post titles get no brand suffix.

## OG image URL construction

```typescript
const postImage = data.meta.image
  ? `${siteConfig.url}${data.meta.image}`
  : `${siteConfig.url}/og/blog/${data.meta.slug}`;
```

If the post frontmatter has an explicit `image` field, use it (for custom visuals). Otherwise fall back to the generated OG image at `/og/blog/[slug]`. The generated image picks up the post title and date automatically.
