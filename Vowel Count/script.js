"use strict";

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

// Solution:
function getCount(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	let count = 0;
	const strArray = str.split("");
	for (let i = 0; i < strArray.length; i++) {
		if (vowels.includes(strArray[i])) {
			count++;
		}
	}
	return count;
}
