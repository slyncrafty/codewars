/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0178f66f793bc5b0001728
/* ========== ========== ========== ========== ========== ==========*/
/*
Longest palindrome

Description:

*/



// Solution
function longestPalindrome(str) {
  // remove non-alphanumeric characters from str 
  const cleanedStr = str.toLowerCase().replace(/[\W _]/g, '').split('');
  // create a frequency map
  const freqMap = {};
  for(const char of cleanedStr) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }
  // get the longest length including even + (odd-1) frequencies
  let resLength = 0;
  let odd = false;
  for(const len of Object.values(freqMap)){
    if(len % 2 === 0) resLength += len;
    else {
      resLength += (len - 1);
      odd = true;
    }
  }
  // if odd, return length+1. the resulting Palindrome can have 1 mid character at most
  return odd ? resLength+1 : resLength;
}



// Test Codes
const assertEq = (actual, expected, msg) => {
    if(actual === expected) console.log('Correct!')
    else {
        console.log(`Incorrect! ${msg}`)
    }
}

assertEq(longestPalindrome("B"), 1,"Remember a string of length 1 is still the same backwards as forwards")
assertEq(longestPalindrome("xyz__a_/b0110//a_zyx"), 13,"Remember to include alphanumeric characters only")
assertEq(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"), 25, "Don't forget to make it not case sensitive")