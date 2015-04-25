var http = require("http");
var bl = require("bl");
var concatStream = require("concat-stream");

http.get(process.argv[2], function(res) {
	res.pipe(bl(function(err, data) {
		if (err) return console.error(err);
		console.log(data.toString().length);
		console.log(data.toString());
	}))
});