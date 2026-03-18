<section class="quote-section col-full">
	<div class="quote-box">
		<p>&ldquo;Frontend is where performance,</p>
		<p>user experience, and engineering</p>
		<p>discipline collide.&rdquo;</p>
		<p class="attribution">&mdash; Addy Osmani (paraphrased)</p>
	</div>
</section>

<style>
	.quote-section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.quote-box {
		position: relative;
		grid-column: 1 / 4;
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
		font-size: clamp(42px, 7.5vw, 96px);
		line-height: 1.05;
		padding: 8px 16px;
		margin-top: 24px;
	}

	/* <div> tag before */
	.quote-box::before {
		content: '<div>';
		position: absolute;
		top: -1.5rem;
		left: -1px;
		font-size: 14px;
		background: var(--color-primary);
		color: var(--color-charcoal);
		padding: 0 8px;
		line-height: 1.5;
	}

	/* </div> tag after */
	.quote-box::after {
		content: '</div>';
		position: absolute;
		bottom: -1.5rem;
		left: -1px;
		font-size: 14px;
		background: var(--color-primary);
		color: var(--color-charcoal);
		padding: 0 8px;
		line-height: 1.5;
	}

	.attribution {
		font-size: clamp(18px, 2vw, 24px);
		margin-top: 16px;
	}
</style>
