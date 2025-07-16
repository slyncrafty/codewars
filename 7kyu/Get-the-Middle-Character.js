/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56747fd5cb988479af000028
/* ========== ========== ========== ========== ========== ==========*/
/*
Get the Middle Character

Description:
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

*/



// Solution
function getMiddle(s) {
  const length = s.length;
  if(length === 0) return '';
  const mid = Math.floor(length / 2)
  if(length % 2 === 0) return s.substring(mid-1, mid + 1);
  else return s.substring(mid, mid+1);
}



// Test Codes
console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");