<script>
  import PostListItem from './PostListItem.svelte';
  export let title = 'Writing';
  /** @type {Array<{date: string, title: string, read: string, href: string}>} */
  export let posts = [];
</script>

<section class="section">
  <h2>{title}</h2>
  <ul>
    {#each posts as p}
      <PostListItem date={p.date} title={p.title} read={p.read} href={p.href} />
    {/each}
  </ul>
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
  ul { list-style: none; margin: 0; padding: 0; }
</style>
