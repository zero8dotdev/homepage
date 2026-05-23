<script lang="ts">
	import { TopNav, Footer, Kicker } from '$lib/design/lib';
	import { projects, siteConfig } from '$lib/data/site';

	const current = projects.filter((p) => p.featured);
	const past = projects.filter((p) => !p.featured);
</script>

<svelte:head>
	<title>work · zero8.dev</title>
	<meta name="description" content="Selected projects by Ashutosh Tripathi — active work and past projects in developer tools, AI infrastructure, and product engineering." />
	<link rel="canonical" href="{siteConfig.url}/work" />
	<meta property="og:title" content="work · zero8.dev" />
	<meta property="og:description" content="Selected projects by Ashutosh Tripathi — active work and past projects in developer tools, AI infrastructure, and product engineering." />
	<meta property="og:url" content="{siteConfig.url}/work" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={siteConfig.ogImage.url} />
	<meta property="og:image:width" content="{siteConfig.ogImage.width}" />
	<meta property="og:image:height" content="{siteConfig.ogImage.height}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="work · zero8.dev" />
	<meta name="twitter:image" content={siteConfig.ogImage.url} />
</svelte:head>

<TopNav active="work" />
<main id="main" class="column">
	<Kicker accent>ASHUTOSH TRIPATHI · SELECTED WORK</Kicker>
	<h1>work</h1>
	<p class="lede">Active projects and past work. Some are still growing, some shipped and moved on.</p>

	<div class="projects">
		{#each current as project}
			<article class="project">
				<div class="meta">
					<span class="status-pill live">● live</span>
					<span class="role">{project.role}</span>
				</div>
				<h2 class="name">{project.name}</h2>
				<p class="desc">{project.description}</p>
				<div class="footer-row">
					<span class="stack">{project.stack.join(' · ')}</span>
					{#if project.href}
						<a href={project.href} class="link" target="_blank" rel="noopener noreferrer">GitHub →</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	<h2 class="section-label">Past work</h2>

	<div class="projects">
		{#each past as project}
			<article class="project">
				<div class="meta">
					{#if project.status === 'sunset'}
						<span class="status-pill sunset">○ sunset</span>
					{:else}
						<span class="status-pill delivered">○ delivered</span>
					{/if}
					<span class="role">{project.role}</span>
				</div>
				<h2 class="name">{project.name}</h2>
				<p class="desc">{project.description}</p>
				<div class="footer-row">
					<span class="stack">{project.stack.join(' · ')}</span>
					{#if project.href}
						<a href={project.href} class="link" target="_blank" rel="noopener noreferrer">GitHub →</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</main>
<Footer />

<style>
	.column {
		width: 100%;
		max-width: var(--wide-width);
		margin: 0 auto;
		padding: 80px 32px 64px;
	}

	h1 {
		font-family: var(--font-sans);
		font-size: clamp(40px, 6vw, 64px);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: var(--lh-tight);
		color: var(--fg);
		margin: var(--s-5) 0 var(--s-5);
		text-wrap: balance;
	}

	.lede {
		font-size: 19px;
		color: var(--fg-muted);
		line-height: var(--lh-base);
		margin: 0 0 var(--s-8);
	}

	.section-label {
		font-family: var(--font-sans);
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--fg);
		margin: var(--s-9) 0 var(--s-5);
	}

	.projects {
		display: flex;
		flex-direction: column;
	}

	.project {
		padding: var(--s-7) 0;
		border-top: 1px solid var(--hairline);
	}

	.project:last-child {
		border-bottom: 1px solid var(--hairline);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: var(--s-4);
		margin-bottom: var(--s-3);
		flex-wrap: wrap;
	}

	.status-pill {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.05em;
	}

	.status-pill.live { color: var(--peach-500); }
	.status-pill.sunset { color: var(--fg-faint); }
	.status-pill.delivered { color: var(--fg-faint); }

	.role {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--fg-faint);
	}

	.name {
		font-family: var(--font-sans);
		font-size: 28px;
		font-weight: 700;
		letter-spacing: -0.025em;
		color: var(--fg);
		margin: 0 0 var(--s-4);
		line-height: var(--lh-tight);
	}

	.desc {
		font-size: 16px;
		color: var(--fg-muted);
		line-height: var(--lh-base);
		margin: 0 0 var(--s-5);
	}

	.footer-row {
		display: flex;
		align-items: baseline;
		gap: var(--s-5);
		flex-wrap: wrap;
	}

	.stack {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--fg-faint);
		letter-spacing: -0.01em;
	}

	.link {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--fg-muted);
		text-decoration: none;
		transition: color var(--dur-fast) ease;
	}

	.link:hover {
		color: var(--peach-500);
	}

	@media (max-width: 640px) {
		.column { padding: var(--s-7) var(--s-5) var(--s-8); }
		h1 { font-size: 32px; }
		.name { font-size: 22px; }
	}
</style>
