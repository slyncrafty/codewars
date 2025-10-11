/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b
/* ========== ========== ========== ========== ========== ==========*/
/*
String subpattern recognition I

Description:
In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern

Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

// Solution
function hasSubpattern(string) {
	const length = string.length;
	if (length === 1) return false;

	for (let i = 1; i <= length / 2; i++) {
		if (length % i !== 0) continue;
		const pattern = string.slice(0, i);
		const repetitions = length / i;
		if (pattern.repeat(repetitions) === string) return true;
	}
	return false;
}

// String rotation method - optimized
/**
 * The key insight is that if a string s has period p, then:
 * s = pattern + pattern + ... + pattern (repeated k times)
 * When we create s + s, the original s appears at position p (the length of the pattern)
 * If s is not periodic, s only appears at positions 0 and s.length in s + s
 */
function hasSubpattern(string) {
	return (string + string).indexOf(string, 1) != string.length;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};

strictEqual(hasSubpattern('a'), false, 'hasSubpattern("a")');
strictEqual(hasSubpattern('aaaa'), true, 'hasSubpattern("aaaa")');
strictEqual(hasSubpattern('abcd'), false, 'hasSubpattern("abcd")');
strictEqual(hasSubpattern('abababab'), true, 'hasSubpattern("abababab")');
strictEqual(hasSubpattern('ababababa'), false, 'hasSubpattern("ababababa")');
strictEqual(
	hasSubpattern('123a123a123a'),
	true,
	'hasSubpattern("123a123a123a")'
);
strictEqual(
	hasSubpattern('123A123a123a'),
	false,
	'hasSubpattern("123A123a123a")'
);
strictEqual(
	hasSubpattern('abbaabbaabba'),
	true,
	'hasSubpattern("abbaabbaabba")'
);
strictEqual(hasSubpattern('abbabbabba'), false, 'hasSubpattern("abbabbabba")');
strictEqual(
	hasSubpattern('abcdabcabcd'),
	false,
	'hasSubpattern("abcdabcabcd")'
);
