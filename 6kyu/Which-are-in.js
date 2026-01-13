/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/550554fd08b86f84fe000a58
/* ========== ========== ========== ========== ========== ==========*/
/*
Which are in?

Description:
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates.

*/

// Solution
function inArray(array1, array2) {
	return [
		...new Set(array1.filter((s) => array2.some((str) => str.includes(s)))),
	].sort();
}

// Test Codes
const sameOrderedMembers = (a1, a2) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
	};
	if (equal(a1, a2)) {
		console.log('✅PASSED');
	} else console.log('❌FAILED');
};

let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

let a1 = ['xyz', 'live', 'strong'];
sameOrderedMembers(inArray(a1, a2), ['live', 'strong']);

a1 = ['live', 'strong', 'arp'];
sameOrderedMembers(inArray(a1, a2), ['arp', 'live', 'strong']);

a1 = ['tarp', 'mice', 'bull'];
sameOrderedMembers(inArray(a1, a2), []);
