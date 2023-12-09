"use strict";

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1]

Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript
*/

// Solution:
function test(n) {
	const test = Array.from(String(n), Number).reverse();
	console.log(test);
}

const digitize = (n) => Array.from(String(n), Number).reverse();

// Test
digitize(12345);
