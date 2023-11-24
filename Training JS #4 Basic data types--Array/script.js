/*
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

Link: https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
*/

// Solution:
function getLength(arr) {
	//return length of arr
	return arr.length;
}
function getFirst(arr) {
	//return the first element of arr
	return arr[0];
}
function getLast(arr) {
	//return the last element of arr
	return arr[arr.length - 1];
}
function pushElement(arr) {
	var el = 1;
	arr.push(el);
	return arr;
}
function popElement(arr) {
	arr.pop();
	return arr;
}
