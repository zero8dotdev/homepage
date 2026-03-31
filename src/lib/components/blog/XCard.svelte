<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		handle: string;
		date: string;
		brand?: 'x' | 'reddit' | 'dev';
		href?: string;
		children: Snippet;
	}

	let { name, handle, date, brand = 'x', href, children }: Props = $props();

	const xLogo = `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`;
	const redditLogo = `M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 0 1 5.5 16.898a5.778 5.778 0 0 0 4.252-1.189 2.879 2.879 0 0 1-2.684-1.995 2.881 2.881 0 0 0 1.3-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359A2.877 2.877 0 0 1 6.474 6.33a8.168 8.168 0 0 0 5.926 3.003 2.876 2.876 0 0 1 4.895-2.622 5.76 5.76 0 0 0 1.824-.697 2.884 2.884 0 0 1-1.263 1.589 5.74 5.74 0 0 0 1.65-.453 5.765 5.765 0 0 1-1.44 1.495z`;
	const devLogo = `M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.2-.16.3-.46.3-.9v-2.1c0-.44-.1-.74-.3-.9zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.29 2.72 0 2.24-.02 2.37-.44 3.15zm3.05.36H9.24V8.53h2.37v1.19h-1.18v2.09h1.18v1.19h-1.18v1.47h1.18v1.19zm4.35-.97c0 .64-.23 1.04-.66 1.26-.2.1-.46.15-.76.15-.65 0-1.03-.2-1.26-.65-.14-.26-.14-.28-.14-1.65V12.3h1.17v2.14c0 .69.02.78.1.92.08.12.22.18.38.18.26 0 .38-.1.46-.36.02-.08.02-.57.02-1.06V12.3h1.17v2.96l-.48-.57z`;

	const logoPath = brand === 'reddit' ? redditLogo : brand === 'dev' ? devLogo : xLogo;
</script>

{#if href}
<a class="xcard" data-brand={brand} {href} target="_blank" rel="noopener">
	<div class="xcard-head">
		<span class="xcard-name">{name}</span>
		<span class="xcard-handle">{handle}</span>
		<svg class="xcard-logo" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d={logoPath}/></svg>
	</div>
	<p class="xcard-text">{@render children()}</p>
	<span class="xcard-date">{date}</span>
</a>
{:else}
<div class="xcard" data-brand={brand}>
	<div class="xcard-head">
		<span class="xcard-name">{name}</span>
		<span class="xcard-handle">{handle}</span>
		<svg class="xcard-logo" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d={logoPath}/></svg>
	</div>
	<p class="xcard-text">{@render children()}</p>
	<span class="xcard-date">{date}</span>
</div>
{/if}
