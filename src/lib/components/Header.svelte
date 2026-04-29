<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import Wordmark from '$lib/design/lib/Wordmark.svelte';
	import { navLinks } from '$lib/data/site';
</script>

<header class="site-header">
	<div class="grid-layout inner">
		<Wordmark />
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
		border-bottom: 1px solid var(--hairline);
		padding: 20px 0;
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 32px;
		margin-left: auto;
	}

	.desktop-nav a {
		font-size: var(--t-base);
		color: var(--fg-muted);
		text-decoration: none;
		transition: color var(--dur-fast) var(--ease);
	}

	.desktop-nav a:hover {
		color: var(--fg);
		text-decoration: none;
	}

	.mobile-right {
		display: none;
	}

	@media (max-width: 639px) {
		.desktop-nav {
			display: none;
		}

		.mobile-right {
			display: flex;
			align-items: center;
			gap: 16px;
			margin-left: auto;
		}
	}
</style>
