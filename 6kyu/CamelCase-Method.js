/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/587731fda577b3d1b0001196/
/* ========== ========== ========== ========== ========== ==========*/
/*
CamelCase Method

Description:
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"

*/

// Solution
String.prototype.camelCase = function () {
	return this.split(' ')
		.map((e) => e.slice(0, 1).toUpperCase() + e.slice(1))
		.join('');
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!');
};

strictEqual('test case'.camelCase(), 'TestCase');
strictEqual('camel Case method'.camelCase(), 'CamelCaseMethod');
strictEqual('say hello'.camelCase(), 'SayHello');
strictEqual('camel case word'.camelCase(), 'CamelCaseWord');
strictEqual(''.camelCase(), '');
