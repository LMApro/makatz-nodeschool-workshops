var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){
	var reqInfo = url.parse(req.url, true);
	var obj = {};
	if (reqInfo.pathname == '/api/parsetime') {
		var date = new Date(reqInfo.query.iso);
		obj.hour = date.getHours();
		obj.minute = date.getMinutes();
		obj.second = date.getSeconds();
	}
	if (reqInfo.pathname == '/api/unixtime') {
		var date = new Date(reqInfo.query.iso);
		obj.unixtime = date.getTime();
	}
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(obj));
});
server.listen(process.argv[2]);