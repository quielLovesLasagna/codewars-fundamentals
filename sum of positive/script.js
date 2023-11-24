/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/

// Solution:
const positiveSum = (arr) =>
	arr.filter((val) => val > 0).reduce((acc, curVal) => acc + curVal, 0);

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
