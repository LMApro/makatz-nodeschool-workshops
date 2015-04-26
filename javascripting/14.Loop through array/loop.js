var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(pet, index, arr){
	arr[index] = arr[index] + 's';
});
console.log(pets);