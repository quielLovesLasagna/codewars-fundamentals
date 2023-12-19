"use strict";

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
*/

// Solution:
function sampleSolution(n) {
	const digits = Array.from(String(n), Number);
	const sortedDigits = digits.sort((a, b) => b - a);
	const result = parseInt(sortedDigits.join(""), 10);
	return +result;
}

const descendingOrder = (n) =>
	parseInt(
		String(n)
			.split("")
			.sort((a, b) => b - a)
			.join(""),
		10
	);
