<script>
  /** @type {'live' | 'wip'} */
  export let status = 'live';
  export let name = '';
  export let tags = '';
  export let desc = '';
  /** @type {string | null | undefined} */
  export let href = null;
  /** @type {string | undefined} */
  export let badge = undefined;
</script>

<li class="project">
  <div class="head">
    <span class="status status-{status}">{status === 'live' ? '●' : '○'}</span>
    {#if href}
      <a class="name name--link" {href} target="_blank" rel="noopener noreferrer">{name} ↗</a>
    {:else}
      <span class="name">{name}</span>
    {/if}
    {#if badge}
      <span class="badge">{badge}</span>
    {/if}
    <span class="tags">{tags}</span>
  </div>
  <div class="desc">{desc}</div>
</li>

<style>
  .project {
    padding: 18px 0;
    border-top: 1px solid var(--hairline);
    list-style: none;
  }
  .project:last-child { border-bottom: 1px solid var(--hairline); }
  .head {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }
  .status { font-size: 11px; }
  .status-live { color: var(--peach-500); }
  .status-wip { color: var(--fg-faint); }
  .name {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 16px;
    color: var(--fg);
    letter-spacing: -0.01em;
  }
  .name--link {
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease);
  }
  .name--link:hover { color: var(--accent); text-decoration: none; }
  .badge {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.04em;
    color: var(--peach-500);
    border: 1px solid color-mix(in srgb, var(--peach-500) 35%, transparent);
    padding: 1px 6px;
    border-radius: 4px;
  }
  .tags {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--fg-faint);
    margin-left: auto;
    letter-spacing: -0.01em;
  }
  .desc {
    font-size: 14.5px;
    color: var(--fg-muted);
    line-height: 1.55;
    max-width: 60ch;
  }
</style>
