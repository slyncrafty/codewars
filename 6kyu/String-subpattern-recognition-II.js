/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a4a391ad8e145cdee0000c4/
/* ========== ========== ========== ========== ========== ==========*/
/*
String subpattern recognition II

Description:
Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as the repetition of one subpattern.

This time there are two small changes:

    if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
    the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.

For example:

"a" --> false; //no repeated shorter sub-pattern, just one character
"aaaa" --> true; //just one character repeated
"abcd" --> false; //no repetitions
"babababababababa" --> true; //repeated "ba"
"bbabbaaabbaaaabb" --> true; //same as above, just shuffled

Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

// Solution
function hasSubpattern(string) {
	const n = string.length;
	if (n < 2) return false;
	const charMap = {};
	for (const char of string) {
		charMap[char] = (charMap[char] || 0) + 1;
	}
	for (let repetition = 2; repetition <= n; repetition++) {
		if (n % repetition !== 0) continue;
		const isValidPattern = Object.values(charMap).every(
			(count) => count % repetition === 0
		);
		if (isValidPattern) return true;
	}
	return false;
}

// Test Codes
const testCases = [
	['a', false],
	['AA', true],
	['444', true],
	['aaaa', true],
	['abcd', false],
	['babababababababa', true],
	['bbabbaaabbaaaabb', true],
	['ababababa', false],
	['aaaabb', true],
	['abbb', false],
	['123a123a123a', true],
	['123A123a123a', false],
	['12aa13a21233', true],
	['12aa13a21233A', false],
	['aabbbbbbaa', true],
	['abcdabcaccd', false],
	['aaabbbccccdddddddd', false],
];

const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};
for (const [input, expected] of testCases) {
	console.log(`hasSubPattern("${input}")`);
	strictEqual(hasSubpattern(input), expected);
}
