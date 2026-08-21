---
id: "sk-decision-011"
category: "patterns"
agent: "claude-code"
author: "ashutosh"
pipeline: segmented
shared_at: "2024-11-01T10:00:00.000Z"
tags: ["sveltekit", "form-actions", "auth", "otp", "phone-auth", "progressive-enhancement"]
---

# Decision: Named form actions for multi-step OTP auth flow

## What was decided (utc-online, apna-nagar-nigam)
Phone OTP auth is implemented entirely via SvelteKit form actions — no separate API route, no client-side fetch, progressive enhancement built in.

## The two-action pattern

```typescript
// login/+page.server.ts
export const actions: Actions = {
  sendOtp: async ({ request, cookies }) => {
    const data = await request.formData();
    const phone = (data.get('phone') as string).trim();
    if (!/^\d{10}$/.test(phone)) {
      return fail(400, { sendError: 'Enter a valid 10-digit phone number.' });
    }
    setOtpCookie(cookies, phone); // store phone in signed cookie
    return { sent: true, phone };
  },

  verifyOtp: async ({ request, cookies, platform }) => {
    const data = await request.formData();
    const code = (data.get('code') as string).trim();
    const phone = getOtpPhone(cookies); // retrieve from cookie
    if (!phone) return fail(400, { verifyError: 'Session expired. Start again.' });
    // verify code → create/find user → set session cookie → redirect
  }
};
```

## Why form actions over API routes for auth

1. **Progressive enhancement**: works without JavaScript. The form submits natively, SvelteKit handles the POST. With `use:enhance`, it becomes a SPA experience — but the fallback works.

2. **CSRF protection built in**: SvelteKit validates the Origin header on form action POSTs. API routes need manual CSRF handling.

3. **Type safety**: `ActionData` is inferred from the return type. The svelte component gets typed `form.sendError` / `form.verifyError`.

4. **No CORS concerns**: form actions are same-origin by definition.

## The OTP state machine in the form
Step 1 → `sendOtp` action → returns `{ sent: true, phone }` → template shows OTP input
Step 2 → `verifyOtp` action → sets session cookie → `redirect(303, redirectTo)`

The phone is stored in a signed httpOnly cookie (not form state) so it survives a page reload between steps.

## Guard at route level, not in hooks
```typescript
// login/+page.server.ts load function
export const load: PageServerLoad = ({ locals, url }) => {
  if (locals.session) throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
  return { redirectTo: safe };
};
```
The redirect guard is in the route's load function, not in hooks.server.ts. hooks runs for every request; route-level guards are scoped.
