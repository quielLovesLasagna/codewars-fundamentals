"use strict";

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

Link: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
*/

// SOLUTION:
function test(h, m, s) {
	const totalSeconds = h * 3600 + m * 60 + s;
	const milliseconds = totalSeconds * 1000;
	return milliseconds;
}

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;
