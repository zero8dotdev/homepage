<script lang="ts">
	interface Props {
		name: string;
		repo: string;
		desc: string;
		stars: string;
		issues: string;
		prs: string;
		lang: string;
		langColor?: string;
		href?: string;
	}

	let { name, repo, desc, stars, issues, prs, lang, langColor = '#3178c6', href }: Props = $props();
</script>

<a class="gh-card" href={href ?? `https://github.com/${repo}`} target="_blank" rel="noopener">
	<div class="gh-card-head">
		<span class="gh-card-name">{name}</span>
		<span class="gh-card-repo">{repo}</span>
	</div>
	<p class="gh-card-desc">{desc}</p>
	<div class="gh-card-stats">
		<span class="gh-stat">
			<svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/></svg>
			{stars}
		</span>
		<span class="gh-stat">
			<svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"/></svg>
			{issues}
		</span>
		<span class="gh-stat">
			<svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354z"/></svg>
			{prs}
		</span>
		<span class="gh-card-lang">
			<span class="gh-lang-dot" style="background:{langColor}"></span>
			{lang}
		</span>
	</div>
</a>
