/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
*/

// Solution/s:
function test1(number) {
	if (+number === 0) {
		return "Even";
	} else if (+number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

function test2(number) {
	if (+number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

function test3(number) {
	return +number % 2 === 0 ? "Even" : "odd";
}

const evenOrOdd = (number) => (+number % 2 === 0 ? "Even" : "Odd");

// From a 9 liner solution to 1 XD
