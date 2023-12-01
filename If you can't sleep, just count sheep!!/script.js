"use strict";

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

Link: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
*/

// Solution:
function test(num) {
	let result = "";
	for (let i = 1; i <= num; i++) {
		let test = `${i} sheep...`;
		result += test;
	}
	return result;
}

function countSheep(num) {
	let result = "";
	for (let i = 1; i <= num; i++) {
		result += `${i} sheep...`;
	}
	return result;
}

// Test
console.log(countSheep(3));
