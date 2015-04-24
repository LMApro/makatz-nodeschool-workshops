function countWords(arrayOfWords) {
	var obj = {};
	if (!arrayOfWords.length) return;
	arrayOfWords.reduce(function(previous, current){
		if (previous !== undefined) {
			obj[previous] = 1;
			obj[current] = 1;
		} else {
			obj[current] = ++obj[current] || 1;
		}
	});

	return obj;
}

console.log(countWords(['banana', 'apple', 'banana', 'orange', 'banana', 'apple']));

function countWordsSolution(arr) {
   return arr.reduce(function(countMap, word) {
     countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
     return countMap;
   }, {}); // second argument to reduce initialises countMap to {}
 }

 module.exports = countWordsSolution;