function getName(object) {
	return object.name;
}
console.log(getName({ name: 'Luisa', age: 25 }))


function totalLetters(array) {
	return array.join('').length
}
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))


function keyValue(key, value) {
	var object = {}
	object[key] = value
	return object
}
keyValue('city', 'Denver')


function negativeIndex(array, negNumber) {
	return array[array.length + negNumber]
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))


function removeM(string){
	var noEms = [];
	for(var i=0;i<string.length; i++){
		if(string[i] !== "m"){
			noEms.push(string[i])
		}	
	}
	newString = noEms.join('')
	return newString
}
console.log(removeM('memory'))

function printObject(object) {
	for(var key in object){
		console.log(key + " is " + object[key])
	}
}
printObject({ a: 10, b: 20, c: 30 })

