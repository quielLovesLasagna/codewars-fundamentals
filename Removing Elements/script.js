"use strict";

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

const testArr = [1, 2, 3, 4, 5];

const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);
