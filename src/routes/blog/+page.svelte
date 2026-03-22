<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Writing · zero8.dev</title>
	<meta name="description" content="Writing on frontend engineering, developer tools, open source, and AI memory." />
	<link rel="canonical" href="https://zero8.dev/blog" />
	<meta property="og:title" content="Writing · zero8.dev" />
	<meta property="og:description" content="Writing on frontend engineering, developer tools, open source, and AI memory." />
	<meta property="og:url" content="https://zero8.dev/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://zero8.dev/og-image.jpg" />
	<meta name="twitter:title" content="Writing · zero8.dev" />
	<meta name="twitter:description" content="Writing on frontend engineering, developer tools, open source, and AI memory." />
	<meta name="twitter:image" content="https://zero8.dev/og-image.jpg" />
</svelte:head>

<section class="blog-index col-full">
	<h1 class="page-title">Writing</h1>

	<div class="intro">
		<p>The last few years have been speed learning mode: building a team, going deep on video streaming, figuring out GTM for developer tools. Lots absorbed, very little published.</p>
		<p>I've been lazy about this blog, even though I've had this space for almost half a decade. What I <em>did</em> do was take notes. Scattered across many places, but well organised.</p>
		<p>The next few months I'm pulling the good things out of the vault and bringing them here. Keep watching this space.</p>
	</div>

	{#if data.posts.length > 0}
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
		margin-bottom: 48px;
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
