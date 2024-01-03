"use strict";

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
*/

// SOLUTION:
function test(name) {
	const words = name.split(" ");
	const initials = words.map((word) => word[0].toUpperCase());
	return initials.join(".");
}

const abbrevName = (name) =>
	name
		.split(" ")
		.map((word) => word[0].toUpperCase())
		.join(".");
