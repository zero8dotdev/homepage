<script lang="ts">
	const faqs = [
		{
			q: 'Who is Ashutosh Tripathi?',
			a: 'Frontend engineer and developer tools specialist with over a decade of experience. React, browser-native video streaming, open source. Fully remote and async.'
		},
		{
			q: 'What does zero8.dev specialize in?',
			a: 'Frontend engineering, React, browser-native video streaming (HLS, adaptive bitrate), and developer tools — CLIs, SDKs, API design, and developer experience.'
		},
		{
			q: 'What is Smriti?',
			a: 'Smriti is an open-source shared memory tool for AI-powered engineering teams. It captures and indexes Claude Code, Cursor, and Codex sessions locally, then shares team knowledge through git — no cloud required.'
		},
		{
			q: 'Available for freelance or contract work?',
			a: 'Yes. Available for contracts and consulting in frontend engineering and developer tools. Reach out at hello@zero8.dev.'
		},
		{
			q: 'What does "software people can reason about" mean?',
			a: 'Transparent software where users can form a mental model of what the system is doing. It shows up in API design, error messages, UI feedback, and documentation — the invisible work that makes software feel trustworthy and learnable.'
		}
	];
</script>

<section class="faq" id="faq">
	<h2 class="section-label">FAQ</h2>
	<dl class="faq-list">
		{#each faqs as { q, a }}
			<div class="faq-item">
				<dt class="faq-q">{q}</dt>
				<dd class="faq-a">{a}</dd>
			</div>
		{/each}
	</dl>
</section>

<style>
	.section-label {
		font-size: clamp(11px, 1vw, 13px);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
		font-weight: 500;
		margin-bottom: 40px;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0;
		max-width: 68ch;
	}

	.faq-item {
		padding: 28px 0;
		border-top: 1px solid var(--rule);
	}

	.faq-item:last-child {
		border-bottom: 1px solid var(--rule);
	}

	.faq-q {
		font-size: clamp(16px, 1.6vw, 19px);
		font-weight: 500;
		color: var(--fg);
		margin-bottom: 10px;
	}

	.faq-a {
		font-size: clamp(15px, 1.4vw, 17px);
		color: var(--muted);
		line-height: 1.7;
	}
</style>
