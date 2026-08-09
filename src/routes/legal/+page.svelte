<script lang="ts">
	import { TopNav, Footer, Kicker } from '$lib/design/lib';
	import { siteConfig, company } from '$lib/data/site';

	const title = 'legal · zero8.dev';
	const description =
		'zero8.dev is the personal portfolio of Ashutosh Tripathi. All contracts, invoicing, and payments are executed through Zero8 Dot Dev Pvt. Ltd.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{siteConfig.url}/legal" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{siteConfig.url}/legal" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={siteConfig.ogImage.url} />
	<meta property="og:image:width" content="{siteConfig.ogImage.width}" />
	<meta property="og:image:height" content="{siteConfig.ogImage.height}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:image" content={siteConfig.ogImage.url} />
</svelte:head>

<TopNav active="legal" />
<main id="main" class="column">
	<Kicker accent>LEGAL</Kicker>
	<h1>Legal</h1>
	<p class="lede">
		zero8.dev is the personal portfolio and blog of Ashutosh Tripathi. It is not itself a
		contracting entity — all professional engagements, contracts, invoicing, and payments are
		executed through the company below.
	</p>

	<h2>Contracting entity</h2>
	<dl class="facts">
		<div class="fact">
			<dt>Registered name</dt>
			<dd>{company.legalName}</dd>
		</div>
		<div class="fact">
			<dt>CIN</dt>
			<dd>{company.cin}</dd>
		</div>
		<div class="fact">
			<dt>GSTIN</dt>
			<dd>{company.gstin}</dd>
		</div>
		<div class="fact">
			<dt>Registered office</dt>
			<dd>
				{#each company.addressLines as line}
					{line}<br />
				{/each}
			</dd>
		</div>
		<div class="fact">
			<dt>Contact</dt>
			<dd><a href="mailto:{siteConfig.email}">{siteConfig.email}</a></dd>
		</div>
	</dl>

	<p class="note">
		Any agreement, statement of work, or invoice referencing this website is issued by
		{company.legalName}, not by Ashutosh Tripathi in an individual capacity.
	</p>
</main>
<Footer />

<style>
	.column {
		width: 100%;
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 80px 32px 64px;
	}

	h1 {
		font-family: var(--font-sans);
		font-size: clamp(36px, 5vw, 52px);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: var(--lh-tight);
		color: var(--fg);
		margin: var(--s-5) 0 var(--s-5);
	}

	.lede {
		font-size: 17px;
		color: var(--fg-muted);
		line-height: 1.7;
		margin: 0 0 var(--s-8);
	}

	h2 {
		font-family: var(--font-sans);
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--fg);
		margin: var(--s-8) 0 var(--s-5);
	}

	.facts {
		border-top: 1px solid var(--hairline);
		margin: 0;
	}

	.fact {
		display: grid;
		grid-template-columns: 160px 1fr;
		gap: var(--s-4);
		padding: var(--s-4) 0;
		border-bottom: 1px solid var(--hairline);
	}

	.fact dt {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--fg-faint);
		letter-spacing: 0.02em;
	}

	.fact dd {
		margin: 0;
		font-size: 15px;
		color: var(--fg);
		line-height: 1.6;
	}

	.fact dd a {
		color: var(--fg);
	}

	.note {
		font-size: 14px;
		color: var(--fg-faint);
		line-height: 1.7;
		margin: var(--s-8) 0 0;
	}

	@media (max-width: 560px) {
		.column {
			padding: var(--s-7) var(--s-5) var(--s-8);
		}
		h1 {
			font-size: 30px;
		}
		.fact {
			grid-template-columns: 1fr;
			gap: var(--s-2);
		}
	}
</style>
