<script lang="ts">
	import { testimonials } from '$lib/data/site';
	import { onMount } from 'svelte';

	let carouselEl: HTMLDivElement;
	let activeIndex = $state(0);

	function handleScroll() {
		if (!carouselEl) return;
		const index = Math.round(carouselEl.scrollLeft / carouselEl.offsetWidth);
		activeIndex = index;
	}

	function scrollToIndex(index: number) {
		if (!carouselEl) return;
		carouselEl.scrollTo({ left: index * carouselEl.offsetWidth, behavior: 'smooth' });
	}

	onMount(() => {
		carouselEl.addEventListener('scroll', handleScroll, { passive: true });
		return () => carouselEl.removeEventListener('scroll', handleScroll);
	});
</script>

<section class="testimonials col-full" aria-label="Testimonials">
	<h2 class="sr-only">Testimonials</h2>
	<div class="carousel" bind:this={carouselEl} role="region" aria-label="Customer testimonials">
		{#each testimonials as t, i}
			<article class="card" aria-label="Testimonial {i + 1}">
				<blockquote>
					<p class="quote">{t.quote}</p>
				</blockquote>
				<cite class="author">— {t.author}</cite>
			</article>
		{/each}
	</div>

	<!-- Mobile dots -->
	<div class="dots" role="tablist" aria-label="Testimonial navigation">
		{#each testimonials as _, i}
			<button
				class="dot"
				class:active={i === activeIndex}
				onclick={() => scrollToIndex(i)}
				aria-label="Go to testimonial {i + 1}"
				aria-selected={i === activeIndex}
				role="tab"
			></button>
		{/each}
	</div>
</section>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.carousel {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
		gap: 16px;
		scrollbar-width: none;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 1024px) {
		.carousel {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			overflow: visible;
		}
	}

	.card {
		min-width: 100%;
		flex-shrink: 0;
		scroll-snap-align: center;
		background: var(--color-charcoal);
		border-radius: 4px;
		padding: 16px;
		height: 224px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 12px;
		color: rgba(237, 237, 237, 0.7);
	}

	@media (min-width: 1024px) {
		.card {
			min-width: unset;
			padding: 24px;
			font-size: 20px;
		}
	}

	.quote {
		text-align: center;
		font-size: clamp(14px, 1.5vw, 20px);
	}

	.author {
		font-style: normal;
		font-size: clamp(12px, 1.2vw, 16px);
		align-self: flex-end;
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 16px;
	}

	@media (min-width: 1024px) {
		.dots {
			display: none;
		}
	}

	.dot {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		background: var(--color-description);
		transition: background 0.2s;
	}

	.dot.active {
		background: var(--color-icon-green);
	}
</style>
