/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5acd142a2ec8c48521000104
/* ========== ========== ========== ========== ========== ==========*/
/*
One line task: Square Every Digit

Description:
Your goal here is precisely the same: square every digit of the given integer, in as few characters as possible.

Your return value should be in integer format. Your input will always be a valid, non-negative integer, may be > 231

Code size limit: 36 characters or less
Examples

0     -->  0
64    -->  3616
1111  -->  1111
2222  -->  4444
3333  -->  9999
3212  -->  9414
1234  -->  14916
77455754  -->  4949162525492516
99999999  -->  8181818181818181

P.S., if you can get the sample tests to pass while under the character limit, the full tests should pass without a hitch!
*/

// Solution
sd = (x) => +('' + x).replace(/\d/g, (d) => d * d);

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!');
};

strictEqual(sd(0), 0);
strictEqual(sd(1111), 1111);
strictEqual(sd(3212), 9414);
strictEqual(sd(2112), 4114);
strictEqual(sd(159), 12581);
strictEqual(sd(77455754), 4949162525492516);
strictEqual(sd(99999999), 8181818181818181);
