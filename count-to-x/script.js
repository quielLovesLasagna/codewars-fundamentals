/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Link: https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
*/

const countBy = (x, n) => {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(x * i);
	}
	return arr;
};
// Tests
console.log(countBy(1, 10));
console.log(countBy(2, 5));
