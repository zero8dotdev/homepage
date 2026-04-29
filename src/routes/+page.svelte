<script lang="ts">
	import { HomePage, AboutBlock, ProjectList, WritingList } from '$lib/design/lib';
	import { projects, about, siteConfig } from '$lib/data/site';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const projectItems = projects.map((p) => ({
		status: 'live' as const,
		name: p.name,
		tags: p.stack.join(' · '),
		desc: p.description
	}));

	const postItems = data.posts.map((p) => ({
		date: p.date,
		title: p.title,
		read: p.readTime,
		href: `/blog/${p.slug}`
	}));
</script>

<svelte:head>
	<title>zero8.dev · I build software people can reason about.</title>
	<meta name="description" content="I build software people can reason about. Developer tools, AI memory infrastructure, and self-improving agent systems." />
	<link rel="canonical" href={siteConfig.url} />
	<meta property="og:title" content="zero8.dev · I build software people can reason about." />
	<meta property="og:description" content="Software engineer building developer tools and AI-native systems. A decade of product engineering." />
	<meta property="og:url" content={siteConfig.url} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={siteConfig.ogImage.url} />
	<meta property="og:image:width" content="{siteConfig.ogImage.width}" />
	<meta property="og:image:height" content="{siteConfig.ogImage.height}" />
	<meta name="twitter:title" content="zero8.dev · I build software people can reason about." />
	<meta name="twitter:description" content="Software engineer building developer tools and AI-native systems. A decade of product engineering." />
	<meta name="twitter:image" content={siteConfig.ogImage.url} />
</svelte:head>

<HomePage active="writing">
	<AboutBlock>
		{#each about.paragraphs as para}
			<p>{para}</p>
		{/each}
	</AboutBlock>
	<ProjectList projects={projectItems} />
	<WritingList posts={postItems} />

	<section class="contact" id="contact">
		<p class="contact-kicker">contact</p>
		<h2 class="contact-heading">Want to work together?</h2>
		<p class="contact-sub">Available for contracts and consulting in developer tools, AI systems, and API design.</p>
		<div class="contact-links">
			<a href="mailto:hello@zero8.dev">hello@zero8.dev</a>
			<span class="sep">·</span>
			<a href="mailto:hello@zero8.dev?subject=Resume%20Request">Request résumé →</a>
		</div>
	</section>
</HomePage>

<style>
	.contact {
		margin-bottom: 72px;
		padding-top: 56px;
		border-top: 1px solid var(--hairline);
	}
	.contact-kicker {
		font-family: var(--font-mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--fg-faint);
		margin: 0 0 16px;
	}
	.contact-heading {
		font-family: var(--font-sans);
		font-size: clamp(28px, 4vw, 44px);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: var(--fg);
		margin: 0 0 16px;
	}
	.contact-sub {
		font-size: 16px;
		color: var(--fg-muted);
		line-height: 1.65;
		margin: 0 0 28px;
	}
	.contact-links {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-wrap: wrap;
		font-size: 15px;
	}
	.contact-links a {
		color: var(--fg);
		text-decoration: underline;
		text-decoration-color: var(--hairline);
		text-underline-offset: 3px;
		transition: color 150ms ease, text-decoration-color 150ms ease;
	}
	.contact-links a:hover {
		color: var(--peach-500);
		text-decoration-color: var(--peach-500);
	}
	.sep { color: var(--fg-faint); user-select: none; }
</style>
