"use strict";

/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

Link: https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
*/

// SOLUTION:
function between(a, b) {
	if (a > b) return;
	return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
