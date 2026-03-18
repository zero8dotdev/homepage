<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Zero8.Dev — Frontend Engineering Studio</title>
	<meta
		name="description"
		content="Digital company building future forward software. Frontend engineering, product design, and full-stack development."
	/>
	<meta property="og:title" content="Zero8.Dev — Frontend Engineering Studio" />
	<meta
		property="og:description"
		content="Digital company building future forward software. Frontend engineering, product design, and full-stack development."
	/>
	<meta property="og:image" content="/ogtest.jpg" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<BackgroundGrid />

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
		padding-top: 40px;
		padding-bottom: 40px;
		row-gap: 40px;
	}

	@media (min-width: 1024px) {
		.main-content {
			row-gap: 112px;
		}
	}
</style>
