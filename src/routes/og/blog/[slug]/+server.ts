import type { RequestHandler } from '@sveltejs/kit';
import { getAllPosts } from '$lib/data/posts';

function wrapTitle(title: string, maxChars = 28): string[] {
	const words = title.split(' ');
	const lines: string[] = [];
	let current = '';
	for (const word of words) {
		if ((current + ' ' + word).trim().length > maxChars && current) {
			lines.push(current.trim());
			current = word;
		} else {
			current = current ? current + ' ' + word : word;
		}
	}
	if (current) lines.push(current.trim());
	return lines.slice(0, 3);
}

function logoMark(fill: string): string {
	return `<path fill="${fill}" d="M142.23 487.098C139.051 482.169 137.835 476.259 138.816 470.502L143.982 440.166C146.407 425.925 131.632 414.824 118.292 420.864C109.972 424.632 100.1 421.767 95.1948 414.16L3.74534 272.349C-1.26415 264.581 -1.24717 254.664 3.78891 246.912L157.097 10.9375C161.524 4.1236 169.179 0 177.403 0H192.419C211.469 0 222.985 20.7082 212.704 36.4753L70.6897 254.256C69.6447 255.859 69.0892 257.723 69.0892 259.626C69.0892 261.518 69.638 263.371 70.6711 264.967L111.111 327.451C121.434 343.401 126.595 351.375 133.2 354.28C139.228 356.932 146.098 357.035 152.205 354.565C158.897 351.859 164.303 344.043 175.115 328.41L327.514 108.069C332.604 100.71 335.149 97.0299 336.197 93.0413C337.163 89.3647 337.216 85.5137 336.352 81.8128C335.414 77.7978 332.971 74.0517 328.085 66.5595L308.468 36.4753C298.186 20.7082 309.702 0 328.752 0H343.768C351.992 0 359.648 4.12361 364.074 10.9375L383.742 41.2108C387.113 46.3991 388.297 52.6737 387.043 58.7054L382.37 81.1913C379.575 94.6417 392.906 105.872 405.997 101.095C413.851 98.2288 422.675 101.137 427.185 108.079L517.382 246.912C522.418 254.664 522.435 264.581 517.426 272.349L364.065 510.166C359.646 517.019 351.968 521.171 343.715 521.171H328.574C309.561 521.171 298.038 500.535 308.245 484.764L450.5 264.967C451.533 263.371 452.082 261.518 452.082 259.626C452.082 257.723 451.526 255.859 450.481 254.256L407.231 187.931C396.706 171.791 391.444 163.722 384.765 160.845C378.67 158.219 371.743 158.189 365.625 160.76C358.919 163.578 353.584 171.601 342.912 187.647L193.104 412.907C188.259 420.193 185.836 423.836 184.854 427.761C183.949 431.38 183.926 435.157 184.785 438.787C185.717 442.724 188.094 446.396 192.847 453.741L212.926 484.764C223.133 500.535 211.61 521.171 192.597 521.171H177.456C169.203 521.171 161.525 517.019 157.106 510.166L142.23 487.098Z"/>`;
}

export const GET: RequestHandler = ({ params, url }) => {
	const posts = getAllPosts();
	const post = posts.find((p) => p.slug === params.slug);

	const theme = url.searchParams.get('theme') ?? 'dark';
	const isDark = theme !== 'light';

	const bg = isDark ? '#121212' : '#F5F2ED';
	const surface = isDark ? '#212121' : '#FFFFFF';
	const fg = isDark ? '#FFFFFF' : '#121212';
	const accent = isDark ? '#FF8C73' : '#D9745E';
	const muted = isDark ? '#FFB8A8' : '#2E2E2E';
	const faint = isDark ? 'rgba(255,184,168,0.35)' : 'rgba(18,18,18,0.3)';
	const dotFill = isDark ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.045)';
	const markFill = isDark ? '#FF8C73' : '#121212';

	const title = post?.title ?? 'zero8.dev';
	const tags = post?.tags?.slice(0, 4).join(' · ') ?? '';
	const lines = wrapTitle(title);
	const fontSize = lines.some((l) => l.length > 22) ? 68 : 80;
	const lineH = fontSize * 1.15;
	const headlineY = 280;

	const mono = "'Geist Mono', 'JetBrains Mono', 'Courier New', monospace";
	const sans = "'Onest', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

	const titleLines = lines
		.map(
			(line, i) =>
				`<text x="96" y="${headlineY + i * lineH}"
          font-family="${sans}" font-weight="700"
          font-size="${fontSize}" letter-spacing="-0.03em" fill="${fg}">${line}</text>`
		)
		.join('\n');

	const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.2" fill="${dotFill}"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="${bg}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <g transform="translate(96, 64) scale(0.078)">
    <rect width="522" height="522" rx="96" fill="${surface}"/>
    <g transform="translate(62, 62) scale(0.7624)">
      ${logoMark(markFill)}
    </g>
  </g>

  <text x="96" y="176"
    font-family="${mono}" font-size="18" letter-spacing="0.08em"
    fill="${accent}">&#x25B2; ZERO8.DEV · WRITING</text>

  ${titleLines}

  ${tags ? `<text x="96" y="530" font-family="${mono}" font-size="18" fill="${muted}">${tags}</text>` : ''}

  <text x="1104" y="582"
    font-family="${mono}" font-size="18" fill="${faint}" text-anchor="end">zero8.dev</text>
</svg>`;

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=86400'
		}
	});
};
