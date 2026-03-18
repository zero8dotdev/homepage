<script lang="ts">
	import { craftAreas } from '$lib/data/site';
</script>

<section class="craft">
	<h2 class="section-label">Things I think about</h2>
	<dl class="craft-list">
		{#each craftAreas as area}
			<div class="craft-item">
				<dt>{area.title}</dt>
				<dd>{area.description}</dd>
			</div>
		{/each}
	</dl>
</section>

<style>
	.section-label {
		font-size: clamp(11px, 1vw, 13px);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
		font-weight: 500;
		margin-bottom: 32px;
	}

	.craft-list {
		display: flex;
		flex-direction: column;
	}

	.craft-item {
		padding: 24px 0;
		border-top: 1px solid var(--rule);
		display: grid;
		gap: 6px;
	}

	.craft-item:last-child {
		border-bottom: 1px solid var(--rule);
	}

	@media (min-width: 500px) {
		.craft-item {
			grid-template-columns: 200px 1fr;
			gap: 0 32px;
		}
	}

	dt {
		font-size: clamp(17px, 1.7vw, 20px);
		font-weight: 500;
		color: var(--fg);
	}

	dd {
		font-size: clamp(16px, 1.6vw, 19px);
		color: var(--muted);
		line-height: 1.65;
	}
</style>
