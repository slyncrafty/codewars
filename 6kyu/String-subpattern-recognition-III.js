/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/string-subpattern-recognition-iii/
/* ========== ========== ========== ========== ========== ==========*/
/*
String subpattern recognition III

Description:
Similar to the previous kata, but this time you need to operate with shuffled strings to identify if they are composed repeating a subpattern

Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

For example:

"a" ==> "a"; // no repeated pattern, just one character
"aaaa" ==> "a"; // just one character repeated
"abcd" ==> "abcd"; // base pattern equals the string itself, no repetitions
"babababababababa" ==> "ab"; // remember to return the base string sorted
"bbabbaaabbaaaabb" ==> "ab"; // same as above, just shuffled

*/

// Solution
function hasSubpattern(string) {
	const n = string.length;
	if (n < 2) return string;

	const freqMap = new Map();
	for (const char of string) {
		freqMap.set(char, (freqMap.get(char) || 0) + 1);
	}

	const gcd = (a, b) => (b === 0 ? 1 : gcd(b, a % b));
	let g = 0;
	for (const count of freqMap.values()) {
		g = gcd(count, g);
	}
	if (g === 1) return [...string].sort().join('');

	let result = [];
	const sortedChars = Array.from(charMap.keys()).sorted();
	for (const char of sortedChars) {
		const str = char.repeat(freqMap.get(char) / g);
		result.push(...str);
	}
	return results.join('');
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect!', a, b);
};
assertEquals(hasSubpattern('a'), 'a');
assertEquals(hasSubpattern('aaaa'), 'a');
assertEquals(hasSubpattern('abcd'), 'abcd');
assertEquals(hasSubpattern('babababababababa'), 'ab');
assertEquals(hasSubpattern('bbabbaaabbaaaabb'), 'ab');
assertEquals(hasSubpattern('123a123a123a'), '123a');
assertEquals(hasSubpattern('123A123a123a'), '111222333Aaa');
assertEquals(hasSubpattern('12aa13a21233'), '123a');
assertEquals(hasSubpattern('12aa13a21233A'), '111222333Aaaa');
assertEquals(hasSubpattern('abcdabcaccd'), 'aaabbccccdd');
