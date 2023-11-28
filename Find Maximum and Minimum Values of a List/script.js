"use strict";

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Link: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
*/

// Solution:
function min(list) {
	let min = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] < min) {
			min = list[i];
		}
	}
	return min;
}

function max(list) {
	let max = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] > max) {
			max = list[i];
		}
	}
	return max;
}

// Tests
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
