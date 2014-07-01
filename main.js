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
	var newString = noEms.join('')
	return newString
}
console.log(removeM('memory'))

function printObject(object) {
	for(var key in object){
		console.log(key + " is " + object[key])
	}
}
printObject({ a: 10, b: 20, c: 30 })

function vowels(string){
	var vowels = []
	for (var i = 0; i < string.length; i++) {
		if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
			vowels.push(string[i])
		}
	};
	return vowels
}
console.log(vowels('What lets in youth?'))

function twins(array){
	var pairs = true
	for (var i = 0; i < array.length; i+=2) {
		if(array[i] === array[i+1]){pairs = true}
		else{pairs = false; break}
	};
	return pairs
}
console.log(twins(['a', 'a', 'b', 'c', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', 'b']))
console.log(twins(['a', 'a', 'b', undefined]))


function or(bArray){
	var answer = false
	for (var i = 0; i < bArray.length; i++) {
		if(bArray[i]){answer = true}
	};
	return answer
}
console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))



function unique(sArray) {
	var uniques = []
	for (var i = 0; i < sArray.length; i++) {
		if($.inArray(sArray[i], uniques) === -1 ) {uniques.push(sArray[i])}
	};
	return uniques
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))