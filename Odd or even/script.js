"use strict";

/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Link: https://www.codewars.com/kata/5949481f86420f59480000e7
*/

// Solution:

function oddOrEven(array) {
	return array.length === 0
		? "even"
		: array.reduce((acc, el) => acc + el) % 2 === 0
		? "even"
		: "odd";
}
