<script>
  export let date = '';
  export let title = '';
  export let read = '';
  export let href = '#';
</script>

<li class="post">
  <span class="date">{date}</span>
  <a {href} class="title">{title}</a>
  <span class="read">{read}</span>
</li>

<style>
  .post {
    display: grid;
    grid-template-columns: 100px 1fr auto;
    gap: 18px;
    padding: 14px 0;
    border-top: 1px solid var(--hairline);
    align-items: baseline;
    list-style: none;
  }
  .post:last-child { border-bottom: 1px solid var(--hairline); }
  .date { font-family: var(--font-mono); font-size: 12.5px; color: var(--fg-faint); }
  .title {
    font-family: var(--font-sans);
    font-size: 15.5px;
    color: var(--fg);
    text-decoration: none;
    letter-spacing: -0.01em;
    transition: color 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .title:hover {
    color: var(--peach-500);
    text-decoration: underline;
    text-decoration-color: var(--peach-500);
    text-underline-offset: 4px;
  }
  .read { font-family: var(--font-mono); font-size: 12px; color: var(--fg-faint); }
</style>
