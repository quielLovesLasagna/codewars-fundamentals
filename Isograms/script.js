"use strict";

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
*/

// Solution:
function isIsogram(str) {
	const lowCaseStr = str.toLowerCase();
	const uniqueLetters = new Set();
	for (let char of lowCaseStr) {
		if (uniqueLetters.has(char)) {
			return false;
		}
		uniqueLetters.add(char);
	}
	return true;
}
