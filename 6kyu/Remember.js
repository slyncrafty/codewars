/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55a243393fb3e87021000198
/* ========== ========== ========== ========== ========== ==========*/
/*

Description:

Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.

For F# return a "char list"
Examples:

remember("apple") => returns ["p"]
remember("apPle") => returns []          // no repeats, "p" != "P"
remember("pippi") => returns ["p","i"]   // show "p" only once
remember('Pippi') => returns ["p","i"]   // "p" is repeated first
*/



// Solution
function remember(str) {
  const strArray = str.split('');
  const freqMap = {};
  const res = [];
  for(const char of strArray) {
    freqMap[char] = (freqMap[char] || 0) + 1;
    if(freqMap[char] === 2) res.push(char);
  }
  return res;
}



// Test Codes
console.log(remember('apple'), ["p"]);
console.log(remember("apPle"), []);
console.log(remember("pippi"), ["p", "i"]);
console.log(remember('Pippi'), ["p", "i"]);
console.log(remember("limbojackassin the garden"), ["a", "s", "i", " ", "e", "n"]);
console.log(remember("11pinguin"), ["1", "i", "n"]);