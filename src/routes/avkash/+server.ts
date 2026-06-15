import type { RequestHandler } from './$types';
import demo from '$lib/avkash-demo.html?raw';

export const GET: RequestHandler = () => {
	return new Response(demo, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' },
	});
};
