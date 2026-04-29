<script>
  export let padding = '24px';
</script>

<div class="card" style="padding: {padding};">
  <slot />
</div>

<style>
  .card {
    background: var(--ink-900);
    border: 1px solid var(--hairline);
    border-radius: 8px;
    transition: border-color 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .card:hover { border-color: var(--ink-500); }
</style>
