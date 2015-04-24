module.exports = 
function logger(ns) {
	return console.log.bind(this, ns);
}

// var info = logger('INFO:');
// info('hello world', 'superman');