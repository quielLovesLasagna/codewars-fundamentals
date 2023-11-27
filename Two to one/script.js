"use strict";

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
*/

// Solution:
function test(s1, s2) {
	const uniqueChars = new Set([...s1, ...s2]);
	const result = Array.from(uniqueChars).sort().join("");
}

const longest = (s1, s2) =>
	Array.from(new Set([...s1, ...s2]))
		.sort()
		.join("");

longest("aretheyhere", "yestheyarehere");
