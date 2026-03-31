<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/data/site';

	let { data }: { data: PageData } = $props();
	let activeTag = $state<string | null>(null);

	const filteredPosts = $derived(
		activeTag ? data.posts.filter((p) => p.tags.includes(activeTag!)) : data.posts
	);
</script>

<svelte:head>
	<title>Writing · zero8.dev</title>
	<meta name="description" content="Writing on frontend engineering, developer tools, open source, and AI memory." />
	<link rel="canonical" href="{siteConfig.url}/blog" />
	<meta property="og:title" content="Writing · zero8.dev" />
	<meta property="og:description" content="Writing on frontend engineering, developer tools, open source, and AI memory." />
	<meta property="og:url" content="{siteConfig.url}/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={siteConfig.ogImage.url} />
	<meta property="og:image:width" content="{siteConfig.ogImage.width}" />
	<meta property="og:image:height" content="{siteConfig.ogImage.height}" />
	<meta name="twitter:title" content="Writing · zero8.dev" />
	<meta name="twitter:description" content="Writing on frontend engineering, developer tools, open source, and AI memory." />
	<meta name="twitter:image" content={siteConfig.ogImage.url} />
</svelte:head>

<section class="blog-index col-full">
	<h1 class="page-title">Writing</h1>

	<div class="intro">
		<p>The last few years have been speed learning mode: building a team, going deep on video streaming, figuring out GTM for developer tools. Lots absorbed, very little published.</p>
		<p>I've been lazy about this blog, even though I've had this space for almost half a decade. What I <em>did</em> do was take notes. Scattered across many places, but well organised.</p>
		<p>The next few months I'm pulling the good things out of the vault and bringing them here. Keep watching this space.</p>
	</div>

	{#if data.tags.length > 0}
		<div class="tag-bar">
			<button
				class="tag-pill"
				class:active={activeTag === null}
				onclick={() => activeTag = null}
			>
				All
			</button>
			{#each data.tags as t}
				<button
					class="tag-pill"
					class:active={activeTag === t.tag}
					onclick={() => activeTag = activeTag === t.tag ? null : t.tag}
				>
					{t.tag} <span class="tag-pill-count">{t.count}</span>
				</button>
			{/each}
		</div>
	{/if}

	{#if filteredPosts.length > 0}
		<ul class="post-list">
			{#each filteredPosts as post}
				<li class="post-item">
					<a href="/blog/{post.slug}" class="post-link">
						<span class="post-title">{post.title}</span>
						<span class="post-meta">
							<time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
							· {post.readTime}
						</span>
						{#if post.tags.length > 0}
							<span class="post-tags">
								{#each post.tags as tag}
									<span class="post-tag">{tag}</span>
								{/each}
							</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="no-posts">No posts found{activeTag ? ` tagged "${activeTag}"` : ''}.</p>
	{/if}
</section>

<style>
	.page-title {
		font-size: clamp(32px, 5vw, 56px);
		font-weight: 500;
		line-height: 1.1;
		margin-bottom: 32px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 60ch;
		margin-bottom: 40px;
	}

	.intro p {
		font-size: clamp(17px, 1.7vw, 20px);
		color: var(--muted);
		line-height: 1.75;
	}

	.intro em {
		font-style: italic;
		color: var(--fg);
	}

	.tag-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 36px;
	}

	.tag-pill {
		font-family: inherit;
		font-size: 13px;
		padding: 4px 12px;
		border: 1px solid var(--rule);
		border-radius: 100px;
		color: var(--muted);
		background: none;
		cursor: pointer;
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

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 4px;
	}

	.post-tag {
		font-size: 11px;
		padding: 2px 8px;
		border: 1px solid var(--rule);
		border-radius: 100px;
		color: var(--muted);
	}

	.no-posts {
		font-size: 16px;
		color: var(--muted);
		padding: 24px 0;
	}
</style>
