/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/581331293788bc1702001fa6/
/* ========== ========== ========== ========== ========== ==========*/
/*
Framed Reflection

Description:
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

Words in your solution should be left-aligned.
*/

// Solution
function mirror(text) {
	const reversedWord = text
		.split(' ')
		.map((e) => [...e].reduce((acc, curr) => curr + acc, ''));

	let maxLength = 0;
	for (const word of reversedWord) {
		if (word.length > maxLength) maxLength = word.length;
	}

	const lines = [];
	for (const word of reversedWord) {
		const repeats = maxLength - word.length + 1;
		const line = '* ' + word + ' '.repeat(repeats) + '*';
		lines.push(line);
	}
	const horizontalBorder = '*'.repeat(maxLength + 4);
	return [horizontalBorder, ...lines, horizontalBorder].join('\n');
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};
strictEqual(
	mirror('Hello World'),
	'*********\n* olleH *\n* dlroW *\n*********'
);
strictEqual(mirror('Codewars'), '************\n* srawedoC *\n************');
