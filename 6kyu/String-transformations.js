/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/6927680a91f3d91da9d2b16c/
/* ========== ========== ========== ========== ========== ==========*/
/*
String transformations

Description:
You are given a string and a transformation pattern (an array of operations). Your task is to apply the operations in order to the string and return the final result.

Each operation in the pattern is one of:

"U" → convert the string to uppercase

"L" → convert the string to lowercase

"R" → reverse the string

"D" → duplicate each character (e.g., "abc" → "aabbcc", "qqbbcc" → "qqqqbbbbcccc")

stringTransformation("abcd", ["U","R"]) // "DCBA"
// "abcd" → "ABCD" → "DCBA"

stringTransformation("abc", ["D","L"])  // "aabbcc"
// "abc" → "aabbcc" → "aabbcc" (lowercase already applied)

stringTransformation("AbCd", ["L","R"]) // "dcba"
// "AbCd" → "abcd" → "dcba"

Note:

Input string length is 1 <= n <= 10^5, length of transformations is 0 <= n <= 10^5, in all tests is guaranteed that the string will be not longer than 10^8.

*/

// Solution
function stringTransformation(string, transformations) {
	let upper = false;
	let lower = false;
	let reversed = false;
	let duplicate = 0;

	for (const t of transformations) {
		if (t === 'U') {
			upper = true;
			lower = false;
		} else if (t === 'L') {
			lower = true;
			upper = false;
		} else if (t === 'R') {
			reversed = !reversed;
		} else if (t === 'D') {
			duplicate++;
		}
	}

	let result = string;

	if (upper) result = result.toUpperCase();
	if (lower) result = result.toLowerCase();
	if (reversed) result = result.split('').reverse().join('');

	if (duplicate > 0) {
		const repeatCount = 2 ** duplicate;
		result = [...result].map((ch) => ch.repeat(repeatCount)).join('');
	}

	return result;
}

// Test Codes
const test = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

test(stringTransformation('abcd', ['U', 'R']), 'DCBA');

test(stringTransformation('abc', ['D', 'L']), 'aabbcc');

test(stringTransformation('AbCd', ['L', 'R']), 'dcba');
