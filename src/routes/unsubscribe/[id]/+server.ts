import type { RequestHandler } from './$types';

const PAGE = (email: string) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Unsubscribed — zero8.dev</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6;
           color: #1a1a1a; max-width: 480px; margin: 80px auto; padding: 0 24px; }
    h1   { font-size: 18px; margin-bottom: 8px; }
    p    { color: #555; }
  </style>
</head>
<body>
  <h1>You're unsubscribed.</h1>
  <p>${email ? `<b>${email}</b> has been` : 'You have been'} removed from future Avkash emails.</p>
  <p>If this was a mistake, reply to the original email and I'll add you back.</p>
</body>
</html>`;

export const GET: RequestHandler = async ({ params, platform }) => {
	const { id } = params;
	const kv = platform?.env?.CLICKS;

	if (kv) {
		const record: Record<string, unknown> = (await kv.get(id, 'json')) ?? { id };
		record.unsubscribed = true;
		record.unsubscribedAt = new Date().toISOString();
		await kv.put(id, JSON.stringify(record));
	}

	const email = kv ? ((await kv.get(id, 'json')) as Record<string, string> | null)?.email ?? '' : '';

	return new Response(PAGE(email), {
		headers: { 'Content-Type': 'text/html; charset=utf-8' }
	});
};
