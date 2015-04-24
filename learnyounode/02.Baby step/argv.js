var sum = process.argv.slice(2).reduce(function(prev, curr) {
	return parseInt(prev, 10) + parseInt(curr, 10);
}, 0);
console.log(sum);
