import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Canonical origin: 301 http → https and www → apex, so crawlers see a
	// single origin instead of four 200-serving variants of every page.
	// Scoped to zero8.dev hosts so local dev (http://localhost) is untouched.
	const host = event.url.hostname;
	const onProdHost = host === 'zero8.dev' || host.endsWith('.zero8.dev');
	if (onProdHost && (event.url.protocol === 'http:' || host === 'www.zero8.dev')) {
		const target = new URL(event.url);
		target.protocol = 'https:';
		if (target.hostname === 'www.zero8.dev') target.hostname = 'zero8.dev';
		return new Response(null, {
			status: 301,
			headers: { Location: target.toString() }
		});
	}

	const path = event.url.pathname;
	if (path !== path.replace(/\*+$/, '')) {
		return new Response(null, {
			status: 301,
			headers: { Location: path.replace(/\*+$/, '') }
		});
	}

	const response = await resolve(event);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	return response;
};
