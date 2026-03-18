<script lang="ts">
	import { phases } from '$lib/data/site';
</script>

<section class="phases col-full">
	<div class="phases-label">
		<h2 class="desc-primary">Phases of product we are involved in:</h2>
	</div>
	<div class="phases-grid">
		{#each phases as phase}
			<div class="phase-card">
				<div class="icon-wrap">
					<img src={phase.icon} alt={phase.title} width="36" height="36" />
				</div>
				<h3 class="desc-primary phase-title">{phase.title}</h3>
				<div class="desc-secondary phase-points">
					{#each phase.points as point}
						<p>{point}</p>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.phases {
		margin-top: 48px;
	}

	.phases-label {
		border: 1px solid var(--color-charcoal);
		padding: 4px 8px;
		margin-bottom: 24px;
	}

	@media (min-width: 1024px) {
		.phases-label {
			border: none;
			padding: 0;
		}
	}

	.phases-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px 24px;
	}

	@media (min-width: 1024px) {
		.phases-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.icon-wrap {
		width: 36px;
		height: 36px;
	}

	.phase-title {
		margin: 8px 0;
	}

	.phase-points p {
		line-height: 1.5;
	}
</style>
