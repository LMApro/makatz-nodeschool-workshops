var uniq = require("uniq");
var str = prompt("Enter a string: ");

var array = str.split(",");
uniq(array);
console.log(array);