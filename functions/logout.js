export async function onRequestGet(context) {
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/',
			'Set-Cookie': 'auth_token=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; HttpOnly; Secure',
		},
	});
}
