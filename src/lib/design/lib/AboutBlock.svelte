<script>
  export let title = "What I'm working on";
</script>

<section class="section">
  <h2>{title}</h2>
  <slot />
</section>

<style>
  .section { margin-bottom: 72px; }
  h2 {
    font-family: var(--font-sans);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0 0 24px;
    color: var(--fg);
  }
  .section :global(p) {
    font-size: 16px;
    line-height: 1.65;
    color: var(--fg);
    margin: 0 0 18px;
    max-width: none;
  }
  .section :global(.peach) { color: var(--peach-500); }
</style>
