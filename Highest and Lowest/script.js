"use strict";

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
*/

// Solution:

function highAndLow(numbers) {
	const numsArr = numbers.split(" ").map(Number);
	const min = Math.min(...numsArr).toString();
	const max = Math.max(...numsArr).toString();
	return max + " " + min;
}

// Test
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
