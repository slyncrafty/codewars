/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/520d9c27e9940532eb00018e
/* ========== ========== ========== ========== ========== ==========*/
/*
Duplicate Arguments

Description:
Complete the solution so that it returns true if it contains any duplicate argument values, and false otherwise. Any number of arguments may be passed into the function.

The arguments passed in will only be strings or numbers.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

*/

// Solution
const solution = (...args) => {
	return new Set(args).size !== args.length;
};

// Test Codes
const strictEqual = (a, b, msg) => {
	if (a === b) console.log('Correct');
	else console.log(msg);
};
function tester(input, expected, duplicates) {
	const str_args = JSON.stringify(input).slice(1, -1);
	const str_dups = duplicates
		? JSON.stringify(duplicates).slice(1, -1)
		: 'no duplicates';
	strictEqual(
		solution(...input),
		expected,
		`Failed for solution(${str_args})\nduplicates: ${str_dups}\n`
	);
}

tester([1, 2, 3], false);
tester([1, 2, 3, 6, 5, 6], true, [6]);
tester(['a', 'b', 'c', 'a'], true, ['a']);
tester([1, 2, 3, 'a', 'b'], false);
