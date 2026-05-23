<script>
  import Logo from './Logo.svelte';
  /** @type {Array<{href: string, label: string}>} */
  export let links = [
    { href: '/blog', label: 'writing' },
    { href: '/work', label: 'work' },
  ];
  export let active = 'writing';
  export let ctaHref = 'mailto:hello@zero8.dev';
  export let ctaLabel = 'contact';
</script>

<nav class="nav">
  <a href="/" class="brand">
    <Logo size={28} />
    <span class="word">zero8<span class="dim">.dev</span></span>
  </a>
  <div class="links">
    {#each links as l}
      <a href={l.href} class:active={l.label === active}>{l.label}</a>
    {/each}
    <a href={ctaHref} class="cta">{ctaLabel}</a>
  </div>
</nav>

<style>
  .nav {
    display: flex; align-items: center; gap: 14px;
    padding: 24px 32px;
    border-bottom: 1px solid var(--hairline);
    background: var(--bg);
  }
  .brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--fg); }
  .word { font-family: var(--font-sans); font-weight: 600; font-size: 15px; letter-spacing: -0.02em; }
  .dim { color: var(--fg-faint); font-weight: 400; }
  .links { display: flex; gap: 22px; margin-left: auto; font-family: var(--font-mono); font-size: 13px; }
  .links a { color: var(--fg-muted); text-decoration: none; transition: color 200ms cubic-bezier(0.2, 0.8, 0.2, 1); }
  .links a.active { color: var(--peach-500); }
  .links a:hover { color: var(--peach-500); }
  .links .cta { color: var(--fg); }
  .links .cta:hover { color: var(--peach-500); }
</style>
