export async function onRequest(context) {
	const { request, env, next } = context;
	const COOKIE_NAME = 'auth_token';
	const COOKIE_VALUE = env.COOKIE_VALUE;
	const LOGIN_PATH = '/login';

	const cookie = request.headers.get('Cookie') || '';

	// Если пользователь авторизован, пропускаем запрос дальше
	if (cookie.includes(`${COOKIE_NAME}=${COOKIE_VALUE}`)) {
		return next();
	}

	// Если пользователь не авторизован, перенаправляем на страницу входа
	return new Response(null, {
		status: 302,
		headers: {
			Location: `${LOGIN_PATH}?redirect=${encodeURIComponent(request.url)}`,
		},
	});
}
