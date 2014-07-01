function getName(object) {
	return object.name;
}
console.log(getName({ name: 'Luisa', age: 25 }))


function totalLetters(array) {
	return array.join('').length
}
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

// function keyValue(key, value) {
// 	this.key = value
// }

// function Shape(x, y) {
//     this.x= x;
//     this.y= y;
// }

function keyValue(key, value) {
	var object = {}
	object[key] = value
	return object

}