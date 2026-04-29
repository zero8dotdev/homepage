<script>
  /** @type {'live' | 'wip'} */
  export let status = 'live';
  export let name = '';
  export let tags = '';
  export let desc = '';
</script>

<li class="project">
  <div class="head">
    <span class="status status-{status}">{status === 'live' ? '●' : '○'}</span>
    <span class="name">{name}</span>
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
