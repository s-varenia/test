const fs = require('fs');

fs.writeFile('test.txt', 'Hello content! ' + Date.now(), function (err) {
	if (err) throw err;
	console.log('Saved!');
});