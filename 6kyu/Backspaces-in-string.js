/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Backspaces in string

Description:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

// Solution
function cleanString(s) {
	let result = [];
	for (const ch of s) {
		if (ch === '#') {
			result.pop();
		} else {
			result.push(ch);
		}
	}
	return result.join('');
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅PASS');
	else console.log('❌FAILED');
};

strictEqual(cleanString('abc#d##c'), 'ac');
strictEqual(cleanString('abc####d##c#'), '');
