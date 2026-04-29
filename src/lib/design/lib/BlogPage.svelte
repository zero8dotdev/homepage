<script>
  import BlogNav from './BlogNav.svelte';
  import BlogHeader from './BlogHeader.svelte';
  import BlogBody from './BlogBody.svelte';

  export let title = '';
  export let date = '';
  export let read = '';
  export let author = 'Ashutosh Tripathi';
  /** @type {string[]} */
  export let tags = [];
  export let backHref = '/writing';
</script>

<div class="page">
  <BlogNav {backHref} />
  <main class="main">
    <BlogHeader {title} {date} {read} {author} {tags} />
    <BlogBody>
      <slot />
    </BlogBody>
  </main>
  <footer class="footer">
    <span>zero8.dev</span>
    <span class="sep">·</span>
    <span>built by Ashutosh Tripathi</span>
  </footer>
</div>

<style>
  .page { background: var(--bg); color: var(--fg); min-height: 100vh; font-family: var(--font-body); }
  .main { max-width: 640px; margin: 0 auto; padding: 80px 32px 64px; }
  .footer {
    max-width: 640px;
    margin: 0 auto;
    padding: 32px;
    border-top: 1px solid var(--hairline);
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--fg-faint);
    display: flex; gap: 10px; flex-wrap: wrap;
  }
  .sep { color: var(--ink-700); }
</style>
