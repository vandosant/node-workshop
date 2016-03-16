var http = require('http');

http.createServer(function(req, res) {
	res.writeHead({
		'Content-Type':'text/plain'
	})
	res.end('hello world');
}).listen(3999);
