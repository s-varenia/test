export function onRequest(context) {
	const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Docs with Hono</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify/themes/vue.css">
    <link href="/static/style.css" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script>
        window.$docsify = {
            loadSidebar: false,
            subMaxLevel: 2,
            homepage: '/docs/README.md'
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
</body>
</html>`;

	return new Response(html, {
		headers: {
			'content-type': 'text/html;charset=UTF-8',
		},
	});
}
