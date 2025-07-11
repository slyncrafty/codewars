/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a430359e1ce0e35540000b1
/* ========== ========== ========== ========== ========== ==========*/
/*
The average length

Description:
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2

Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
*/



// Solution
function nthChar(words){
  if(!Array.isArray(words) || words.length === 0) return '';
  let i = 0;
  let res = '';
  for(const word of words) {
    res += word[i++];
  }
  return res;
}



// Test Codes
console.log(nthChar([]),'');
console.log(nthChar(['yoda', 'best', 'has']), 'yes');
