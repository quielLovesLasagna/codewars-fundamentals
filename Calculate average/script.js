/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
*/

// Solution:
// const findAverage = (array) => {
// 	if (array.length === 0) {
// 		return 0;
// 	}
// 	return array.reduce((acc, curNum) => acc + curNum, 0) / array.length;
// };

const findAverage = (array) =>
	array.length === 0
		? 0
		: array.reduce((acc, curNum) => acc + curNum, 0) / array.length;

// Test
console.log(findAverage([]));
