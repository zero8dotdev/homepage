<script lang="ts">
	import { theme, applyTheme, type Theme } from '$lib/stores/theme';

	function toggleTheme() {
		theme.update((t) => {
			if (t === 'system') return 'dark';
			if (t === 'dark') return 'light';
			return 'system';
		});
	}

	let currentTheme = $state<Theme>('system');
	theme.subscribe((t) => (currentTheme = t));

	// True when we want the "dim" (inactive) sun icon
	let isGrayedOut = $derived(currentTheme === 'system' || currentTheme === 'light');
</script>

<button onclick={toggleTheme} class="theme-btn" aria-label="Toggle theme">
	{#if isGrayedOut}
		<!-- Sun dim -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon-dim"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
		</svg>
	{:else}
		<!-- Sun bright -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon-bright"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	{/if}
</button>

<style>
	.theme-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
		border: none;
		background: transparent;
		cursor: pointer;
		transition: opacity 0.15s;
	}

	.theme-btn:hover {
		opacity: 0.6;
	}

	.icon-dim,
	.icon-bright {
		color: var(--muted);
	}
</style>
