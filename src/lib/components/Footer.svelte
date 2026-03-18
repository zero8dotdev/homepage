<footer>
	<div class="grid-layout footer-inner">
		<span class="wordmark">zero8.dev</span>
		<nav class="footer-nav">
			<a href="/blog">Writing</a>
			<a href="/#work">Work</a>
			<a href="mailto:hello@zero8.dev">Email</a>
			<a href="https://github.com/zero8dotdev" target="_blank" rel="noopener">GitHub</a>
			<a href="https://twitter.com/zero8dotdev" target="_blank" rel="noopener">Twitter</a>
		</nav>
		<span class="copy">© 2025 Zero8 Dot Dev Pvt Ltd</span>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--rule);
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

	.wordmark {
		font-family: 'Lora', serif;
		font-size: 18px;
		font-weight: 500;
		color: var(--fg);
	}

	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.footer-nav a {
		font-size: 16px;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.footer-nav a:hover {
		color: var(--fg);
	}

	.copy {
		font-size: 14px;
		color: var(--muted);
		opacity: 0.6;
	}
</style>
