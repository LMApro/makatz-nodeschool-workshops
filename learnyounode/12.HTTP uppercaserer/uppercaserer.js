var http = require("http");

var server = http.createServer(function(req, res){
	console.log(req.method);
	console.log(req.body);
	res.end();
});
server.listen(Number(process.argv[2]));
