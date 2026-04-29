<script>
  import Logo from './Logo.svelte';
  export let backHref = '/blog';
  export let backLabel = '← writing';
</script>

<nav class="nav">
  <a href={backHref} class="back">{backLabel}</a>
  <a href="/" class="brand">
    <Logo size={24} />
    <span class="word">zero8<span class="dim">.dev</span></span>
  </a>
  <div class="actions">
    <a href="/feed.xml">rss</a>
  </div>
</nav>

<style>
  .nav {
    display: flex; align-items: center;
    padding: 20px 32px;
    border-bottom: 1px solid var(--hairline);
    position: sticky; top: 0; z-index: 5;
    background: rgba(14, 14, 14, 0.92);
    backdrop-filter: blur(8px);
  }
  .back { font-family: var(--font-mono); font-size: 12.5px; color: var(--fg-muted); text-decoration: none; }
  .back:hover { color: var(--peach-500); }
  .brand {
    position: absolute; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; gap: 9px;
    text-decoration: none; color: var(--fg);
  }
  .word { font-family: var(--font-sans); font-weight: 600; font-size: 14px; letter-spacing: -0.02em; color: var(--fg); }
  .dim { color: var(--fg-faint); font-weight: 400; }
  .actions { display: flex; gap: 18px; margin-left: auto; font-family: var(--font-mono); font-size: 12.5px; }
  .actions a { color: var(--fg-muted); text-decoration: none; }
  .actions a:hover { color: var(--peach-500); }
</style>
