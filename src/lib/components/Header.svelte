<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import MobileNav from './MobileNav.svelte';
	import { navLinks } from '$lib/data/site';
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handler = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	});
</script>

<!-- Desktop header -->
<header class="desktop-header" class:scrolled>
	<div class="inner">
		<a href="/" class="logo">
			<img src="/footerlogodesk.png" alt="Zero8 Logo" width="150" height="50" />
		</a>
		<nav>
			<ul>
				{#each navLinks as link}
					<li><a href={link.href}>{link.text}</a></li>
				{/each}
			</ul>
			<ThemeToggle />
		</nav>
	</div>
</header>

<!-- Mobile header -->
<MobileNav />

<style>
	.desktop-header {
		display: none;
	}

	@media (min-width: 1024px) {
		.desktop-header {
			display: flex;
			position: sticky;
			top: 0;
			z-index: 50;
			width: 100%;
			border-bottom: 1px solid var(--border);
			transition: background-color 0.3s;
		}
	}

	.desktop-header.scrolled {
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		background: rgba(255, 255, 255, 0.4);
	}

	:global(html.dark) .desktop-header.scrolled {
		background: rgba(18, 18, 18, 0.4);
	}

	.inner {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
		padding: 0 16px;
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo img {
		display: block;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	nav ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 32px;
	}

	nav a {
		font-size: 20px;
		color: var(--text);
		text-decoration: none;
		transition: opacity 0.2s;
	}

	nav a:hover {
		opacity: 0.7;
	}
</style>
