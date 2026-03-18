<script lang="ts">
	import { featuredProject } from '$lib/data/site';

	let activeIndex = $state(0);
	const totalProjects = 3;
</script>

<section class="featured col-full">
	<h2 class="secondary-heading">Featured Projects</h2>

	<div class="project-grid">
		<!-- Project header row -->
		<div class="project-title-row">
			<h3 class="project-name">{featuredProject.name}</h3>
			<div class="tags desktop-tags">
				{#each featuredProject.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>

		<!-- Project image -->
		<div class="project-image">
			<img src={featuredProject.image} alt="Featured Project — {featuredProject.name}" />
		</div>

		<!-- Mobile tags -->
		<div class="tags mobile-tags">
			{#each featuredProject.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>

		<!-- Project sidebar -->
		<aside class="project-sidebar">
			<p class="desc-secondary">{featuredProject.description}</p>
			{#each featuredProject.stats as stat}
				<div class="stat">
					<p class="stat-value">{stat.value}</p>
					<p class="desc-secondary">{stat.label}</p>
				</div>
			{/each}
		</aside>

		<!-- Mobile divider -->
		<div class="mobile-divider"></div>

		<!-- Services row -->
		<div class="services-row">
			{#each featuredProject.services as service}
				<div class="service-group">
					<img src={service.icon} alt="" width="20" height="20" aria-hidden="true" />
					{#each service.items as item}
						<p>{item}</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<!-- Dot navigation -->
	<div class="dots">
		<div class="dot-container">
			{#each Array(totalProjects) as _, i}
				<button
					class="dot"
					class:active={i === activeIndex}
					onclick={() => (activeIndex = i)}
					aria-label="Project {i + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	.featured {
		margin-top: 0;
	}

	.project-grid {
		display: grid;
		gap: 16px;
	}

	@media (min-width: 1024px) {
		.project-grid {
			grid-template-rows: 90px 1fr auto;
			grid-template-columns: repeat(4, 1fr);
			gap: 0 16px;
		}
	}

	.project-title-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width: 1024px) {
		.project-title-row {
			grid-column: 1 / 4;
		}
	}

	.project-name {
		background: var(--color-primary);
		color: var(--color-onyx);
		font-size: clamp(24px, 3vw, 36px);
		padding: 16px;
		transform: translateY(4px);
	}

	.tags {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.desktop-tags {
		display: none;
	}

	@media (min-width: 1024px) {
		.desktop-tags {
			display: flex;
		}
	}

	.mobile-tags {
		display: flex;
	}

	@media (min-width: 1024px) {
		.mobile-tags {
			display: none;
		}
	}

	.tag {
		background: #232323;
		padding: 16px 24px;
		border-radius: 9999px;
		font-size: clamp(14px, 1.5vw, 20px);
		color: var(--color-description);
	}

	.project-image {
		overflow: hidden;
	}

	@media (min-width: 1024px) {
		.project-image {
			grid-column: 1 / 4;
			grid-row: 2;
		}
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.mobile-divider {
		border: 1px solid var(--color-icon-green);
	}

	@media (min-width: 1024px) {
		.mobile-divider {
			display: none;
		}
	}

	.project-sidebar {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding-top: 0;
	}

	@media (min-width: 1024px) {
		.project-sidebar {
			grid-column: 4;
			grid-row: 2;
			border-top: 1px solid var(--color-icon-green);
			padding-top: 24px;
		}
	}

	.stat-value {
		font-size: clamp(20px, 2vw, 28px);
		color: var(--color-primary);
	}

	.services-row {
		display: flex;
		justify-content: space-between;
		background: var(--color-onyx);
		border: 1px solid var(--color-charcoal);
		padding: 8px;
		gap: 8px;
	}

	@media (min-width: 1024px) {
		.services-row {
			grid-column: 1 / 4;
			grid-row: 3;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 16px;
			margin-top: 24px;
			background: transparent;
			border: none;
			padding: 0;
		}
	}

	.service-group {
		display: flex;
		flex-direction: column;
		gap: 4px;
		color: var(--desc-muted);
		font-size: clamp(14px, 1.5vw, 18px);
	}

	.service-group img {
		width: 20px;
		height: 20px;
	}

	.dots {
		display: flex;
		justify-content: center;
		margin-top: 24px;
	}

	.dot-container {
		display: flex;
		gap: 8px;
		padding: 8px;
		border: 1px solid var(--color-charcoal);
		background: var(--color-onyx);
	}

	.dot {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		background: var(--color-text-secondary);
		transition: background 0.2s;
	}

	.dot.active {
		background: var(--color-primary);
	}
</style>
