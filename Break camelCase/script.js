"use strict";

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier

Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/

// Solution:
function solution(string) {
	let result = "";

	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			result += " " + string[i];
		} else {
			result += string[i];
		}
	}

	return result;
}
