---
id: "sk-decision-003"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-03-10T10:00:00.000Z"
tags: ["sveltekit", "mdsvex", "blog", "markdown", "frontmatter", "zod", "content"]
---

# Decision: mdsvex + Vite dynamic import + Zod for blog content

## What was decided
Blog posts are `.svx` files (Svelte + MDX). They're loaded via Vite dynamic import in `+page.server.ts` and frontmatter is validated with Zod at load time.

## The full pattern

**svelte.config.js:**
```js
extensions: ['.svelte', '.svx'],
preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx'] })]
```

**+page.server.ts:**
```ts
const post = await import(`../../../content/blog/${params.slug}.svx`);
const result = postSchema.safeParse(post.metadata);
if (!result.success) error(500, `Invalid frontmatter: ${errors}`);
const { body } = render(post.default);
```

**posts.ts (the schema):**
```ts
export const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  description: z.string().optional()
});
```

## Why this over alternatives
- **Contentlayer / @content-collections**: additional build step, not Vite-native, more config
- **Markdown in +page.server.ts directly**: no Svelte components in markdown, no MDX syntax
- **CMS (Sanity, Contentful)**: overkill for a personal site, external dependency, cost

The Vite dynamic import means the import path must be statically analyzable — no variable in `import()` that Vite can't trace. The `../../../content/blog/` prefix is hardcoded; only `${params.slug}` is dynamic.

## The nofollow problem with mdsvex
mdsvex uses `remark-external-links` which adds `rel="nofollow"` to ALL absolute URLs, including internal ones (zero8.dev → zero8.dev). This kills internal link equity for SEO.

Fix: custom rehype plugin that strips `nofollow` from links whose `href` matches the site's own domain or starts with `/`.

## Frontmatter validation matters
Without Zod validation, a malformed frontmatter field (missing `date`, wrong type) surfaces as a runtime error in the template. Zod gives you a structured error at load time: `title: Required`. Worth the few lines.
