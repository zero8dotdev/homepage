---
id: "sk-decision-014"
category: "architecture"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-12-20T10:00:00.000Z"
tags: ["sveltekit", "svelte5", "runes", "migration", "compilerOptions", "gradual-adoption"]
---

# Decision: Three strategies for Svelte 5 runes adoption across projects

## The problem
Svelte 5 runes (`$state`, `$props`, `$derived`) are opt-in per component in Svelte 5.x. A project can have a mix of Svelte 4 style components and runes-mode components. Three strategies have been used across projects.

## Strategy 1: Forced global (dotwebsite)

```js
// svelte.config.js
compilerOptions: {
  runes: ({ filename }) => {
    const rel = relative(import.meta.dirname, filename);
    const isNodeModules = rel.toLowerCase().split(sep).includes('node_modules');
    return isNodeModules ? undefined : true;
  }
}
```

All project files are compiled in runes mode. `node_modules` are excluded (they use their own Svelte version and should be left alone). Any Svelte 4 syntax in project files becomes a compile error.

**When to use:** New project, greenfield, no legacy components.
**Risk:** If you import a third-party Svelte component library that uses Svelte 4 syntax, it will break if the library is in your `src/` tree.

## Strategy 2: Gradual (zero8-sveltekit, utc-online)

No `compilerOptions.runes` in config. Each component opts in by using rune syntax. A component without `$state`/`$props` is compiled as Svelte 4. A component that uses runes is compiled as Svelte 5.

**When to use:** Existing project, migrating incrementally.
**Side effect:** `state_referenced_locally` warnings in build output for components that use `$props()` but derive local variables from props without `$derived`.

## Strategy 3: None yet (apna-nagar-nigam)

Basic runes (`$props`) are used in layout components, but no systematic runes mode. Functions and reactivity still mix old and new patterns.

**When to use:** Not recommended for new work — just what happens when Svelte 5 is adopted without a migration plan.

## The migration path

1. Start with Strategy 2: use `$props` and `$state` where you're already touching components
2. Fix `state_referenced_locally` warnings as they appear
3. Once all project files are runes-mode, flip to Strategy 1 to enforce it

## Runes you'll use in every component

```svelte
<!-- Receiving props -->
let { data, onSubmit }: { data: PageData; onSubmit: () => void } = $props();

<!-- Local state -->
let count = $state(0);

<!-- Computed values -->
const doubled = $derived(count * 2);

<!-- Side effects -->
$effect(() => { console.log(count); });

<!-- Child content (replaces slots) -->
let { children } = $props();
{@render children()}
```
