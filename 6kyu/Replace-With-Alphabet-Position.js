/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/546f922b54af40e1e90001da
/* ========== ========== ========== ========== ========== ==========*/
/*
Replace With Alphabet Position

Description:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*/

// Solution
function alphabetPosition(text) {
	if (text.length === 0) return '';
	return text
		.toLowerCase()
		.replaceAll(/[^a-z]/g, '')
		.split('')
		.map((e) => e.charCodeAt(0) - 96 || '')
		.join(' ');
}

// function alphabetPosition(text) {
// 	let result = '';
// 	const aCode = 'a'.charCodeAt();
// 	const zCode = 'z'.charCodeAt();
// 	const toLower = text.toLowerCase();
// 	for (let i = 0; i < toLower.length; i++) {
// 		const code = toLower.charCodeAt(i);
// 		if (code <= zCode && code >= aCode) result += code - aCode + 1 + ' ';
// 	}
// 	return result.trim();
// }

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, ' is expected to match', b);
};

assertEquals(
	alphabetPosition("The sunset sets at twelve o' clock."),
	'20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);
assertEquals(
	alphabetPosition('The narwhal bacons at midnight.'),
	'20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
);
