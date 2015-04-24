module.exports = function(goodUsers){
	return function (randomUsers) {
		return randomUsers.every(function(user){
			return goodUsers.some(function(gooduser){
				return user.id === gooduser.id;
			});
		});
	};
}