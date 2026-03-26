<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		// Always light — remove any dark class set by old theme logic
		document.documentElement.classList.remove('dark');
		document.documentElement.classList.add('light');
		localStorage.removeItem('theme');
	});

	let { children } = $props();
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@zero8dotdev" />
	<meta name="twitter:creator" content="@zero8dotdev" />
	<link rel="alternate" type="application/rss+xml" title="zero8.dev" href="/feed.xml" />
</svelte:head>

<div class="site-wrapper">
	<a href="#main-content" class="skip-to-content">Skip to content</a>
	<Header />
	<main id="main-content" class="grid-layout main-content">
		{@render children()}
	</main>
	<div class="grid-layout">
		<Footer />
	</div>
</div>

<style>
	.site-wrapper {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		padding-top: 64px;
		padding-bottom: 64px;
		display: flex;
		flex-direction: column;
		gap: 80px;
	}

	.skip-to-content {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 100;
		padding: 8px 16px;
		background: var(--fg);
		color: var(--bg);
		font-size: 14px;
		text-decoration: none;
	}

	.skip-to-content:focus {
		left: 16px;
		top: 16px;
	}
</style>
