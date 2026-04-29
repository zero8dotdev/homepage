<script>
  import Logo from './Logo.svelte';
  export let size = 28;
  export let href = '/';
</script>

<a {href} class="wm">
  <Logo {size} />
  <span class="word">zero8<span class="dim">.dev</span></span>
</a>

<style>
  .wm {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--fg);
  }
  .wm:hover { color: var(--fg); text-decoration: none; }
  .word {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
  }
  .dim { color: var(--fg-faint); font-weight: 400; }
</style>
