var http = require('http');
var logger = require('./logger');

http.createServer(function(req, res) {
	res.writeHead({
		'Content-Type':'text/plain'
	})
	res.end(logger.info('hello world'));
}).listen(3999);
