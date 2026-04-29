<script>
  import TopNav from './TopNav.svelte';
  import Hero from './Hero.svelte';
  import Footer from './Footer.svelte';

  export let active = 'writing';
</script>

<div class="page">
  <TopNav {active} />
  <main class="main">
    <Hero />
    <slot />
  </main>
  <Footer />
</div>

<style>
  .page { background: var(--bg); color: var(--fg); font-family: var(--font-body); flex: 1; display: flex; flex-direction: column; }
  .main { flex: 1; max-width: var(--wide-width); margin: 0 auto; width: 100%; padding: 80px 32px 64px; }
</style>
