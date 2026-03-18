<div class="bg-grid" aria-hidden="true">
	<div class="bg-grid-inner">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col col-desktop"></div>
		<div class="col col-desktop"></div>
	</div>
</div>

<style>
	.bg-grid {
		position: fixed;
		inset: 0;
		z-index: -10;
		pointer-events: none;
	}

	.bg-grid-inner {
		height: 100%;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 16px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 16px;
	}

	@media (min-width: 1024px) {
		.bg-grid-inner {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.col {
		border-left: 1px solid var(--border);
		border-right: 1px solid var(--border);
		width: 100%;
	}

	.col-desktop {
		display: none;
	}

	@media (min-width: 1024px) {
		.col-desktop {
			display: block;
		}
	}
</style>
