<script lang="ts">
	import SlideButton from '$lib/components/SlideButton.svelte';
</script>

<section class="hero col-full">
	<h1 class="primary-heading">Frontend isn't just frontend.</h1>
	<h2 class="subtitle">I tried building a company around it. This page is what I learned.</h2>
	<div class="cta">
		<SlideButton title="Read the story" href="#contact" />
	</div>
</section>

<style>
	.hero {
		padding-top: 32px;
		padding-bottom: 16px;
	}

	.subtitle {
		font-size: clamp(18px, 2vw, 28px);
		color: var(--text);
		margin-top: 16px;
		font-weight: 600;
	}

	.cta {
		margin-top: 24px;
	}
</style>
