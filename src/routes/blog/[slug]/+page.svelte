<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/data/site';

	let { data }: { data: PageData } = $props();

	const postUrl = data.meta.canonical ?? `${siteConfig.url}/blog/${data.meta.slug ?? ''}`;
	const postImage = data.meta.image ? `${siteConfig.url}${data.meta.image}` : siteConfig.ogImage.url;
	const authorName = data.meta.author ?? siteConfig.author;
</script>

<svelte:head>
	<title>{data.meta.title} · zero8.dev</title>
	<meta name="description" content={data.meta.description} />
	<link rel="canonical" href={postUrl} />
	<meta property="og:title" content="{data.meta.title} · zero8.dev" />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:url" content={postUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={postImage} />
	<meta property="og:image:width" content="{siteConfig.ogImage.width}" />
	<meta property="og:image:height" content="{siteConfig.ogImage.height}" />
	<meta name="twitter:title" content="{data.meta.title} · zero8.dev" />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={postImage} />
	{#if data.meta.tags?.length}
		<meta property="article:tag" content={data.meta.tags.join(', ')} />
	{/if}
	<meta property="article:published_time" content={data.meta.date} />
	{#if data.meta.updated}
		<meta property="article:modified_time" content={data.meta.updated} />
	{/if}
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": data.meta.title,
		"description": data.meta.description,
		"datePublished": data.meta.date,
		"dateModified": data.meta.updated ?? data.meta.date,
		"url": postUrl,
		"author": {
			"@type": "Person",
			"name": authorName,
			"url": siteConfig.url
		},
		"publisher": {
			"@type": "Person",
			"name": siteConfig.author,
			"url": siteConfig.url
		},
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": postUrl
		},
		"image": postImage,
		...(data.meta.tags?.length ? { "keywords": data.meta.tags.join(', ') } : {})
	})}</script>`}
</svelte:head>

<article class="post col-full">
	<header class="post-header">
		<p class="post-meta">
			<time datetime={data.meta.date}>
				{new Date(data.meta.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
			· {data.meta.readTime}
		</p>
		<h1 class="post-title">{data.meta.title}</h1>
		<p class="post-description">{data.meta.description}</p>
		{#if data.meta.tags?.length}
			<div class="post-tags">
				{#each data.meta.tags as tag}
					<a href="/blog/tag/{tag}" class="post-tag">{tag}</a>
				{/each}
			</div>
		{/if}
	</header>

	{#if data.meta.image}
		<div class="post-hero">
			<img src={data.meta.image} alt={data.meta.title} />
		</div>
	{/if}

	<div class="post-content">
		{@html data.html}
	</div>

	<footer class="post-footer">
		<a href="/blog" class="back-link">← Back to writing</a>
	</footer>
</article>

<style>
	.post {
		max-width: 960px;
		margin: 0 auto;
		width: 100%;
	}

	.post-meta {
		font-size: 14px;
		color: var(--muted);
		font-style: italic;
		margin-bottom: 12px;
		font-weight: 400;
	}

	.post-title {
		font-size: clamp(24px, 4vw, 40px);
		font-weight: 500;
		line-height: 1.2;
		margin-bottom: 12px;
	}

	.post-description {
		font-size: clamp(16px, 1.5vw, 19px);
		color: var(--muted);
		line-height: 1.6;
		max-width: 65ch;
		margin-bottom: 16px;
		font-weight: 400;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 40px;
		padding-bottom: 32px;
		border-bottom: 1px solid var(--rule);
	}

	.post-tag {
		font-size: 12px;
		padding: 3px 10px;
		border: 1px solid var(--rule);
		border-radius: 100px;
		color: var(--muted);
		text-decoration: none;
		transition: all 0.15s;
	}

	.post-tag:hover {
		border-color: var(--fg);
		color: var(--fg);
	}

	.post-hero {
		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);
		margin-bottom: 48px;
	}

	.post-hero img {
		width: 100%;
		max-height: 480px;
		object-fit: cover;
	}

	.post-content {
		font-size: clamp(16px, 1.5vw, 18px);
		line-height: 1.8;
		color: var(--fg);
		font-weight: 400;
	}

	.post-content :global(h2) {
		font-size: clamp(20px, 2.2vw, 26px);
		font-weight: 500;
		margin-top: 48px;
		margin-bottom: 14px;
	}

	.post-content :global(h3) {
		font-size: clamp(17px, 1.8vw, 21px);
		font-weight: 500;
		margin-top: 36px;
		margin-bottom: 10px;
	}

	.post-content :global(p) {
		margin-bottom: 20px;
	}

	.post-content :global(a) {
		color: var(--link);
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-color: color-mix(in srgb, var(--link) 40%, transparent);
		transition: text-decoration-color 0.15s;
	}

	.post-content :global(a:hover) {
		text-decoration-color: var(--link);
	}

	.post-content :global(strong) {
		font-weight: 600;
	}

	.post-content :global(pre) {
		background: transparent;
		border: 1px solid var(--rule);
		padding: 20px;
		overflow-x: auto;
		margin: 28px 0;
		font-size: 14px;
		line-height: 1.6;
	}

	.post-content :global(code) {
		font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
	}

	.post-content :global(:not(pre) > code) {
		font-size: 0.88em;
		color: var(--fg);
		background: transparent;
		border: 1px solid var(--rule);
		padding: 1px 5px;
		border-radius: 2px;
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		padding-left: 24px;
		margin-bottom: 20px;
	}

	.post-content :global(li) {
		margin-bottom: 6px;
	}

	.post-content :global(blockquote) {
		border-left: 2px solid var(--rule);
		padding-left: 20px;
		margin: 28px 0;
		font-style: italic;
		color: var(--muted);
	}

	.post-content :global(hr) {
		border: none;
		border-top: 1px solid var(--rule);
		margin: 40px 0;
	}

	/* ── Table: content-width, scrollable with sticky first column ── */
	.post-content :global(table) {
		width: 100%;
		min-width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		margin: 28px 0;
		font-size: 13px;
		line-height: 1.45;
		overflow-x: auto;
		display: block;
		-webkit-overflow-scrolling: touch;
	}

	.post-content :global(thead) {
		border-bottom: 1px solid var(--fg);
	}

	.post-content :global(th) {
		text-align: left;
		font-weight: 500;
		padding: 6px 12px;
		white-space: nowrap;
		font-size: 11px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--muted);
		background: var(--bg);
	}

	.post-content :global(td) {
		padding: 6px 12px;
		vertical-align: top;
		white-space: nowrap;
		background: var(--bg);
	}

	.post-content :global(tbody tr) {
		border-bottom: 1px solid var(--rule);
	}

	.post-content :global(tbody tr:last-child) {
		border-bottom: none;
	}

	/* Sticky first column */
	.post-content :global(th:first-child),
	.post-content :global(td:first-child) {
		position: sticky;
		left: 0;
		z-index: 1;
		font-weight: 500;
		color: var(--fg);
		box-shadow: 1px 0 0 var(--rule);
	}

	/* ── GitHub cards ── */
	.post-content :global(.gh-grid) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 14px;
		margin: 28px 0;
	}

	.post-content :global(.gh-card) {
		border: 1px solid var(--rule);
		border-radius: 8px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-width: 0;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.15s;
	}

	.post-content :global(.gh-card:hover) {
		border-color: var(--muted);
	}

	.post-content :global(.gh-card-head) {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.post-content :global(.gh-card-name) {
		font-size: 15px;
		font-weight: 600;
		color: var(--fg);
	}

	.post-content :global(.gh-card-repo) {
		font-size: 12px;
		color: var(--muted);
		font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
	}

	.post-content :global(.gh-card-desc) {
		font-size: 13px;
		line-height: 1.45;
		color: var(--muted);
		margin: 0;
	}

	.post-content :global(.gh-card-stats) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
		padding-top: 6px;
		border-top: 1px solid var(--rule);
	}

	.post-content :global(.gh-stat) {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 12px;
		color: var(--fg);
		font-weight: 500;
	}

	.post-content :global(.gh-stat svg) {
		color: var(--muted);
		flex-shrink: 0;
	}

	.post-content :global(.gh-stat-ratio) {
		font-weight: 400;
		color: var(--muted);
		font-size: 11px;
	}

	.post-content :global(.gh-card-lang) {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 11px;
		color: var(--muted);
	}

	.post-content :global(.gh-lang-dot) {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: inline-block;
		flex-shrink: 0;
	}

	@media (max-width: 639px) {
		.post-content :global(.gh-grid) {
			grid-template-columns: 1fr;
		}

		.post-content :global(.gh-card-stats) {
			flex-wrap: wrap;
			gap: 8px;
			justify-content: flex-start;
		}
	}

	/* ── X card legend ── */
	.post-content :global(.xcard-legend) {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-bottom: 18px;
		font-size: 12px;
		color: var(--muted);
	}

	.post-content :global(.xcard-legend-item) {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.post-content :global(.xcard-dot) {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: inline-block;
		flex-shrink: 0;
	}

	/* ── Product highlights ── */
	.post-content :global(.hl-claude) {
		color: #d97706;
		font-weight: 500;
	}

	.post-content :global(.hl-cursor) {
		color: #2563eb;
		font-weight: 500;
	}

	.post-content :global(.hl-codex) {
		color: #059669;
		font-weight: 500;
	}

	.post-content :global(.hl-gemini) {
		color: #7c3aed;
		font-weight: 500;
	}

	.post-content :global(.hl-windsurf) {
		color: #0891b2;
		font-weight: 500;
	}

	.post-content :global(.hl-aider) {
		color: #dc2626;
		font-weight: 500;
	}

	/* ── X card grid ── */
	.post-content :global(.xcard-grid) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 14px;
		margin: 28px 0;
	}

	.post-content :global(.xcard) {
		border: 1px solid var(--rule);
		border-radius: 12px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		transition: border-color 0.15s;
		min-width: 0;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
	}

	.post-content :global(.xcard[data-brand="x"]) {
		border-color: #d4d4d4;
	}

	.post-content :global(.xcard[data-brand="reddit"]) {
		border-color: #ffcbb8;
	}

	.post-content :global(.xcard[data-brand="dev"]) {
		border-color: #d4d4d4;
	}

	.post-content :global(.xcard:hover) {
		border-color: var(--muted);
	}

	.post-content :global(.xcard-head) {
		display: flex;
		align-items: center;
		gap: 6px;
		min-width: 0;
	}

	.post-content :global(.xcard-name) {
		font-size: 13px;
		font-weight: 600;
		color: var(--fg);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.post-content :global(.xcard-handle) {
		font-size: 12px;
		color: var(--muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.post-content :global(.xcard-logo) {
		margin-left: auto;
		color: var(--muted);
		flex-shrink: 0;
	}

	.post-content :global(.xcard-text) {
		font-size: 14px;
		line-height: 1.5;
		color: var(--fg);
		margin: 0;
		word-break: break-word;
	}

	.post-content :global(.xcard-date) {
		font-size: 11px;
		color: var(--muted);
		margin-top: auto;
	}

	@media (max-width: 639px) {
		.post-content :global(.xcard-grid) {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.post-content :global(.xcard) {
			padding: 14px;
		}

		.post-content :global(.xcard-text) {
			font-size: 13px;
		}

		.post-content :global(.xcard-legend) {
			gap: 10px;
		}
	}

	.post-footer {
		margin-top: 56px;
		padding-top: 28px;
		border-top: 1px solid var(--rule);
	}

	.back-link {
		font-size: 15px;
		color: var(--muted);
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-color: var(--rule);
		transition: color 0.15s, text-decoration-color 0.15s;
	}

	.back-link:hover {
		color: var(--fg);
		text-decoration-color: var(--fg);
	}
</style>
