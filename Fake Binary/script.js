"use strict";

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

Link: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
*/

// Solution:
function test(x) {
	const strArr = x.split("");
	let result = "";
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] < 5) {
			result += "0";
		} else {
			result += "1";
		}
	}
	return result;
}

const fakeBin = (x) =>
	x
		.split("")
		.map((char) => (char < 5 ? "0" : "1"))
		.join("");

// Test
fakeBin("45385593107843568");
