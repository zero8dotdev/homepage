<script lang="ts">
	import { navLinks } from '$lib/data/site';

	let open = $state(false);

	function toggle() {
		open = !open;
	}
</script>

<header class="mobile-header">
	<div class="top-bar">
		<a href="/" class="logo-link">
			<img src="/footerlogodesk.png" alt="Zero8 Logo" width="120" height="40" />
		</a>
		<button class="menu-btn" onclick={toggle} aria-label={open ? 'Close menu' : 'Open menu'}>
			{#if open}
				<!-- X icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			{:else}
				<!-- Menu icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<nav class="overlay">
			<ul>
				{#each navLinks as link}
					<li>
						<a href={link.href} onclick={toggle}>
							{link.text}
							<img src="/sidebarIcon.png" alt="" width="24" height="24" aria-hidden="true" />
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	.mobile-header {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	@media (min-width: 1024px) {
		.mobile-header {
			display: none;
		}
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 16px;
		height: 48px;
	}

	.logo-link img {
		display: block;
	}

	.menu-btn {
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--text);
		display: flex;
		align-items: center;
	}

	.overlay {
		position: absolute;
		left: 0;
		right: 0;
		top: 48px;
		height: 100dvh;
		width: 100%;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		z-index: 50;
		padding: 40px 32px;
	}

	.overlay ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.overlay a {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 30px;
		color: var(--color-icon-green);
		text-decoration: none;
	}

	.overlay a:hover {
		opacity: 0.8;
	}
</style>
