/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5822d89270ca28c85c0000f3
/* ========== ========== ========== ========== ========== ==========*/
/*
String Scramble

Description:
Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.
Example

input: "abcd", [0, 3, 1, 2]
output: "acdb"

Explanation

    The character 'a' is placed at index 0.

    The character 'b' is placed at index 3.

    The character 'c' is placed at index 1.

    The character 'd' is placed at index 2.

Notes

    The string and the array will be of equal length.

    The string will contain valid characters (A-Z, a-z, or 0-9);
    the array will contain valid indices.


*/



// Solution
function scramble(str, arr) {
  let res = Array(str.length);
  for(let i = 0;i < str.length; i++) {
    res[arr[i]] = str[i];
  }
  return res.join('');
};



// Test Codes
console.log(scramble('abcd', [0,3,1,2]), 'acdb');
console.log(scramble('sc301s', [4,0,3,1,5,2]), "c0s3s1");
console.log(scramble('bskl5', [2,1,4,3,0]), "5sblk");