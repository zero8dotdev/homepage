<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const PostContent = $derived(data.content);
</script>

<svelte:head>
	<title>{data.meta.title} · zero8.dev</title>
	<meta name="description" content={data.meta.description} />
	<link rel="canonical" href="https://zero8.dev/blog/{data.meta.slug ?? ''}" />
	<meta property="og:title" content="{data.meta.title} · zero8.dev" />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:url" content="https://zero8.dev/blog/{data.meta.slug ?? ''}" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://zero8.dev/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:title" content="{data.meta.title} · zero8.dev" />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content="https://zero8.dev/og-image.jpg" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": data.meta.title,
		"description": data.meta.description,
		"datePublished": data.meta.date,
		"dateModified": data.meta.date,
		"url": `https://zero8.dev/blog/${data.meta.slug ?? ''}`,
		"author": {
			"@type": "Person",
			"name": "Ashutosh Tripathi",
			"url": "https://zero8.dev"
		},
		"publisher": {
			"@type": "Person",
			"name": "Ashutosh Tripathi",
			"url": "https://zero8.dev"
		},
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": `https://zero8.dev/blog/${data.meta.slug ?? ''}`
		},
		"image": "https://zero8.dev/og-image.jpg"
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
	</header>

	<div class="post-content">
		<PostContent />
	</div>

	<footer class="post-footer">
		<a href="/blog" class="back-link">← Back to writing</a>
	</footer>
</article>

<style>
	.post-meta {
		font-size: 15px;
		color: var(--muted);
		font-style: italic;
		margin-bottom: 16px;
	}

	.post-title {
		font-size: clamp(28px, 5vw, 52px);
		font-weight: 500;
		line-height: 1.15;
		margin-bottom: 16px;
	}

	.post-description {
		font-size: clamp(17px, 1.8vw, 22px);
		color: var(--muted);
		line-height: 1.65;
		max-width: 60ch;
		margin-bottom: 48px;
		padding-bottom: 40px;
		border-bottom: 1px solid var(--rule);
	}

	.post-content {
		font-size: clamp(18px, 1.8vw, 21px);
		line-height: 1.85;
		color: var(--fg);
	}

	.post-content :global(h2) {
		font-size: clamp(22px, 2.5vw, 30px);
		font-weight: 500;
		margin-top: 56px;
		margin-bottom: 16px;
	}

	.post-content :global(h3) {
		font-size: clamp(18px, 2vw, 24px);
		font-weight: 500;
		margin-top: 40px;
		margin-bottom: 12px;
	}

	.post-content :global(p) {
		margin-bottom: 24px;
	}

	.post-content :global(pre) {
		background: transparent;
		border: 1px solid var(--rule);
		padding: 20px;
		overflow-x: auto;
		margin: 32px 0;
		font-size: 15px;
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
		margin-bottom: 24px;
	}

	.post-content :global(li) {
		margin-bottom: 8px;
	}

	.post-content :global(blockquote) {
		border-left: 2px solid var(--rule);
		padding-left: 20px;
		margin: 32px 0;
		font-style: italic;
		color: var(--muted);
	}

	.post-content :global(hr) {
		border: none;
		border-top: 1px solid var(--rule);
		margin: 48px 0;
	}

	.post-footer {
		margin-top: 64px;
		padding-top: 32px;
		border-top: 1px solid var(--rule);
	}

	.back-link {
		font-size: 17px;
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
