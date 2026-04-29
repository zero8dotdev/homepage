<script>
  export let accent = false;
</script>

<div class="kicker" class:accent>
  <slot />
</div>

<style>
  .kicker {
    font-family: var(--font-mono);
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--fg-faint);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .accent { color: var(--peach-500); }
</style>
