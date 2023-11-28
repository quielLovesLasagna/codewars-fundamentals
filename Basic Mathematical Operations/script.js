"use strict";

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
*/

// Solution:

function basicOp(operation, value1, value2) {
	switch (operation) {
		case "+":
			return +value1 + +value2;
		case "-":
			return +value1 - +value2;
		case "*":
			return +value1 * +value2;
		case "/":
			return +value1 / +value2;
		default:
			return NaN;
	}
}
// Test
console.log(basicOp("+", 6, 2));
