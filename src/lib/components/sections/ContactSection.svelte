<section class="contact" id="contact">
	<h2 class="section-label">Contact</h2>
	<p class="contact-heading">Want to work together?</p>
	<p class="contact-sub">
		Available for contracts and consulting in frontend engineering and developer tools.
	</p>
	<div class="contact-links">
		<a href="mailto:hello@zero8.dev" class="link">hello@zero8.dev</a>
		<span class="sep">·</span>
		<a href="mailto:hello@zero8.dev?subject=Resume%20Request" class="link" aria-label="Request résumé via email">Request résumé →</a>
	</div>
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

	.contact-heading {
		font-size: clamp(28px, 4vw, 48px);
		font-weight: 500;
		line-height: 1.2;
		margin-bottom: 16px;
	}

	.contact-sub {
		font-size: clamp(17px, 1.7vw, 20px);
		color: var(--muted);
		max-width: 52ch;
		margin-bottom: 32px;
	}

	.contact-links {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.link {
		font-size: 18px;
		color: var(--fg);
		text-decoration: underline;
		text-decoration-color: var(--rule);
		text-underline-offset: 4px;
		transition: text-decoration-color 0.15s;
	}

	.link:hover {
		text-decoration-color: var(--fg);
	}

	.sep {
		color: var(--muted);
		font-size: 18px;
		user-select: none;
	}
</style>
