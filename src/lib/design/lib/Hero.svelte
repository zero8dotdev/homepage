<script>
  import Button from './Button.svelte';
  export let kicker = '▲ ASHUTOSH TRIPATHI · SOFTWARE ENGINEER';
  export let primaryHref = '/blog';
  export let primaryLabel = 'Read my writing';
  export let secondaryHref = '/work';
  export let secondaryLabel = 'See my work →';
</script>

<header class="hero">
  <div class="kicker">{kicker}</div>
  <h1 class="h1">
    <slot name="headline">
      I build software people can<br />
      <span class="peach">reason about.</span>
    </slot>
  </h1>
  <p class="lede">
    <slot name="lede">
      Developer tools and AI-native systems. I design the infrastructure that lets
      agents — human and automated — operate without friction. A decade of product engineering.
    </slot>
  </p>
  <div class="cta-row">
    <Button variant="primary" href={primaryHref}>{primaryLabel}</Button>
    <Button variant="ghost" href={secondaryHref}>{secondaryLabel}</Button>
  </div>
</header>

<style>
  .hero { padding-bottom: 80px; border-bottom: 1px solid var(--hairline); margin-bottom: 64px; }
  .kicker {
    font-family: var(--font-mono);
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--fg-faint);
    margin-bottom: 32px;
    display: inline-flex; gap: 8px;
  }
  .h1 {
    font-family: var(--font-sans);
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.05;
    color: var(--fg);
    margin: 0 0 28px;
    text-wrap: balance;
  }
  .peach { color: var(--peach-500); }
  .lede {
    font-size: 17px;
    line-height: 1.55;
    color: var(--fg-muted);
    max-width: 56ch;
    margin: 0 0 32px;
  }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
