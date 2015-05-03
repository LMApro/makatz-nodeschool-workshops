var q = require("q");

function throwMyGod() {
	throw new Error('OH NOES');
}

function iterate() {
	console.log(arguments[0]);
	return parseInt(arguments[0]) + 1;
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
