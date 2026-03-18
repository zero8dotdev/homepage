<script lang="ts">
	interface Props {
		title: string;
		href?: string;
	}

	let { title, href }: Props = $props();
</script>

{#if href}
	<a {href} class="slide-btn">
		<span class="slide-bg"></span>
		<span class="label">{title}</span>
		<svg
			class="chevron"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</a>
{:else}
	<button class="slide-btn">
		<span class="slide-bg"></span>
		<span class="label">{title}</span>
		<svg
			class="chevron"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
{/if}

<style>
	.slide-btn {
		position: relative;
		overflow: hidden;
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 16px 24px;
		background: var(--color-primary);
		color: var(--color-onyx);
		font-family: inherit;
		font-size: clamp(18px, 1.875vw, 24px);
		font-weight: 600;
		border: none;
		cursor: pointer;
		text-decoration: none;
		transition: color 0.3s;
	}

	.slide-bg {
		position: absolute;
		inset: 0;
		background: var(--color-icon-green);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 300ms ease;
	}

	.slide-btn:hover .slide-bg {
		transform: scaleX(1);
	}

	.label,
	.chevron {
		position: relative;
		z-index: 1;
	}
</style>
