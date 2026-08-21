---
id: "sk-decision-012"
category: "patterns"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-12-01T10:00:00.000Z"
tags: ["sveltekit", "hooks", "transformPageChunk", "html", "injection", "lang", "theme", "analytics"]
---

# Decision: transformPageChunk for HTML-level injection

## What it does
`transformPageChunk` in hooks.server.ts intercepts the final HTML string before it's sent to the client. You can replace placeholder tokens in `app.html` with runtime-computed values.

## When to use it
For things that must be in the HTML (not just in the Svelte tree) — specifically:
- `<html lang="...">` attribute
- `<body data-mode="...">` attribute  
- Inline `<script>` tags (analytics beacons) that need to be in `<head>` before JS loads
- Per-site CSS custom properties that apply before hydration (prevents flash)

## Pattern in utc-online

```typescript
// hooks.server.ts
const response = await resolve(event, {
  transformPageChunk: ({ html }) =>
    html
      .replace('%sveltekit.lang%', event.locals.mode === 'yatri' ? 'hi' : 'en')
      .replace('%sveltekit.mode%', event.locals.mode)
});
```

```html
<!-- app.html -->
<html lang="%sveltekit.lang%">
<body data-mode="%sveltekit.mode%">
```

The `data-mode` attribute on `<body>` is used by CSS for adaptive copy:
```css
body[data-mode="yatri"] .english-copy { display: none; }
body[data-mode="regular"] .hindi-copy { display: none; }
```

## Pattern in dotwebsite

```typescript
const response = await resolve(event, {
  transformPageChunk: ({ html }) =>
    html
      .replace(/%uttarakhand\.site%/g, event.locals.site)
      .replace('%cf.beacon%', beacon)  // inject CF analytics script
});
```

The analytics beacon must be in `<head>` to track page views before JS bundles load. Passing it through a Svelte component would cause it to load after hydration.

## Why not just use $derived in the layout instead
For `lang` and `dir` attributes on `<html>` — the `<html>` element is outside the Svelte component tree. You can't put reactive expressions there. `transformPageChunk` is the only way to make `<html lang="hi">` work server-side without a static value.

For analytics beacons — same reason: must be in `<head>`, not deferred.

## The `%sveltekit.*%` reserved tokens
SvelteKit reserves `%sveltekit.head%`, `%sveltekit.body%`, `%sveltekit.assets%`, `%sveltekit.nonce%` in app.html. Don't use those names for custom tokens — use namespaced ones like `%myapp.lang%` or `%uttarakhand.site%`.
