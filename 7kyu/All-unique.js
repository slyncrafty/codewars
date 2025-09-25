/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/553e8b195b853c6db4000048
/* ========== ========== ========== ========== ========== ==========*/
/*
All unique

Description:Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/



// Solution
function hasUniqueChars(str){
  if(str.length <= 1) return true;
  const seen = new Set();
  for(const char of str) {
    if(seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}



// Test Codes
const strictEqual = (a,b) => {
    if(a===b) console.log('Correct!');
    else console.error('Incorrect', a, b);
}
strictEqual(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
strictEqual(hasUniqueChars("abcdef"),true)
strictEqual(hasUniqueChars("aA"),true) // case - sensitivity
strictEqual(hasUniqueChars("++-"),false) // because there are two '+'