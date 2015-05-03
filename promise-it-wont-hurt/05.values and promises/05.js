var q = require("q");
var d = q.defer();

function attachTitle() {
	return 'DR. ' + arguments[0];
}

d.promise
	.then(attachTitle)
	.then(console.log);

d.resolve('MANHATTAN');