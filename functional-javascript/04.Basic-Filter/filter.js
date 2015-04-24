module.exports = function(array){
	if (!array.length) return;
	return array.filter(function(item){
		return item.message.length < 50
	}).map(function(item){
		return item.message;
	});
}