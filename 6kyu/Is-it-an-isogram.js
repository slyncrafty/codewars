/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/586d79182e8d9cfaba0000f1
/* ========== ========== ========== ========== ========== ==========*/
/*
Is it an isogram

Description:
An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. It is also used by some to mean a word or phrase in which each letter appears the same number of times, not necessarily just once.

You task is to write a method isogram? that takes a string argument and returns true if the string has the properties of being an isogram and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

Properties:

    must be a string
    cannot be nil or empty
    each letter appears the same number of times (not necessarily just once)
    letter case is not important (= case insensitive)
    non-letter characters (e.g. hyphens) should be ignored


*/

// Solution
function isIsogram(str) {
	if (typeof str !== 'string' || !str || str === '') return false;
	const strLowerCase = str.replace(/[^a-z]/gi, '').toLowerCase();
	if (strLowerCase === '') return false;
	const map = new Map();
	for (const ch of strLowerCase) {
		map.set(ch, (map.get(ch) || 0) + 1);
	}
	for (let i = 1; i < strLowerCase.length; i++) {
		if (map.get(strLowerCase[i]) !== map.get(strLowerCase[0])) {
			return false;
		}
	}
	return true;
}

// Test Codes
const test = (actual, expected, msg = '') => {
	if (actual === expected) console.log('✅PASS');
	else console.log('❌FAIL', msg);
};
test(isIsogram(null), false);
test(isIsogram(3), false);
test(isIsogram('Dermatoglyphics'), true);
test(isIsogram('isogram'), true);
test(isIsogram('eleven'), false);
test(isIsogram('moOse'), false, 'char case is not important');
test(isIsogram('isIsogram'), false);
test(isIsogram(''), false, 'an empty string is NOT a valid isogram');
test(isIsogram('-.-'), false);
test(isIsogram('isogram'), true);
test(isIsogram('subdermatoglyphic'), true);
test(isIsogram('Alphabet'), false);
test(isIsogram('thumbscrew-japingly'), true);
test(isIsogram('Hjelmqvist-Gryb-Zock-Pfund-Wax'), true);
test(isIsogram('Emily Jung Schwartzkopf'), true);
test(
	isIsogram('aabbccddeeffgg'),
	true,
	'each char appears the same number of times, not necessarily just once'
);
