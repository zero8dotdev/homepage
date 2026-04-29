<script>
  export let href = undefined;
</script>

{#if href}
  <a {href} class="tag"><slot /></a>
{:else}
  <span class="tag"><slot /></span>
{/if}

<style>
  .tag {
    font-family: var(--font-mono);
    font-size: 11.5px;
    padding: 3px 10px;
    border-radius: 9999px;
    background: var(--bg-raised);
    border: 1px solid var(--hairline);
    color: var(--fg-muted);
    letter-spacing: -0.01em;
    text-decoration: none;
    display: inline-block;
    transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  a.tag:hover { border-color: var(--peach-500); color: var(--peach-500); }
</style>
