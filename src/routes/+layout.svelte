<script lang="ts">
	import '$lib/design/tokens.css';
	import '$lib/design/app.css';
	let { children } = $props();
</script>

<a href="#main" class="skip">Skip to content</a>
{@render children()}

<style>
	.skip {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 200;
		padding: 8px 16px;
		background: var(--fg);
		color: var(--bg);
		font-size: 13px;
		font-family: var(--font-mono);
		text-decoration: none;
	}
	.skip:focus { left: 16px; top: 16px; }
</style>
