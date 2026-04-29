<script>
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  /** @type {Array<{href: string, label: string}>} */
  export let links = [
    { href: 'https://github.com/ashu17706', label: 'github' },
    { href: 'https://x.com/zero8dotdev', label: 'twitter' },
    { href: '/feed.xml', label: 'rss' },
    { href: 'mailto:hello@zero8.dev', label: 'email' },
  ];
</script>

<footer class="footer-outer">
  <div class="footer">
    <div class="row">
      <Logo size={20} />
      <span class="word">zero8.dev</span>
    </div>
    <div class="links">
      {#each links as l}<a href={l.href}>{l.label}</a>{/each}
      <span class="divider">|</span>
      <ThemeToggle />
    </div>
  </div>
</footer>

<style>
  .footer-outer {
    border-top: 1px solid var(--hairline);
    width: 100%;
  }
  .footer {
    max-width: var(--wide-width);
    margin: 0 auto;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  .row { display: flex; align-items: center; gap: 10px; }
  .word { font-family: var(--font-sans); font-weight: 600; font-size: 13px; color: var(--fg); }
  .sep { font-family: var(--font-mono); color: var(--fg-faint); }
  .meta { font-family: var(--font-mono); font-size: 12px; color: var(--fg-faint); }
  .links { display: flex; align-items: center; gap: 18px; font-family: var(--font-mono); font-size: 12px; }
  .links a { color: var(--fg-muted); text-decoration: none; }
  .links a:hover { color: var(--peach-500); }
  .divider { color: var(--fg-faint); user-select: none; }
</style>
