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
</svelte:head>

<div class="site-wrapper">
	<Header />
	<main class="grid-layout main-content">
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
</style>
