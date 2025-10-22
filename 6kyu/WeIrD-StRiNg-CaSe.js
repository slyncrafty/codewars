/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/
/* ========== ========== ========== ========== ========== ==========*/
/*
WeIrD StRiNg CaSe

Description:
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"

*/

// Solution
function toWeirdCase(string) {
	return string
		.split(' ')
		.map((e) => {
			let str = '';
			for (let i = 0; i < e.length; i++) {
				if (i % 2 === 0) str += e[i].toUpperCase();
				else str += e[i].toLowerCase();
			}
			return str;
		})
		.join(' ');
}

// Test Codes
const doTest = (a, b) => {
	const actual = toWeirdCase(a);
	if (actual === b) console.log('Correct!');
	else console.log('Incorrect!', actual, b);
};
doTest('This is a test', 'ThIs Is A TeSt');
doTest('', '');
doTest('unique', 'UnIqUe');
doTest('UPPER CASE', 'UpPeR CaSe');
doTest('lower case', 'LoWeR CaSe');
