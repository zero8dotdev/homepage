<script lang="ts">
	let { data }: { data: object } = $props();

	// Escape "<" so string values can't break out of the tag; the tag itself is
	// concatenated so Svelte's parser doesn't see a literal "<script" in markup.
	const json = JSON.stringify(data).replace(/</g, '\\u003c');
	const tag = '<scr' + 'ipt type="application/ld+json">' + json + '</scr' + 'ipt>';
</script>

<svelte:head>
	{@html tag}
</svelte:head>
