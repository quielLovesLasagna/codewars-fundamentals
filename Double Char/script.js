"use strict";

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Link: https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
*/

// Solution:
function test(str) {
	let result = "";
	const strArr = str.split("");
	strArr.forEach((str) => {
		result += str + str;
	});
	return result;
}

const doubleChar = (str) =>
	str
		.split("")
		.map((char) => char + char)
		.join("");

// Test
doubleChar("Hi");
