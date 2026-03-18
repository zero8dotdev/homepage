<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		date?: string;
		readTime?: string;
		href?: string;
		featured?: boolean;
	}

	let { title, description, date, readTime, href = '#', featured = false }: Props = $props();
</script>

<a {href} class="card" class:featured>
	<div class="card-body">
		<h2 class="card-title" class:featured-title={featured}>{title}</h2>
		{#if description}
			<p class="card-desc" class:featured-desc={featured}>{description}</p>
		{/if}
	</div>
	<div class="card-footer">
		{#if date || readTime}
			<div class="meta">
				{#if date}<span class="meta-date">{date}</span>{/if}
				{#if date && readTime}<span>•</span>{/if}
				{#if readTime}<span>{readTime}</span>{/if}
			</div>
		{/if}
		<span class="read-link" class:featured-link={featured}>Read full</span>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 16px;
		background: var(--color-charcoal);
		color: var(--color-description);
		text-decoration: none;
		transition: opacity 0.2s;
	}

	@media (min-width: 1024px) {
		.card {
			padding: 24px;
		}
	}

	.card:hover {
		opacity: 0.9;
	}

	.card.featured {
		background: var(--color-primary);
		color: var(--color-charcoal);
	}

	.card-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.card-title {
		font-size: clamp(22px, 2.5vw, 36px);
	}

	.card-title.featured-title {
		font-size: clamp(22px, 2.5vw, 36px);
	}

	.card-desc {
		font-size: clamp(14px, 1.5vw, 20px);
		color: rgba(237, 237, 237, 0.7);
	}

	.card-desc.featured-desc {
		color: var(--color-charcoal);
		font-size: clamp(14px, 1.5vw, 20px);
	}

	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
		padding-top: 16px;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: clamp(13px, 1.2vw, 16px);
		color: rgba(237, 237, 237, 0.7);
	}

	.meta-date {
		font-weight: 400;
	}

	.read-link {
		font-size: clamp(13px, 1.2vw, 16px);
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.read-link.featured-link {
		color: var(--color-charcoal);
	}

	.read-link:hover {
		text-decoration: underline;
	}
</style>
