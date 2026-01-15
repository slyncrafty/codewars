/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
/* ========== ========== ========== ========== ========== ==========*/
/*
Split Strings

Description:
Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

// Solution
function solution(str) {
	const s = str.length % 2 ? str + '_' : str;
	const result = [];
	for (let i = 0; i < s.length; i += 2) {
		result.push(s[i] + s[i + 1]);
	}
	return result;
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED');
};

deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
deepEqual(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
deepEqual(solution(''), []);
