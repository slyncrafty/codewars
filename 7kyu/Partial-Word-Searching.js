/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54b81566cd7f51408300022d
/* ========== ========== ========== ========== ========== ==========*/
/*
Partial Word Searching

Description:
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
Examples

If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/



// Solution
function wordSearch(query, seq){
  if(seq.length === 0) return [ "Empty" ];
  const regex = new RegExp(query, 'i');
  let res =  seq.filter(e => regex.test(e));
  return res.length ? res : [ "Empty" ];
}



// Test Codes
console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);
