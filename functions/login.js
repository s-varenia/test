export async function onRequestPost(context) {
	const { request, env } = context;
	const PASSWORD = env.PASSWORD;
	const COOKIE_NAME = 'auth_token';
	const COOKIE_VALUE = env.COOKIE_VALUE;
	const COOKIE_EXPIRATION = 60 * 60 * 24; // 1 день

	const formData = await request.formData();
	const password = formData.get('password');
	const redirectTo = formData.get('redirect') || '/';

	if (password === PASSWORD) {
		return new Response(null, {
			status: 302,
			headers: {
				Location: redirectTo,
				'Set-Cookie': `${COOKIE_NAME}=${COOKIE_VALUE}; Max-Age=${COOKIE_EXPIRATION}; Path=/; HttpOnly; Secure`,
			},
		});
	} else {
		return new Response(null, {
			status: 302,
			headers: {
				Location: `/login?error=invalid&redirect=${encodeURIComponent(redirectTo)}`,
			},
		});
	}
}
