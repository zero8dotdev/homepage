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
</script>

<svelte:head>
	<title>{data.tag} · Writing · zero8.dev</title>
	<meta name="description" content="Posts tagged '{data.tag}' on zero8.dev." />
	<link rel="canonical" href="{siteConfig.url}/blog/tag/{data.tag}" />
</svelte:head>

<TopNav active="writing" />
<main id="main" class="column">
	<p class="kicker">tag</p>
	<h1>{data.tag}</h1>
	<ul>
		{#each postItems as p}
			<PostListItem date={p.date} title={p.title} read={p.read} href={p.href} />
		{/each}
	</ul>
	<p class="back"><a href="/blog">← all writing</a></p>
</main>
<Footer />

<style>
	.column {
		width: 100%;
		max-width: var(--wide-width);
		margin: 0 auto;
		padding: 64px 32px 80px;
	}
	.kicker {
		font-family: var(--font-mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--fg-faint);
		margin: 0 0 8px;
	}
	h1 {
		font-size: 40px;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: var(--fg);
		margin: 0 0 48px;
	}
	ul { list-style: none; margin: 0; padding: 0; }
	.back { margin-top: 40px; font-family: var(--font-mono); font-size: 13px; max-width: none; }
	.back a { color: var(--fg-muted); }
	.back a:hover { color: var(--peach-500); }
	@media (max-width: 640px) {
		.column { padding: 48px 20px 64px; }
	}
</style>
