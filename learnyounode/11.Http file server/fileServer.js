var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	var rs = fs.createReadStream(fileLocation, {
		encoding: 'utf8',
		flag: 'r'
	});

	rs.pipe(res);

	
});

server.listen(port);

