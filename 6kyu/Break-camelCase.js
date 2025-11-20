/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Break camelCase

Description:
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// Solution
function solution(string) {
	if (string.length === 0) return '';
	let result = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			result += ' ';
		}
		result += string[i];
	}
	return result;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect');
};

strictEqual(solution(''), '', `solution("")`);

strictEqual(solution('camelCasing'), 'camel Casing', `solution("camelCasing")`);

strictEqual(
	solution('camelCasingTest'),
	'camel Casing Test',
	`solution("camelCasingTest")`
);
