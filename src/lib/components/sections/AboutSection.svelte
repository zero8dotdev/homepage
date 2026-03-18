<script lang="ts">
	import { about } from '$lib/data/site';
</script>

<section class="about" id="about">
	{#each about.paragraphs as para}
		<p>{para}</p>
	{/each}
</section>

<style>
	.about {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.about p {
		font-size: clamp(18px, 2vw, 22px);
		line-height: 1.75;
		color: var(--muted);
		max-width: 62ch;
	}
</style>
