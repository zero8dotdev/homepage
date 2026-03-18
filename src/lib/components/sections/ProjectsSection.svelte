<script lang="ts">
	import { projects } from '$lib/data/site';
</script>

<section class="projects" id="work">
	<h2 class="section-label">Work</h2>
	<ol class="project-list">
		{#each projects as project}
			<li class="project">
				<div class="project-name-row">
					<span class="project-name">{project.name}</span>
					{#if project.href}
						<a href={project.href} target="_blank" rel="noopener noreferrer" class="project-href" aria-label="View {project.name} on GitHub, opens in new window">↗</a>
					{/if}
				</div>
				<p class="project-desc">{project.description}</p>
				<p class="project-role">{project.role}</p>
				<p class="project-stack">{project.stack.join(', ')}</p>
			</li>
		{/each}
	</ol>
</section>

<style>
	.section-label {
		font-size: clamp(11px, 1vw, 13px);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
		font-weight: 500;
		margin-bottom: 32px;
	}

	.project-list {
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	.project {
		padding: 28px 0;
		border-top: 1px solid var(--rule);
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.project:last-child {
		border-bottom: 1px solid var(--rule);
	}

	.project-name-row {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}

	.project-name {
		font-size: clamp(19px, 2vw, 24px);
		font-weight: 500;
		color: var(--fg);
	}

	.project-href {
		font-size: 16px;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.project-href:hover {
		color: var(--fg);
	}

	.project-desc {
		font-size: clamp(17px, 1.7vw, 20px);
		color: var(--muted);
		line-height: 1.6;
		max-width: 60ch;
	}

	.project-role {
		font-size: clamp(14px, 1.3vw, 16px);
		color: var(--muted);
		font-style: italic;
	}

	.project-stack {
		font-size: clamp(13px, 1.2vw, 15px);
		color: var(--muted);
		opacity: 0.6;
		letter-spacing: 0.02em;
	}
</style>
