import type { RequestHandler } from './$types';

const PROXY_PREFIXES = ['74.125.', '66.249.', '66.102.', '209.85.', '108.177.', '142.250.', '17.', '2607:f8b0:', '2404:6800:'];
const isProxy = (ip: string | null) => !ip || PROXY_PREFIXES.some(p => ip.startsWith(p));

// 1x1 transparent GIF
const PIXEL = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

export const GET: RequestHandler = async ({ params, platform, request }) => {
	const { id } = params;
	const kv = platform?.env?.CLICKS;

	if (kv) {
		const record: ContactRecord = (await kv.get(id, 'json')) ?? { id };
		const ip = request.headers.get('CF-Connecting-IP');
		record.opens = [
			...(record.opens ?? []),
			{
				ts: new Date().toISOString(),
				ip,
				country: request.headers.get('CF-IPCountry'),
				ua: request.headers.get('User-Agent'),
				proxy: isProxy(ip)
			}
		];
		await kv.put(id, JSON.stringify(record));
	}

	return new Response(PIXEL, {
		headers: {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate',
			Pragma: 'no-cache'
		}
	});
};

interface TrackEvent {
	ts: string;
	ip: string | null;
	country: string | null;
	ua: string | null;
	proxy: boolean;
}

interface ContactRecord {
	id: string;
	name?: string;
	email?: string;
	sentAt?: string;
	opens?: TrackEvent[];
	clicks?: TrackEvent[];
	ghClicks?: TrackEvent[];
}
