---
id: "sk-decision-010"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-10-05T10:00:00.000Z"
tags: ["sveltekit", "svelte5", "app-state", "app-stores", "migration", "page-store", "runes"]
---

# Decision: $app/state (new) vs $app/stores (old) — migration status across projects

## What changed in Svelte 5
`$app/stores` exports reactive stores (`$page`, `$navigating`, `$updated`). These are Svelte 4 stores.
`$app/state` exports rune-based equivalents (`page`, `navigating`, `updated`). These are Svelte 5 reactive objects.

The API surface is the same — same properties on `page` — but the import path and reactivity model differ.

## Current state across projects

| Project | Pattern used | Notes |
|---|---|---|
| dotwebsite | `import { page } from '$app/state'` | New API, Svelte 5 native |
| utc-online | `import { $page } from '$app/stores'` | Old API, still works in SK 2.x |
| zero8-sveltekit | n/a (SSR, no client page store needed) | |

## Why dotwebsite uses the new API
dotwebsite forces runes mode on all project files (`compilerOptions.runes`). In a runes-mode component, using `$page` from `$app/stores` (a Svelte 4 store) requires `$store` auto-subscription syntax — which conflicts with runes. Using `page` from `$app/state` is the clean path.

## The migration pattern
Before (Svelte 4 / $app/stores):
```svelte
<script>
  import { page } from '$app/stores';
  $: isAdmin = $page.url.pathname.startsWith('/admin');
</script>
```

After (Svelte 5 / $app/state):
```svelte
<script lang="ts">
  import { page } from '$app/state';
  const isAdmin = $derived(page.url.pathname.startsWith('/admin'));
</script>
```

## When to migrate
If the component is already in runes mode (uses `$props`, `$state`, `$derived`) — migrate to `$app/state`. If it's still Svelte 4 style — leave it on `$app/stores` until you're ready for a full runes migration of that component. Don't mix in the same component.

## utc-online note
utc-online still uses `$app/stores` in the layout. This is fine in SvelteKit 2.x — stores still work. The migration is low priority unless the layout gets a runes refactor.
