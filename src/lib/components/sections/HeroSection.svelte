<script lang="ts">
	import { hero } from '$lib/data/site';
</script>

<section class="hero">
	<h1 class="primary-heading">{@html hero.headline.replace('\n', '<br />')}</h1>
	<p class="sub">{hero.subline}</p>
	<div class="cta">
		{#each hero.ctas as cta, i}
			{#if i > 0}<span class="sep">·</span>{/if}
			<a href={cta.href} class="cta-link">{cta.label}</a>
		{/each}
	</div>
</section>

<style>
	.hero {
		padding-top: 24px;
	}

	.sub {
		margin-top: 20px;
		font-size: clamp(18px, 2vw, 22px);
		color: var(--muted);
		max-width: 52ch;
	}

	.cta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 32px;
	}

	.cta-link {
		font-size: 18px;
		color: var(--fg);
		text-decoration: underline;
		text-decoration-color: var(--rule);
		text-underline-offset: 4px;
		transition: text-decoration-color 0.15s;
	}

	.cta-link:hover {
		text-decoration-color: var(--fg);
	}

	.sep {
		color: var(--muted);
		font-size: 18px;
		user-select: none;
	}
</style>
