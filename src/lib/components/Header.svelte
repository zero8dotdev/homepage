<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import { navLinks } from '$lib/data/site';
</script>

<header class="site-header">
	<div class="grid-layout inner">
		<a href="/" class="logo" aria-label="zero8.dev home">
			<svg width="36" height="36" viewBox="0 0 522 522" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					class="logo-path"
					pathLength="1"
					d="M142.23 487.098C139.051 482.169 137.835 476.259 138.816 470.502L143.982 440.166C146.407 425.925 131.632 414.824 118.292 420.864C109.972 424.632 100.1 421.767 95.1948 414.16L3.74534 272.349C-1.26415 264.581 -1.24717 254.664 3.78891 246.912L157.097 10.9375C161.524 4.1236 169.179 0 177.403 0H192.419C211.469 0 222.985 20.7082 212.704 36.4753L70.6897 254.256C69.6447 255.859 69.0892 257.723 69.0892 259.626C69.0892 261.518 69.638 263.371 70.6711 264.967L111.111 327.451C121.434 343.401 126.595 351.375 133.2 354.28C139.228 356.932 146.098 357.035 152.205 354.565C158.897 351.859 164.303 344.043 175.115 328.41L327.514 108.069C332.604 100.71 335.149 97.0299 336.197 93.0413C337.163 89.3647 337.216 85.5137 336.352 81.8128C335.414 77.7978 332.971 74.0517 328.085 66.5595L308.468 36.4753C298.186 20.7082 309.702 0 328.752 0H343.768C351.992 0 359.648 4.12361 364.074 10.9375L383.742 41.2108C387.113 46.3991 388.297 52.6737 387.043 58.7054L382.37 81.1913C379.575 94.6417 392.906 105.872 405.997 101.095C413.851 98.2288 422.675 101.137 427.185 108.079L517.382 246.912C522.418 254.664 522.435 264.581 517.426 272.349L364.065 510.166C359.646 517.019 351.968 521.171 343.715 521.171H328.574C309.561 521.171 298.038 500.535 308.245 484.764L450.5 264.967C451.533 263.371 452.082 261.518 452.082 259.626C452.082 257.723 451.526 255.859 450.481 254.256L407.231 187.931C396.706 171.791 391.444 163.722 384.765 160.845C378.67 158.219 371.743 158.189 365.625 160.76C358.919 163.578 353.584 171.601 342.912 187.647L193.104 412.907C188.259 420.193 185.836 423.836 184.854 427.761C183.949 431.38 183.926 435.157 184.785 438.787C185.717 442.724 188.094 446.396 192.847 453.741L212.926 484.764C223.133 500.535 211.61 521.171 192.597 521.171H177.456C169.203 521.171 161.525 517.019 157.106 510.166L142.23 487.098Z"
				/>
			</svg>
		</a>
		<nav class="desktop-nav">
			{#each navLinks as link}
				<a href={link.href}>{link.text}</a>
			{/each}
		</nav>
		<div class="mobile-right">
			<MobileNav />
		</div>
	</div>
</header>

<style>
	.site-header {
		border-bottom: 1px solid var(--rule);
		padding: 20px 0;
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.logo-path {
		fill: var(--fg);
		stroke: var(--fg);
		stroke-width: 18;
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		stroke-linejoin: round;
		transition:
			fill 0.6s ease 0.15s,
			stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.logo:hover .logo-path {
		fill: transparent;
		stroke-dashoffset: 0;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 32px;
		margin-left: auto;
	}

	.desktop-nav a {
		font-size: 18px;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.desktop-nav a:hover {
		color: var(--fg);
	}

	.mobile-right {
		display: none;
	}

	@media (max-width: 639px) {
		.desktop-nav {
			display: none;
		}

		.mobile-right {
			display: flex;
			align-items: center;
			gap: 16px;
			margin-left: auto;
		}
	}
</style>
