<script lang="ts">
	import { blogPosts } from '$lib/data/site';
</script>

<section class="writing">
	<h2 class="section-label">Writing</h2>
	<div class="writing-intro">
		<p>The last few years have been speed learning mode: building a team, going deep on video streaming, figuring out GTM for developer tools. Lots absorbed, very little published.</p>
		<p>I've been lazy about this blog, even though I've had this space for almost half a decade. What I <em>did</em> do was take notes. Scattered across many places, but well organised.</p>
		<p>The next few months I'm pulling the good things out of the vault and bringing them here. Keep watching this space.</p>
	</div>
	<a href="/blog" class="see-all">Visit the writing page →</a>
</section>

<style>
	.writing-intro {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 40px;
		max-width: 60ch;
	}

	.writing-intro p {
		font-size: clamp(17px, 1.7vw, 20px);
		color: var(--muted);
		line-height: 1.75;
	}

	.writing-intro em {
		font-style: italic;
		color: var(--fg);
	}

	.section-label {
		font-size: clamp(11px, 1vw, 13px);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
		font-weight: 500;
		margin-bottom: 32px;
	}

	.post-list {
		list-style: none;
		display: flex;
		flex-direction: column;
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
		padding: 20px 0;
		text-decoration: none;
		transition: opacity 0.15s;
	}

	.post-link:hover {
		opacity: 0.65;
	}

	.post-title {
		font-size: clamp(18px, 1.8vw, 22px);
		color: var(--fg);
		font-weight: 500;
	}

	.post-meta {
		font-size: 15px;
		color: var(--muted);
		font-style: italic;
	}

	.see-all {
		display: inline-block;
		margin-top: 20px;
		font-size: 17px;
		color: var(--muted);
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-color: var(--rule);
		transition: color 0.15s, text-decoration-color 0.15s;
	}

	.see-all:hover {
		color: var(--fg);
		text-decoration-color: var(--fg);
	}
</style>
