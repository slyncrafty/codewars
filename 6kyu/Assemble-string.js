/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6
/* ========== ========== ========== ========== ========== ==========*/
/*
Assemble string

Description:
In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

If the array is empty, then return an empty string.
Examples:

input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
result = "abcde"


input = [
  "a*c**",
  "**cd*",
  "a*cd*"
]
result = "a#cd#"

*/

// Solution
function assembleString(array) {
	if (!array.length || array[0] === '') return '';
	const result = [];

	for (let col = 0; col < array[0].length; col++) {
		let ch = '#';
		for (let row = 0; row < array.length; row++) {
			const char = array[row][col];
			if (char !== '*') ch = char;
		}
		result[col] = ch;
	}
	return result.join('');
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};

strictEqual(
	assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*']),
	'Hello, World!'
);

strictEqual(
	assembleString([
		".** . .' .'' ! ! .",
		". . . .' **' ! * .",
		"* . .*.* .'' * ! .",
		". . .*.' .**** ! .",
		"**. * .* .*' ! ! .",
	]),
	". . . .' .'' ! ! ."
);

strictEqual(
	assembleString(['. . . .', '. . . .', '. . . .', '. . . .', '. . . .']),
	'. . . .'
);

strictEqual(
	assembleString([
		'12***6789',
		'**3456789',
		'12345**8*',
		'***456**9',
		'1*3*5*7*9',
		'*2*456789',
	]),
	'123456789'
);

strictEqual(assembleString(['******', '******', '******', '******']), '######');

strictEqual(
	assembleString([
		'*#*#*#*#*#*#*#*',
		'*#*#*#*#*#*#*#*',
		'*#*#*#*#*#*#*#*',
		'*#*#*#*#*#*#*#*',
	]),
	'###############'
);
