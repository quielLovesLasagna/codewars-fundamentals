"use strict";

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/

// Solution:
function test(A) {
	const count = {};

	for (const num of A) {
		count[num] = (count[num] || 0) + 1;
	}

	for (const num in count) {
		if (count[num] % 2 !== 0) {
			return parseInt(num);
		}
	}
}

function findOdd(A) {
	const count = {};
	A.forEach((num) => (count[num] = (count[num] || 0) + 1));
	return parseInt(Object.keys(count).find((num) => count[num] % 2 !== 0));
}
