/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Title

Description:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= length of input <= 100

    All inputs will be strings, consisting only of characters ( and ).
    Empty strings are considered balanced (and therefore valid), and will be tested.
    For languages with mutable strings, the inputs should not be mutated.


Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

*/

// Solution
function validParentheses(parenStr) {
	if (parenStr[0] === ')') return false;

	let countOpenP = 0;
	for (const ch of parenStr) {
		if (ch === '(') countOpenP += 1;
		else if (ch === ')') countOpenP -= 1;
		if (countOpenP < 0) return false;
	}
	return countOpenP === 0;
}

// Test Codes
const runTest = (b, a) => {
	const actual = validParentheses(a);
	if (actual === b) console.log('Correct!');
	else console.log('Incorrect!');
};
runTest(true, '()');
runTest(true, '((()))');
runTest(true, '()()()');
runTest(true, '(()())()');
runTest(true, '()(())((()))(())()');
runTest(false, ')(');
runTest(false, '()()(');
runTest(false, '((())');
runTest(false, '())(()');
runTest(false, ')()');
runTest(false, ')');
runTest(true, '');
