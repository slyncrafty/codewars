/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52190daefe9c702a460003dd
/* ========== ========== ========== ========== ========== ==========*/
/*
Return substring instance count - 2

Description:
Complete the solution so that it returns the number of times the search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )

so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') // should return 1
searchSubstr( 'aaa', 'aa' ) // should return 2
searchSubstr( 'aaa', '' ) // should return 0
searchSubstr( 'aaa', 'aa', false ) // should return 1

*/

// Solution
function searchSubstr(fullText, searchText, allowOverlap = true) {
	if (!searchText.length) return 0;
	let count = 0;
	let step = allowOverlap ? 1 : searchText.length;

	for (let i = 0; i <= fullText.length - searchText.length; i += step) {
		if (fullText.substr(i, searchText.length) === searchText) {
			count++;
		}
	}
	return count;
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

strictEqual(searchSubstr('aa_bb_cc_dd_bb_e', 'bb'), 2);
strictEqual(searchSubstr('aaabbbcccc', 'bbb'), 1);
strictEqual(searchSubstr('aaa', 'aa'), 2);
strictEqual(searchSubstr('aaa', ''), 0);
strictEqual(searchSubstr('aaa', 'aa', false), 1);
