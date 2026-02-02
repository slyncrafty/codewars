/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5800b6568f7ddad2c10000ae
/* ========== ========== ========== ========== ========== ==========*/
/*
Simplify the number!

Description:
Given a positive integer as input, return the output as a string in the following format:

Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.

    If the digit is zero, exclude it from the output;
    For the last digit, just use the digit itself, without *1.

Examples

0     -->  ""
56    -->  "5*10+6"
60    -->  "6*10"
999   -->  "9*100+9*10+9"
10004 -->  "1*10000+4"

Note: input >= 0

*/

// Solution
function simplify(number) {
	let output = [];
	const str = String(number);
	const n = str.length;
	for (let i = 0; i < n; i++) {
		const d = Number(str[i]);
		if (!d) continue;
		const pow = n - i - 1;
		output.push(pow === 0 ? `${d}` : `${d}*${10 ** pow}`);
	}
	return output.join('+');
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

strictEqual(
	simplify(8964631),
	'8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1',
);
strictEqual(simplify(660), '6*100+6*10');
strictEqual(simplify(56), '5*10+6');
strictEqual(simplify(600), '6*100');
