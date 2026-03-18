<script lang="ts">
	const services = [
		'Site from scratch',
		'UI/UX Design',
		'Product Design',
		'Website flow',
		'Mobile Development',
		'Backend Pluggable Team',
		'Frontend Pluggable Team'
	];

	let selected = $state<string[]>([]);

	function toggleService(service: string) {
		if (selected.includes(service)) {
			selected = selected.filter((s) => s !== service);
		} else {
			selected = [...selected, service];
		}
	}
</script>

<section class="contact col-full" id="contact">
	<h2 class="contact-heading">
		With Us, <span class="accent">it happens.</span>
	</h2>
	<p class="subtitle">Tell us what you want to build and we will get back to you.</p>

	<p class="interest-label">I am interested in:</p>
	<div class="services">
		{#each services as service}
			<button
				class="service-pill"
				class:active={selected.includes(service)}
				onclick={() => toggleService(service)}
				type="button"
			>
				{service}
			</button>
		{/each}
	</div>

	<div class="form-wrap">
		<form class="contact-form" method="POST">
			<div class="field">
				<label for="name">Your Name</label>
				<input type="text" id="name" name="name" placeholder="Enter your name" required />
			</div>

			<div class="field">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Enter your email" required />
			</div>

			<div class="field">
				<label for="phone">Phone</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					placeholder="Enter your phone number"
					required
				/>
			</div>

			<div class="field">
				<label for="about">Tell us about your project/requirements</label>
				<textarea id="about" name="about" placeholder="Tell us something about you" required
				></textarea>
			</div>

			<div class="field">
				<label for="file">Attach Files</label>
				<input type="file" id="file" name="file" />
			</div>

			<div class="checkbox-row">
				<input type="checkbox" id="terms" name="terms" required />
				<label for="terms">
					I have read and agree to the <a href="/terms">terms and conditions</a>.
				</label>
			</div>

			<button type="submit" class="submit-btn">Submit</button>
		</form>
	</div>
</section>

<style>
	.contact {
		background: var(--bg);
		border: 1px solid var(--border);
		padding: 24px 16px;
	}

	@media (min-width: 1024px) {
		.contact {
			border: none;
			background: transparent;
			padding: 0;
		}
	}

	.contact-heading {
		font-size: clamp(42px, 7.5vw, 96px);
		line-height: 1;
	}

	.accent {
		color: var(--color-primary);
	}

	.subtitle {
		font-size: clamp(22px, 2.5vw, 36px);
		margin-top: 8px;
	}

	.interest-label {
		margin-top: 16px;
		margin-bottom: 8px;
	}

	@media (min-width: 1024px) {
		.interest-label {
			margin-top: 32px;
			margin-bottom: 16px;
		}
	}

	.services {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	@media (min-width: 1024px) {
		.services {
			gap: 16px;
		}
	}

	.service-pill {
		border: 2px solid var(--color-primary);
		border-radius: 9999px;
		padding: 8px 12px;
		background: transparent;
		color: var(--color-primary);
		font-family: inherit;
		font-size: clamp(14px, 1.5vw, 18px);
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s;
	}

	@media (min-width: 1024px) {
		.service-pill {
			padding: 12px 20px;
		}
	}

	.service-pill.active,
	.service-pill:hover {
		background: var(--color-primary);
		color: var(--color-onyx);
	}

	.form-wrap {
		margin-top: 32px;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	label {
		font-size: 14px;
		color: var(--desc-muted);
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'],
	textarea {
		padding: 8px;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 6px;
		color: var(--text);
		font-family: inherit;
		font-size: 14px;
		outline: none;
		transition: border-color 0.2s;
	}

	input:focus,
	textarea:focus {
		border-color: var(--color-primary);
	}

	textarea {
		min-height: 100px;
		resize: vertical;
	}

	input[type='file'] {
		color: var(--desc-muted);
		font-size: 14px;
	}

	input[type='file']::file-selector-button {
		margin-right: 16px;
		padding: 8px 16px;
		border-radius: 6px;
		border: none;
		background: var(--color-primary);
		color: white;
		font-size: 14px;
		cursor: pointer;
	}

	.checkbox-row {
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}

	.checkbox-row input {
		margin-top: 2px;
		width: 16px;
		height: 16px;
		accent-color: var(--color-primary);
		flex-shrink: 0;
	}

	.checkbox-row label {
		font-size: 14px;
	}

	.checkbox-row a {
		color: var(--color-primary);
	}

	.checkbox-row a:hover {
		text-decoration: underline;
	}

	.submit-btn {
		align-self: flex-end;
		padding: 8px 16px;
		background: var(--color-primary);
		color: var(--color-onyx);
		border: none;
		border-radius: 6px;
		font-family: inherit;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: opacity 0.2s;
	}

	.submit-btn:hover {
		opacity: 0.85;
	}
</style>
