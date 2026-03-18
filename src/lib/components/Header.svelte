<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import { navLinks } from '$lib/data/site';
</script>

<header class="site-header">
	<div class="grid-layout inner">
		<a href="/" class="wordmark" aria-label="zero8.dev home">zero8.dev</a>
		<nav class="desktop-nav">
			{#each navLinks as link}
				<a href={link.href}>{link.text}</a>
			{/each}
		</nav>
		<div class="mobile-right">
			<MobileNav />
		</div>
	</div>
</header>

<style>
	.site-header {
		border-bottom: 1px solid var(--rule);
		padding: 20px 0;
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.wordmark {
		font-family: 'Lora', serif;
		font-size: 20px;
		font-weight: 500;
		letter-spacing: -0.01em;
		color: var(--fg);
		text-decoration: none;
	}

	.desktop-nav {
		display: none;
	}

	@media (min-width: 640px) {
		.desktop-nav {
			display: flex;
			align-items: center;
			gap: 32px;
		}

		.mobile-right {
			display: none;
		}
	}

	.desktop-nav a {
		font-size: 18px;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.desktop-nav a:hover {
		color: var(--fg);
	}

	.mobile-right {
		display: flex;
		align-items: center;
		gap: 16px;
	}
</style>
