/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/
/* ========== ========== ========== ========== ========== ==========*/
/*
Scramblies

Description:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

// Solution
function scramble(str1, str2) {
	const freqMap = (str) => {
		const map = new Map();
		for (const letter of str) {
			map.set(letter, (map.get(letter) || 0) + 1);
		}
		return map;
	};
	const bag = freqMap(str1);
	const word = freqMap(str2);

	for (const [key, val] of word.entries()) {
		const available = bag.get(key) || 0;
		if (val > available) return false;
	}
	return true;
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅PASS.....');
	else console.log(`❌FAILED`);
};
strictEqual(scramble('rkqodlw', 'world'), true);
strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true);
strictEqual(scramble('katas', 'steak'), false);
strictEqual(scramble('scriptjavx', 'javascript'), false);
strictEqual(scramble('scriptingjava', 'javascript'), true);
strictEqual(scramble('scriptsjava', 'javascripts'), true);
strictEqual(scramble('javscripts', 'javascript'), false);
strictEqual(scramble('jscripts', 'javascript'), false);
strictEqual(scramble('aabbcamaomsccdd', 'commas'), true);
strictEqual(scramble('commas', 'commas'), true);
strictEqual(scramble('sammoc', 'commas'), true);

let s1 = 'abcdefghijklmnopqrstuvwxyz'.repeat(10_000);
let s2 = 'zyxcba'.repeat(9_000);
strictEqual(scramble(s1, s2), true);
