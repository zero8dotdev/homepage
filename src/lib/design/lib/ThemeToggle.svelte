<script>
  import { onMount } from 'svelte';

  let light = $state(false);

  onMount(() => {
    light = document.documentElement.getAttribute('data-theme') === 'light';
  });

  function toggle() {
    const html = document.documentElement;

    html.classList.add('theme-transition');
    light = !light;

    if (light) {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      html.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    }

    setTimeout(() => html.classList.remove('theme-transition'), 420);
  }
</script>

<button onclick={toggle} aria-label="Switch to {light ? 'dark' : 'light'} mode">
  {#if light}
    <!-- Moon: in light mode, click to go dark -->
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  {:else}
    <!-- Sun: in dark mode, click to go light -->
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  {/if}
</button>

<style>
  button {
    display: flex;
    align-items: center;
    color: var(--fg-muted);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 150ms ease;
  }
  button:hover { color: var(--peach-500); }
</style>
