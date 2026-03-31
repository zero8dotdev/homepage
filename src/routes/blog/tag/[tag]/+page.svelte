<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/data/site';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Posts tagged "{data.tag}" · zero8.dev</title>
	<meta name="description" content="Articles tagged {data.tag} on zero8.dev." />
	<link rel="canonical" href="{siteConfig.url}/blog/tag/{data.tag}" />
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="tag-page col-full">
	<a href="/blog" class="back-link">← All posts</a>

	<h1 class="page-title">Tagged: {data.tag}</h1>
	<p class="tag-count">{data.posts.length} {data.posts.length === 1 ? 'post' : 'posts'}</p>

	<div class="tag-list">
		{#each data.allTags as t}
			<a
				href="/blog/tag/{t.tag}"
				class="tag-pill"
				class:active={t.tag === data.tag}
			>
				{t.tag} <span class="tag-pill-count">{t.count}</span>
			</a>
		{/each}
	</div>

	<ul class="post-list">
		{#each data.posts as post}
			<li class="post-item">
				<a href="/blog/{post.slug}" class="post-link">
					<span class="post-title">{post.title}</span>
					<span class="post-meta">
						<time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
						· {post.readTime}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.back-link {
		font-size: 14px;
		color: var(--muted);
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-color: var(--rule);
		transition: color 0.15s;
	}

	.back-link:hover {
		color: var(--fg);
	}

	.page-title {
		font-size: clamp(24px, 4vw, 40px);
		font-weight: 500;
		line-height: 1.2;
		margin-top: 24px;
		margin-bottom: 4px;
	}

	.tag-count {
		font-size: 14px;
		color: var(--muted);
		margin-bottom: 28px;
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 40px;
	}

	.tag-pill {
		font-size: 13px;
		padding: 4px 12px;
		border: 1px solid var(--rule);
		border-radius: 100px;
		color: var(--muted);
		text-decoration: none;
		transition: all 0.15s;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.tag-pill:hover {
		border-color: var(--fg);
		color: var(--fg);
	}

	.tag-pill.active {
		background: var(--fg);
		color: var(--bg);
		border-color: var(--fg);
	}

	.tag-pill-count {
		font-size: 11px;
		opacity: 0.6;
	}

	.post-list {
		list-style: none;
	}

	.post-item {
		border-top: 1px solid var(--rule);
	}

	.post-item:last-child {
		border-bottom: 1px solid var(--rule);
	}

	.post-link {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 24px 0;
		text-decoration: none;
		transition: opacity 0.15s;
	}

	.post-link:hover {
		opacity: 0.65;
	}

	.post-title {
		font-size: clamp(19px, 2vw, 24px);
		font-weight: 500;
		color: var(--fg);
	}

	.post-meta {
		font-size: 15px;
		color: var(--muted);
		font-style: italic;
	}
</style>
