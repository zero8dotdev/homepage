<script lang="ts">
	import { TopNav, BlogHeader, BlogBody, Footer } from '$lib/design/lib';
	import { siteConfig } from '$lib/data/site';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const postUrl = `${siteConfig.url}/blog/${data.meta.slug ?? ''}`;
	const postImage = data.meta.image ? `${siteConfig.url}${data.meta.image}` : siteConfig.ogImage.url;
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
</svelte:head>

<TopNav active="writing" />
<main id="main" class="column">
	<BlogHeader
		title={data.meta.title}
		date={data.meta.date}
		read={data.meta.readTime ?? ''}
		tags={data.meta.tags ?? []}
	/>
	<BlogBody>
		{@html data.html}
	</BlogBody>
</main>
<Footer />

<style>
	.column {
		width: 100%;
		max-width: var(--wide-width);
		margin: 0 auto;
		padding: 64px 32px 80px;
	}
	@media (max-width: 640px) {
		.column { padding: 48px 20px 64px; }
	}

	/* ── Table ── */
	:global(.body table) {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		margin: 28px 0;
		font-size: 13px;
		line-height: 1.45;
		overflow-x: auto;
		display: block;
		-webkit-overflow-scrolling: touch;
	}
	:global(.body thead) { border-bottom: 1px solid var(--hairline); }
	:global(.body th) {
		text-align: left;
		font-weight: 500;
		padding: 6px 12px;
		white-space: nowrap;
		font-size: 11px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--fg-muted);
		background: var(--bg);
		font-family: var(--font-mono);
	}
	:global(.body td) { padding: 6px 12px; vertical-align: top; background: var(--bg); }
	:global(.body tbody tr) { border-bottom: 1px solid var(--hairline); }
	:global(.body tbody tr:last-child) { border-bottom: none; }
	:global(.body th:first-child),
	:global(.body td:first-child) {
		position: sticky; left: 0; z-index: 1;
		font-weight: 500; color: var(--fg);
		box-shadow: 1px 0 0 var(--hairline);
	}

	/* ── GitHub cards ── */
	:global(.gh-grid) { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 28px 0; }
	:global(.gh-card) {
		border: 1px solid var(--hairline); border-radius: 8px; padding: 16px;
		display: flex; flex-direction: column; gap: 10px;
		min-width: 0; text-decoration: none; color: inherit; transition: border-color 0.15s;
	}
	:global(.gh-card:hover) { border-color: var(--fg-muted); }
	:global(.gh-card-name) { font-size: 15px; font-weight: 600; color: var(--fg); }
	:global(.gh-card-repo) { font-size: 12px; color: var(--fg-muted); font-family: var(--font-mono); }
	:global(.gh-card-desc) { font-size: 13px; line-height: 1.45; color: var(--fg-muted); margin: 0; }
	:global(.gh-card-stats) {
		display: flex; align-items: center; justify-content: space-between;
		margin-top: auto; padding-top: 6px; border-top: 1px solid var(--hairline);
	}
	:global(.gh-stat) { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--fg); font-weight: 500; }
	:global(.gh-stat svg) { color: var(--fg-muted); flex-shrink: 0; }
	:global(.gh-card-lang) { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--fg-muted); }
	:global(.gh-lang-dot) { width: 8px; height: 8px; border-radius: 50%; display: inline-block; flex-shrink: 0; }

	/* ── X cards ── */
	:global(.xcard-legend) { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 18px; font-size: 12px; color: var(--fg-muted); }
	:global(.xcard-legend-item) { display: flex; align-items: center; gap: 5px; }
	:global(.xcard-dot) { width: 8px; height: 8px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
	:global(.xcard-grid) { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 28px 0; }
	:global(.xcard) {
		border: 1px solid var(--hairline); border-radius: 12px; padding: 16px;
		display: flex; flex-direction: column; gap: 10px;
		transition: border-color 0.15s; min-width: 0; overflow: hidden;
		text-decoration: none; color: inherit;
	}
	:global(.xcard:hover) { border-color: var(--fg-muted); }
	:global(.xcard-head) { display: flex; align-items: center; gap: 6px; min-width: 0; }
	:global(.xcard-name) { font-size: 13px; font-weight: 600; color: var(--fg); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	:global(.xcard-handle) { font-size: 12px; color: var(--fg-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	:global(.xcard-logo) { margin-left: auto; color: var(--fg-muted); flex-shrink: 0; }
	:global(.xcard-text) { font-size: 14px; line-height: 1.5; color: var(--fg); margin: 0; word-break: break-word; }
	:global(.xcard-date) { font-size: 11px; color: var(--fg-muted); margin-top: auto; }

	/* ── Product highlights ── */
	:global(.hl-claude)   { color: #d97706; font-weight: 500; }
	:global(.hl-cursor)   { color: #2563eb; font-weight: 500; }
	:global(.hl-codex)    { color: #059669; font-weight: 500; }
	:global(.hl-gemini)   { color: #7c3aed; font-weight: 500; }
	:global(.hl-windsurf) { color: #0891b2; font-weight: 500; }
	:global(.hl-aider)    { color: #dc2626; font-weight: 500; }

	@media (max-width: 639px) {
		:global(.gh-grid), :global(.xcard-grid) { grid-template-columns: 1fr; }
	}
</style>
