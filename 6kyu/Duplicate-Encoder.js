/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
/* ========== ========== ========== ========== ========== ==========*/
/*
Duplicate Encoder

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/



// Solution
function duplicateEncode(word){
  const chars = word.toLowerCase();
  const freqMap = new Map();
  for(const char of chars) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  
  let res = "";
  for(const char of chars) {
    res += (freqMap.get(char) === 1 ? '(' : ')');
  }
  return res;
}



// Test Codes
console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");
