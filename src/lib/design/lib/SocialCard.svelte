<!--
  SocialCard — 1200x630 OG card.
  Renders at native size; screenshot or html-to-image to export.

  Slots: kicker, headline, foot
-->
<script>
  /** @type {'dark' | 'paper'} */
  export let bg = 'dark';
  export let logoSrc = '/logo-mark.png';
</script>

<div class="og og-{bg}">
  <div class="body">
    <div class="kicker"><slot name="kicker">▲ ASHUTOSH TRIPATHI · SOFTWARE ENGINEER</slot></div>
    <div class="h1">
      <slot name="headline">
        I build software people<br />
        can <span class="peach">reason about.</span>
      </slot>
    </div>
    <div class="foot">
      <slot name="foot">
        <span>developer tools · AI systems</span>
        <span class="dot">·</span>
        <span>zero8.dev</span>
      </slot>
    </div>
  </div>
  <div class="corner-tl"><img src={logoSrc} alt="" /></div>
  <div class="corner-br">zero8.dev</div>
</div>

<style>
  .og {
    width: 1200px;
    height: 630px;
    position: relative;
    overflow: hidden;
  }
  .og-dark { background: var(--ink-1000); color: var(--ink-100); }
  .og-paper { background: var(--ink-050); color: var(--ink-1000); }
  .og::before {
    content: "";
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.04) 1.2px, transparent 1.2px);
    background-size: 24px 24px;
    pointer-events: none;
  }
  .og-paper::before { background-image: radial-gradient(rgba(0,0,0,0.04) 1.2px, transparent 1.2px); }
  .body {
    position: relative;
    padding: 96px;
    height: 100%;
    display: flex; flex-direction: column;
    justify-content: center;
    z-index: 2;
  }
  .kicker {
    font-family: var(--font-mono);
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--peach-500);
    margin-bottom: 56px;
  }
  .og-paper .kicker { color: var(--peach-700); }
  .h1 {
    font-family: var(--font-sans);
    font-size: 96px;
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.0;
    margin: 0 0 56px;
    text-wrap: balance;
  }
  .peach { color: var(--peach-500); }
  .og-paper .peach { color: var(--peach-700); }
  .foot {
    font-family: var(--font-mono);
    font-size: 22px;
    color: var(--ink-300);
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }
  .og-paper .foot { color: #2E2E2E; }
  .dot { color: var(--ink-700); }
  .og-paper .dot { color: rgba(0,0,0,.2); }
  .corner-tl { position: absolute; top: 48px; left: 48px; z-index: 3; }
  .corner-tl img { width: 56px; height: 56px; border-radius: 12px; display: block; }
  .corner-br {
    position: absolute; bottom: 48px; right: 48px; z-index: 3;
    font-family: var(--font-mono);
    font-size: 22px;
    color: var(--ink-300);
  }
  .og-paper .corner-br { color: #555; }
</style>
