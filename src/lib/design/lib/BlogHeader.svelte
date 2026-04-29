<script>
  import Tag from './Tag.svelte';
  export let title = '';
  export let date = '';
  export let read = '';
  export let author = 'Ashutosh Tripathi';
  /** @type {string[]} */
  export let tags = [];
</script>

<header class="header">
  {#if tags.length}
    <div class="tags">
      {#each tags as t}<Tag>{t}</Tag>{/each}
    </div>
  {/if}
  <h1>{title}</h1>
  <div class="meta">
    {#if date}<span>{date}</span><span class="sep">·</span>{/if}
    {#if read}<span>{read}</span><span class="sep">·</span>{/if}
    <span>{author}</span>
  </div>
</header>

<style>
  .header {
    margin-bottom: 56px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--hairline);
  }
  .tags { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
  h1 {
    font-family: var(--font-sans);
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.1;
    color: var(--fg);
    margin: 0 0 24px;
    text-wrap: balance;
    max-width: 22ch;
  }
  .meta {
    font-family: var(--font-mono);
    font-size: 12.5px;
    color: var(--fg-faint);
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  }
  .sep { color: var(--hairline-strong); }
</style>
