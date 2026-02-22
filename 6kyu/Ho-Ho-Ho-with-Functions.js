/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52af1f150fcae8d33d0009bc
/* ========== ========== ========== ========== ========== ==========*/
/*
Ho Ho Ho with Functions!

Description:
Santa is learning programming. And what could be the first program, he wants to write? Yes, the "Hello world!" of Christmas: "Ho Ho Ho!". He wants to write a function ho(), which should have the following return values:

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
ho(ho(ho())); // should return "Ho Ho Ho!"

Unfortunately he couldn't find any tutorial, which explains, how he could implement that. Can you help him?

Rules:

    each call of ho() must add a "Ho" to the string
    the "Ho"'s must be separated by a space
    at the end of the string, there must be an exclamation mark (!), without a space
*/

// Solution
function ho(str) {
	if (!str) return 'Ho!';
	return 'Ho ' + str;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

strictEqual(ho(), 'Ho!');
strictEqual(ho(ho()), 'Ho Ho!');
strictEqual(ho(ho(ho())), 'Ho Ho Ho!');
