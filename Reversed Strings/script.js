/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
*/

// Solution:
function solution1(str) {
	return str.split("").reverse().join("");
}

const solution2 = (str) => str.split("").reverse().join("");

console.log(solution1("world"));
console.log(solution1("hello"));
console.log(solution2("world"));
console.log(solution2("hello"));
