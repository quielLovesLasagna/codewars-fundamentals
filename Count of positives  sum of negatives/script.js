/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

// Solution:
function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];
	let count = 0;
	let negNums = 0;
	input.forEach((num) => {
		if (num > 0) {
			count++;
		} else {
			negNums += num;
		}
	});
	const output = [count, negNums];
	return output;
}

// Test
console.log(
	countPositivesSumNegatives([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
	])
);
