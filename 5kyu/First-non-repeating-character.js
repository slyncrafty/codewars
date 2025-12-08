/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054
/* ========== ========== ========== ========== ========== ==========*/
/*
First non-repeating character

Description:
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

*/

// Solution
function firstNonRepeatingLetter(s) {
	const freqMap = new Map();
	for (const ch of s.toLowerCase()) {
		freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (freqMap.get(s[i].toLowerCase()) === 1) return s[i];
	}
	return '';
}

// Test Codes
const doTest = (s, expected) => {
	const actual = firstNonRepeatingLetter(s);
	if (actual === expected) console.log('✅PASS');
	else console.log('❌FAIL');
};

doTest('', '');

doTest('abba', '');
doTest('aa', '');
doTest('∞§ﬁ›ﬂ∞§', 'ﬁ');
doTest('hello world, eh?', 'w');
doTest('sTreSS', 'T');
doTest("Go hang a salami, I'm a lasagna hog!", ',');
