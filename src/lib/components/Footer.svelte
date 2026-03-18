<footer>
	<div class="col">
		<a href="#contact" class="label">Contact Us</a>
		<a href="mailto:hello@zero8.dev">hello@zero8.dev</a>
		<a href="tel:+910000000000">+91 00000 00000</a>
	</div>

	<div class="col center">
		<span class="label">Social</span>
		<a href="https://github.com/zero8dotdev" target="_blank" rel="noopener">Github</a>
		<a href="https://twitter.com/zero8dotdev" target="_blank" rel="noopener">Twitter</a>
		<a href="https://instagram.com/zero8dotdev" target="_blank" rel="noopener">Instagram</a>
		<a href="https://youtube.com/@zero8dotdev" target="_blank" rel="noopener">Youtube</a>
	</div>

	<div class="col end">
		<span class="label">More Zero8</span>
		<a href="/blog">Blog</a>
		<a href="/careers">Careers</a>
	</div>

	<div class="copyright">© Zero8 2025</div>

	<div class="logo-wrap">
		<img src="/footerlogodesk.png" alt="Zero8" width="150" height="50" />
	</div>
</footer>

<style>
	footer {
		grid-column: 1 / -1;
		background: var(--bg);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		padding: 24px 16px;
		display: grid;
		grid-template-rows: auto 20px auto;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px 16px;
		margin-top: 80px;
		font-size: clamp(14px, 1.5vw, 18px);
		color: var(--desc-muted);
	}

	@media (min-width: 768px) {
		footer {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.col.center {
		align-items: center;
	}

	.col.end {
		align-items: flex-end;
	}

	.label {
		color: var(--color-primary);
	}

	footer a {
		text-decoration: none;
		color: inherit;
	}

	footer a:hover {
		color: var(--color-primary);
	}

	span.label {
		display: block;
	}

	.copyright {
		grid-row: 2;
		grid-column: 1;
		display: flex;
		align-items: center;
	}

	@media (min-width: 768px) {
		.copyright {
			text-align: left;
		}
	}

	.logo-wrap {
		grid-row: 3;
		grid-column: 1 / 4;
		display: flex;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.logo-wrap {
			grid-row: 2;
			grid-column: 3 / 7;
			grid-row-end: 4;
			justify-content: center;
			align-items: center;
		}
	}
</style>
