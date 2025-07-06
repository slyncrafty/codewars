/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/539ee3b6757843632d00026b
/* ========== ========== ========== ========== ========== ==========*/
/*
Find the capitals

Description:
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]
*/



// Solution
var capitals = function (word) {
  const res = [];
  for(let i = 0; i < word.length; i++) {
    const char = word[i];
    if(char >= 'A' && char <= 'Z') {
      res.push(i);
    }
  }
  return res;
};



// Test Codes
console.log(capitals('CodEWaRs'), [0,3,4,6] , "Input: \"CodEWaRs\"");
console.log(capitals('aAbB'), [1,3], "Input: \"aAbB\"");
console.log(capitals('AAA'), [0,1,2], "Input: \"AAA\"");
console.log(capitals(''), [], "Input: \"\"");
