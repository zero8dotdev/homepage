<script lang="ts">
	const faqs = [
		{
			q: 'Who is Ashutosh Tripathi?',
			a: 'Software engineer, co-founder and CTO of InboxStack. He builds the infrastructure that makes engineers and automated agents work without friction — from shared memory for AI teams to self-improving deliverability pipelines. A decade of product engineering, fully remote.'
		},
		{
			q: 'What does zero8.dev specialize in?',
			a: 'Developer tools, AI memory infrastructure, and agent system design. Building systems where typed contracts between components let both engineers and AI agents reason clearly about what\'s happening at every stage.'
		},
		{
			q: 'What is Smriti?',
			a: 'Smriti is an open-source shared memory system for AI-powered engineering teams. It captures and indexes Claude Code, Cursor, and Codex sessions locally using hybrid search (BM25 + vector embeddings), synthesises context on demand via a local LLM, and syncs team knowledge through git. No cloud, no accounts.'
		},
		{
			q: 'Available for freelance or contract work?',
			a: 'Yes. Available for contracts and consulting in developer tools, AI systems, and API design. Reach out at hello@zero8.dev.'
		},
		{
			q: 'What does "software people can reason about" mean?',
			a: 'Transparent software where anyone — engineer or AI agent — can form a mental model of what the system is doing. It shows up in typed contracts, API design, error messages, and documentation: the work that makes software trustworthy and debuggable.'
		}
	];
</script>

<section class="faq" id="faq" aria-hidden="true">
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
	.faq {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
