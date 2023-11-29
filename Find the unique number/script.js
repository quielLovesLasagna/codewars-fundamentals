"use strict";

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
*/

// Solution:
function test(arr) {
	arr.sort();

	if (arr[0] !== arr[1]) {
		return arr[0];
	} else {
		return arr[arr.length - 1];
	}
}

function findUniq(arr) {
	arr.sort();
	return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}
