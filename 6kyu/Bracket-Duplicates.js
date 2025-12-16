/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea/
/* ========== ========== ========== ========== ========== ==========*/
/*
Bracket Duplicates

Description:
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

*/

// Solution
function stringParse(string) {
	if (!string) return '';
	if (typeof string !== 'string') return 'Please enter a valid string';
	let result = '';
	let count = 1;

	for (let i = 1; i <= string.length; i++) {
		if (string[i] === string[i - 1]) {
			count++;
		} else {
			if (count <= 2) {
				result += string[i - 1].repeat(count);
			} else {
				result +=
					string[i - 1].repeat(2) + `[${string[i - 1].repeat(count - 2)}]`;
			}
			count = 1;
		}
	}
	return result;
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('✅PASS');
	else console.log('❌FAILED');
};

assertEquals(stringParse('aaaabbcdefffffffg'), 'aa[aa]bbcdeff[fffff]g');
assertEquals(stringParse('boopdedoop'), 'boopdedoop');
assertEquals(stringParse('helloookat'), 'helloo[o]kat');
