var through2 = require("through2");

var split = require("split");
var currentLine = -1;
process.stdin
	.pipe(split())
	.pipe(through2(function(line, _, next){
		currentLine++;
		var line = line.toString();
		this.push( ((currentLine % 2 == 0) ? line.toLowerCase() : line.toUpperCase()) + '\n');
		
		next();
	}))
	.pipe(process.stdout);
