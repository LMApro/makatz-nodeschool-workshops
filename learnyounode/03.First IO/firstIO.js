var fs = require("fs");
var file = process.argv[2];
var content = fs.readFileSync(file, 'utf8');
var lines = content.split('\n');
console.log(lines.length - 1);