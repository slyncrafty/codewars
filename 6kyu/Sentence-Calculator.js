/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5970fce80ed776b94000008b/
/* ========== ========== ========== ========== ========== ==========*/
/*
Sentence Calculator

Description:
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

    Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
    Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
    Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
    Other characters: 0 value

Note: input will always be a string
*/

// Solution
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

function lettersToNumbers(s) {
	return s.split('').reduce((acc, ch) => acc + letterScore(ch), 0);
}

const letterScore = (ch) => {
	if (ch >= '0' && ch <= '9') {
		return ch - '0';
	}
	const lower = ch.toLowerCase();
	const pos = lowerCase.indexOf(lower);
	if (pos === -1) return 0;
	return ch === lower ? pos + 1 : (pos + 1) * 2;
};

// Test Codes
const tester = (a, expected) => {
	const actual = lettersToNumbers(a);
	if (actual === expected) console.log('✅PASS');
	else console.log(`❌FAILED: ${actual} !== ${expected}`);
};

tester('I Love You', 170);
tester('ILoveYou', 170);
tester('ARE YOU HUNGRY?', 356);
tester('oops, i did it again!', 152);
tester('Give me 5!', 73);
tester('Give me five!', 110);
