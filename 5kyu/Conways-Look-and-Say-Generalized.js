/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Conway's Look and Say - Generalized

Description:
Your task is to create a function that will take an integer and return the result of the look-and-say function on that integer. This should be a general function that takes as input any positive integer, and returns an integer; inputs are not limited to the sequence which starts with "1".

Conway's Look-and-say sequence goes like this:

    Start with a number.
    Look at the number, and group consecutive digits together.
    For each digit group, say the number of digits, then the digit itself.

This can be repeated on its result to generate the sequence.

For example:

    Start with 1.
    There is one 1 --> 11
    Start with 11. There are two 1 digits --> 21
    Start with 21. There is one 2 and one 1 --> 1211
    Start with 1211. There is one 1, one 2, and two 1s --> 111221

Sample inputs and outputs::

    0 --> 10
    2014 --> 12101114
    9000 --> 1930
    22322 --> 221322
    222222222222 --> 122

*/

// Solution
function lookSay(number) {
	const str = number.toString();
	let result = '';
	let i = 0;
	while (i < str.length) {
		const curr = str[i];
		let count = 1;

		while (i + 1 < str.length && str[i + 1] === curr) {
			i++;
			count++;
		}
		result += String(count) + String(curr);
		i++;
	}
	return Number(result);
}

// Test Codes
const test = (actual, expected) => {
	if (actual === expected) console.log('✅PASS!');
	else console.log('❌FAILED');
};

test(lookSay(0), 10);
test(lookSay(2014), 12101114);
test(lookSay(1122), 2122);
test(lookSay(22322), 221322);
