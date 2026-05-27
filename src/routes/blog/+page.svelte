<script lang="ts">
	import { TopNav, Footer, PostListItem } from '$lib/design/lib';
	import { siteConfig } from '$lib/data/site';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const postItems = data.posts.map((p) => ({
		date: p.date,
		title: p.title,
		read: p.readTime,
		href: `/blog/${p.slug}`
	}));

	const tags = data.tags;
</script>

<svelte:head>
	<title>Writing · zero8.dev</title>
	<meta name="description" content="Writing on developer tools, AI memory, agent systems, and the craft of software engineering." />
	<link rel="canonical" href="{siteConfig.url}/blog" />
	<meta property="og:title" content="Writing · zero8.dev" />
	<meta property="og:description" content="Writing on developer tools, AI memory, agent systems, and the craft of software engineering." />
	<meta property="og:url" content="{siteConfig.url}/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={siteConfig.ogImage.url} />
	<meta name="twitter:title" content="Writing · zero8.dev" />
	<meta name="twitter:description" content="Writing on developer tools, AI memory, agent systems, and the craft of software engineering." />
	<meta name="twitter:image" content={siteConfig.ogImage.url} />
</svelte:head>

<TopNav active="writing" />
<main id="main" class="column">
	<h1>Writing</h1>
	<nav class="tags" aria-label="Filter by topic">
		{#each tags as t}
			<a href="/blog/tag/{t.tag}" class="tag">{t.tag}<span class="count">{t.count}</span></a>
		{/each}
	</nav>
	<ul>
		{#each postItems as p}
			<PostListItem date={p.date} title={p.title} read={p.read} href={p.href} />
		{/each}
	</ul>
</main>
<Footer />

<style>
	.column {
		width: 100%;
		max-width: var(--wide-width);
		margin: 0 auto;
		padding: 64px 32px 80px;
	}
	h1 {
		font-size: 40px;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: var(--fg);
		margin: 0 0 48px;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 40px;
	}
	.tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--fg-muted);
		text-decoration: none;
		padding: 4px 10px;
		border: 1px solid var(--hairline);
		border-radius: 4px;
		transition: color 150ms ease, border-color 150ms ease;
	}
	.tag:hover {
		color: var(--peach-500);
		border-color: var(--peach-500);
	}
	.count {
		font-size: 10px;
		color: var(--fg-faint);
	}
	ul { list-style: none; margin: 0; padding: 0; }
	@media (max-width: 640px) {
		.column { padding: 48px 20px 64px; }
	}
</style>
