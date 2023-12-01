"use strict";

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Link: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
*/

// Solution:
function test(string) {
	let count = {};
	for (const char of string) {
		if (count[char]) {
			count[char]++;
		} else {
			count[char] = 1;
		}
	}
	return count;
}

function count(string) {
	return [...string].reduce((count, char) => {
		count[char] = (count[char] || 0) + 1;
		return count;
	}, {});
}
