/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/530d0298e09e54a3620006c2/
/* ========== ========== ========== ========== ========== ==========*/
/*
Palindromes Below

Description:
The aim of this Kata is to modify the Ruby: Integer ( JS: Number CS: extension for int) class to give it the palindrome_below ( JS: palindromeBelow CS: PalindromeBelow ) method. This method returns all numbers from and including 1 up to but not including itself that are palindromes for a given base. The base values tested will be between 2 to 36.

For example in base 2 (binary)

1 = "1"
2 = "10"
3 = "11"
4 = "100"

Therefore 1 and 3 are palindromes in base two and the method should return the following:

    5..palindromeBelow(2)
    => [1, 3]

*/

// Solution
Number.prototype.palindromeBelow = function (base) {
	const limit = this;
	const result = [];
	for (let n = 1; n < limit; n++) {
		const str = n.toString(base);
		if (str === str.split('').reverse().join('')) {
			result.push(n);
		}
	}
	return result;
};

// Test Codes
const assertSimilar = (actual, expected) => {
	let ok = actual === expected;
	if (
		Array.isArray(actual) &&
		Array.isArray(expected) &&
		actual.length === expected.length
	) {
		ok = actual.every((e, i) => e === expected[i]);
	}
	if (ok) {
		console.log('✔ PASS:', `${actual} === ${expected}`);
	} else {
		console.error(
			`✘ FAIL: expected: ${expected} not matching output: ${actual}`
		);
	}
};

assertSimilar((4).palindromeBelow(2), [1, 3]);
assertSimilar((30).palindromeBelow(5), [1, 2, 3, 4, 6, 12, 18, 24, 26]);
assertSimilar((15).palindromeBelow(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
assertSimilar(
	(150).palindromeBelow(10),
	[
		1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
		121, 131, 141,
	]
);
assertSimilar(
	(25).palindromeBelow(22),
	[
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		23,
	]
);
assertSimilar((20).palindromeBelow(2), [1, 3, 5, 7, 9, 15, 17]);
assertSimilar(
	(2000).palindromeBelow(2),
	[
		1, 3, 5, 7, 9, 15, 17, 21, 27, 31, 33, 45, 51, 63, 65, 73, 85, 93, 99, 107,
		119, 127, 129, 153, 165, 189, 195, 219, 231, 255, 257, 273, 297, 313, 325,
		341, 365, 381, 387, 403, 427, 443, 455, 471, 495, 511, 513, 561, 585, 633,
		645, 693, 717, 765, 771, 819, 843, 891, 903, 951, 975, 1023, 1025, 1057,
		1105, 1137, 1161, 1193, 1241, 1273, 1285, 1317, 1365, 1397, 1421, 1453,
		1501, 1533, 1539, 1571, 1619, 1651, 1675, 1707, 1755, 1787, 1799, 1831,
		1879, 1911, 1935, 1967,
	]
);
