<script lang="ts">
	import { navLinks } from '$lib/data/site';

	import { onMount } from 'svelte';

	let open = $state(false);

	onMount(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') open = false;
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});
</script>

<button class="menu-btn" onclick={() => (open = !open)} aria-label={open ? 'Close menu' : 'Open menu'}>
	{#if open}✕{:else}☰{/if}
</button>

{#if open}
	<nav class="mobile-menu">
		<div class="grid-layout">
			{#each navLinks as link}
				<a href={link.href} onclick={() => (open = false)}>{link.text}</a>
			{/each}
		</div>
	</nav>
{/if}

<style>
	.menu-btn {
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--muted);
		font-size: 20px;
		font-family: inherit;
		line-height: 1;
		transition: color 0.15s;
	}

	.menu-btn:hover {
		color: var(--fg);
	}

	.mobile-menu {
		position: fixed;
		inset: 0;
		top: 63px;
		background: var(--bg);
		z-index: 100;
		padding: 40px 0;
		border-top: 1px solid var(--rule);
	}

	.mobile-menu .grid-layout {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.mobile-menu a {
		font-size: clamp(28px, 8vw, 42px);
		font-family: 'EB Garamond', serif;
		font-weight: 400;
		color: var(--fg);
		text-decoration: none;
		padding: 8px 0;
		transition: color 0.15s;
	}

	.mobile-menu a:hover {
		color: var(--muted);
	}
</style>
