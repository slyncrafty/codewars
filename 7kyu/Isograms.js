/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54ba84be607a92aa900000f1
/* ========== ========== ========== ========== ========== ==========*/
/*
Isograms

Description:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/



// Solution
function isIsogram(str){
  const freqMap = {};
  for(let char of str) {
    char = char.toLowerCase();
    freqMap[char] = (freqMap[char] || 0) + 1; 
    if(freqMap[char] > 1) return false;
  }
  return true;
}



function isIsogram(str) {
  return new Set(str.toLowerCase()).size == str.length;
}



// Test Codes
console.log("Dermatoglyphics", true );
console.log("isogram", true );
console.log("aba", false);
console.log("moOse", false);
console.log("isIsogram", false );
console.log("", true);