var trumpet = require("trumpet");
var through = require("through2");

var tr = trumpet();

var stream = tr.select('.loud').createStream();

stream.pipe(through(function(line, _, next){
	this.push(line.toString().toUpperCase());
	next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);