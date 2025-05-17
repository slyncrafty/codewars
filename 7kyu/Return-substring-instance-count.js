/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5168b125faced29f66000005
/* ========== ========== ========== ========== ========== ==========*/
/*
Return substring instance count

Description:

Write a function that takes two string parameters search_text and full_text and returns the number of times the search_text is found within the full_text.

    Overlap is not permitted: "aaa" contains 1 instance of "aa", not 2.
    search_text will never be empty.

Examples:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
--> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
--> should return 1

*/



// Solution
function solution(fullText, search) {
    let count = 0;
    let i = 0;
    const searchLength = search.length;
    while(i < fullText.length) {
        const foundIndex = fullText.indexOf(search, i);
        if(foundIndex === -1) break;
        count++;
        i = foundIndex + search.length;
    }
    return count;
}


// Test Codes
const testCases = [
    ["abcdeb", "b", 2],
    ["abcdeb", "a", 1],
    ["ccddeeccddeecc", "cc", 3],
    ["aabb", "cc", 0],
    ["bbaa", "a", 2],
    ["abab", "a", 2],
    ["abcdefdvbhibjkb", "b", 4],
    ["abccded", "cc", 1],
    ["abccded", "d", 2],
    
    // overlaps
    ["aaabbbccc", "bb", 1],
    [",,,..239,,,,,.,", ",,", 3],
  ];
  
for (let [fullText, search, expected] of testCases) {
console.log(`solution("${fullText}", "${search}")`, solution(fullText, search), `${expected}` )}