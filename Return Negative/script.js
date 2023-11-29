"use strict";

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Link: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
*/

// Solution:

function makeNegative(num) {
	if (num === 0) {
		return 0;
	} else if (num < 0) {
		return num;
	} else {
		return -num;
	}
}
// Test
console.log(makeNegative(-2));
