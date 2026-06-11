<script>
  import PostListItem from './PostListItem.svelte';
  export let title = 'Writing';
  /** @type {Array<{date: string, title: string, read: string, href: string}>} */
  export let posts = [];
  /** Optional link to the full writing index, rendered below the list. */
  export let viewAllHref = '';
  export let viewAllLabel = 'all writing →';
</script>

<section class="section">
  <h2>{title}</h2>
  <ul>
    {#each posts as p}
      <PostListItem date={p.date} title={p.title} read={p.read} href={p.href} />
    {/each}
  </ul>
  {#if viewAllHref}
    <a class="view-all" href={viewAllHref}>{viewAllLabel}</a>
  {/if}
</section>

<style>
  .section { margin-bottom: 72px; }
  .view-all {
    display: inline-block;
    margin-top: 20px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--fg-muted);
    text-decoration: none;
    transition: color 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .view-all:hover { color: var(--peach-500); }
  h2 {
    font-family: var(--font-sans);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0 0 24px;
    color: var(--fg);
  }
  ul { list-style: none; margin: 0; padding: 0; }
</style>
