"use strict";

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

Link: https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
*/

// Solution:

function test1(numbers) {
	const sample = numbers.filter((number) => number % 2 === 0)[0];
	console.log(sample);
}

const test2 = (numbers) => numbers.filter((number) => number % 2 === 0)[0];

function test3(numbers) {
	let differentNumber = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] !== differentNumber) {
			differentNumber = numbers[i];
			return differentNumber;
		}
	}
}

const stray = (numbers) =>
	numbers.find(
		(number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
	);

// Tests
stray([1, 1, 2]);
stray([1, 2, 1]);
stray([2, 1, 1]);
