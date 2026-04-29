<script>
  /** @type {'primary' | 'secondary' | 'ghost'} */
  export let variant = 'secondary';
  export let href = undefined;
  export let type = 'button';
</script>

{#if href}
  <a {href} class="btn {variant}"><slot /></a>
{:else}
  <button {type} class="btn {variant}" on:click><slot /></button>
{/if}

<style>
  .btn {
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 500;
    padding: 11px 18px;
    border-radius: 4px;
    border: 1px solid var(--hairline);
    background: var(--ink-900);
    color: var(--fg);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
    letter-spacing: -0.01em;
  }
  .btn:hover {
    border-color: var(--ink-500);
    background: var(--ink-800);
    color: var(--fg);
    text-decoration: none;
  }
  .primary {
    background: var(--peach-500);
    border-color: var(--peach-500);
    color: var(--ink-1000);
    font-weight: 600;
  }
  .primary:hover {
    background: var(--peach-400);
    border-color: var(--peach-400);
    color: var(--ink-1000);
  }
  .ghost {
    background: transparent;
    border-color: transparent;
    color: var(--fg-muted);
  }
  .ghost:hover {
    background: transparent;
    color: var(--peach-500);
    border-color: transparent;
    text-decoration: none;
  }
</style>
