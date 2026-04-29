<script>
	import Wordmark from '$lib/design/lib/Wordmark.svelte';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-inner">
		<Wordmark size={24} />
		<nav class="footer-nav">
			<a href="/blog">Writing</a>
			<a href="/#work">Work</a>
			<a href="mailto:hello@zero8.dev">Email</a>
			<a href="https://github.com/ashu17706" target="_blank" rel="noopener">GitHub</a>
			<a href="https://x.com/zero8dotdev" target="_blank" rel="noopener">X</a>
			<a href="https://www.linkedin.com/in/itszero8/" target="_blank" rel="noopener">LinkedIn</a>
		</nav>
		<span class="copy">© {year} Zero8 Dot Dev Pvt Ltd</span>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--hairline);
		padding: 32px 0;
		margin-top: 40px;
	}

	.footer-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.footer-nav a {
		font-size: var(--t-base);
		color: var(--fg-muted);
		text-decoration: none;
		transition: color var(--dur-fast) var(--ease);
	}

	.footer-nav a:hover {
		color: var(--fg);
		text-decoration: none;
	}

	.copy {
		font-size: var(--t-sm);
		color: var(--fg-faint);
	}
</style>
