"use strict";

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
*/

// Solution:
function test(s) {
	let res = [];

	for (let i = 0; i < s.length; i++) {
		const upperChar = s[i].toUpperCase();

		const repeatChar = s[i].toLowerCase().repeat(i);

		const newChar = upperChar + repeatChar;

		res.push(newChar);
	}

	return res.join("-");
}

function accum(s) {
	return s
		.split("")
		.map((char, index) => {
			return char.toUpperCase() + char.toLowerCase().repeat(index);
		})
		.join("-");
}
