/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/
/* ========== ========== ========== ========== ========== ==========*/
/*
Non-even substrings

Description:
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.
*/

// Solution
function solve(s) {
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if ('13579'.includes(s[i])) {
			count += i + 1;
		}
	}
	return count;
}

// Test Codes
const deepEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
deepEqual(solve('1341'), 7);
deepEqual(solve('1357'), 10);
deepEqual(solve('13471'), 12);
deepEqual(solve('134721'), 13);
deepEqual(solve('1347231'), 20);
deepEqual(solve('13472315'), 28);
