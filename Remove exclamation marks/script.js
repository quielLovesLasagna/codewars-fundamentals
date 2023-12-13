"use strict";

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
*/

// Solution:
function removeExclamationMarks(s) {
	return s.replace("!", "");
}

const removeExclamationMarks = (s) => s.replaceAll("!", "");
