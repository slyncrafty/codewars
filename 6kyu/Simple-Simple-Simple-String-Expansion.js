/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5ae326342f8cbc72220000d2
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Simple Simple String Expansion

Description:
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.
Notes

    The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
    If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
    Empty strings should return an empty string.

Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string

*/



// Solution
function stringExpansion(s) {
  if(!s) return "";
  let result = '';
  let currNumber = 1;
  
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if((/[0-9]/).test(char)) {
      currNumber = Number(char);
    } else if((/[a-z]/i).test(char)) {
      result += char.repeat(currNumber);
    }
  }
  return result;
}



// Test Codes
const strictEqual = (actual, expected) => {
    if(actual === expected) console.log('Correct!');
    else console.error(`Incorrect! '${actual}' expected to match '${expected}'`);
}

strictEqual(stringExpansion('3abc'),'aaabbbccc');
strictEqual(stringExpansion('3D2a5d2f'),'DDDaadddddff');
strictEqual(stringExpansion('0d0a0v0t0y'),'');
strictEqual(stringExpansion('3d332f2a'),'dddffaa');
strictEqual(stringExpansion('abcde'),'abcde');
strictEqual(stringExpansion('a2bcde'),'abbccddee');