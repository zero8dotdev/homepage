<script lang="ts">
	import FrontendBlogCard from './FrontendBlogCard.svelte';
	import { blogPosts } from '$lib/data/site';
</script>

<section class="blogs col-full">
	<h2 class="secondary-heading">Frontend Blogs</h2>
	<div class="blogs-grid">
		{#each blogPosts as post}
			<div class="blog-item" class:featured={post.featured}>
				<FrontendBlogCard
					title={post.title}
					description={post.description}
					date={post.date}
					readTime={post.readTime}
					href={post.href}
					featured={post.featured}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.blogs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, auto);
		gap: 16px;
		margin-top: 32px;
	}

	@media (min-width: 1024px) {
		.blogs-grid {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
	}

	.blog-item {
		grid-column: span 1;
	}

	.blog-item.featured {
		grid-column: span 2;
	}
</style>
