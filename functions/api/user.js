export function onRequest(context) {
	return new Response(
		JSON.stringify({
			name: 'Пользователь',
			id: 123,
		}),
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
}
