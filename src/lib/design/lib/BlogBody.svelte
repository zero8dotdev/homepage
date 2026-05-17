<!--
  BlogBody — wrap your post content in this. Provides the prose styling:
  body text, peach blockquote bar, code blocks, heading spacing, lists, etc.
-->
<article class="body">
  <slot />
  <div class="end"><span class="end-glyph">◇</span></div>
</article>

<style>
  .body {
    font-size: 17px;
    line-height: 1.75;
    color: var(--fg);
    width: 100%;
  }
  /* Paragraphs */
  .body :global(p) {
    margin: 0 0 28px;
    max-width: none;
    color: var(--fg);
    line-height: 1.75;
  }

  /* Lede — first paragraph, larger */
  .body :global(.lede) {
    font-size: 19px;
    line-height: 1.65;
    color: var(--fg-muted);
    margin-bottom: 40px;
  }

  /* Headings */
  .body :global(h2) {
    font-family: var(--font-sans);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: var(--fg);
    margin: 64px 0 20px;
  }
  .body :global(h3) {
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.3;
    color: var(--fg);
    margin: 40px 0 14px;
  }
  .body :global(h4) {
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 600;
    color: var(--fg-muted);
    margin: 32px 0 10px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-family: var(--font-mono);
  }

  /* Lists */
  .body :global(ul),
  .body :global(ol) {
    padding-left: 24px;
    margin: 0 0 28px;
  }
  .body :global(li) {
    margin-bottom: 10px;
    line-height: 1.7;
    color: var(--fg);
  }
  .body :global(li:last-child) { margin-bottom: 0; }

  /* Inline */
  .body :global(strong) { font-weight: 600; color: var(--fg); }
  .body :global(em) { font-style: italic; }

  /* Inline code */
  .body :global(code) {
    font-family: var(--font-mono);
    font-size: 0.88em;
    background: var(--bg-raised);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    border: 1px solid var(--hairline);
    color: var(--fg);
  }

  /* Code blocks */
  .body :global(pre) {
    background: var(--bg-raised);
    border: 1px solid var(--hairline);
    border-radius: 8px;
    padding: 20px 22px;
    overflow-x: auto;
    font-family: var(--font-mono);
    font-size: 13.5px;
    line-height: 1.7;
    margin: 32px 0 36px;
    color: var(--fg);
  }
  .body :global(pre code) {
    background: transparent;
    border: 0;
    padding: 0;
    font-size: inherit;
    color: inherit;
  }

  /* Blockquote */
  .body :global(blockquote) {
    margin: 36px 0;
    padding: 6px 0 6px 22px;
    border-left: 2px solid var(--peach-500);
    font-style: italic;
    color: var(--fg-muted);
    font-size: 17px;
    line-height: 1.65;
  }
  .body :global(blockquote p) { margin-bottom: 0; color: var(--fg-muted); }

  /* Divider */
  .body :global(hr) {
    border: 0;
    height: 1px;
    background: var(--hairline);
    margin: 56px 0;
  }

  /* Links */
  .body :global(a) {
    color: var(--fg);
    text-decoration: underline;
    text-decoration-color: rgba(255, 184, 168, 0.3);
    text-underline-offset: 3px;
    transition: color 150ms ease, text-decoration-color 150ms ease;
  }
  .body :global(a:hover) {
    color: var(--peach-500);
    text-decoration-color: var(--peach-500);
  }

  /* End glyph */
  .end { text-align: center; margin: 56px 0 24px; }
  .end-glyph { font-family: var(--font-mono); color: var(--peach-500); font-size: 16px; }
</style>
