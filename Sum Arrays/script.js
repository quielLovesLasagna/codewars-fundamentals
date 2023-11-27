"use strict";

/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Assumptions:
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

Link: https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
*/

// Solution:
function test(numbers) {
	let sum = 0;
	if (numbers.length === 0) {
		return 0;
	} else {
		numbers.forEach((number) => (sum += number));
	}
	return sum;
}

const sum = (numbers) =>
	numbers.length === 0
		? 0
		: numbers.reduce((accumulator, number) => accumulator + number, 0);
