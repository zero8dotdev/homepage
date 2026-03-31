<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		c: 'claude' | 'cursor' | 'codex' | 'gemini' | 'windsurf' | 'aider';
		children: Snippet;
	}

	let { c, children }: Props = $props();

	const colors: Record<string, string> = {
		claude: '#d97706',
		cursor: '#2563eb',
		codex: '#059669',
		gemini: '#7c3aed',
		windsurf: '#0891b2',
		aider: '#dc2626'
	};
</script>

<span style="color:{colors[c]};font-weight:500">{@render children()}</span>
