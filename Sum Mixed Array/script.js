/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

Link: https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
*/

// Solution:
function sumMix1(x) {
	const allNums = x.map((el) => +el);
	let sum = 0;
	allNums.forEach((num) => (sum += num));
	return +sum;
}

function sumMix2(x) {
	let sum = 0;
	x.map((el) => +el).forEach((num) => (sum += num));
	return +sum;
}

// Tests
console.log(sumMix1([9, 3, "7", "3"]));
console.log(sumMix1(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix1(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix2([9, 3, "7", "3"]));
console.log(sumMix2(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix2(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
