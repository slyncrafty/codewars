/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Title

Description:
Description:

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.
Examples

string1 = "hello"
string2 = "aaahello"
=> 'a'

string1 = "abcde"
string2 = "2db2a2ec"
=> '2'

string1 = "aabbcc"
string2 = "aacccbbcc"
=> 'c'

*/

// Solution
function addedChar(s1, s2) {
	let sum1 = 0;
	let sum2 = 0;

	for (const c of s1) sum1 += c.charCodeAt(0);
	for (const c of s2) sum2 += c.charCodeAt(0);

	return String.fromCharCode((sum2 - sum1) / 3);
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

let str1 = 'hello';
let str2 = 'checlclo';
strictEqual(addedChar(str1, str2), 'c', 'Wrong!');
