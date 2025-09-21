/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55c353487fe3cc80660001d4/
/* ========== ========== ========== ========== ========== ==========*/
/*
Capitals first!

Description:
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/



// Solution
function capitalsFirst(str){
  const arr = str.split(' ');
  const upperCaseWords = [], lowerCaseWords = [];
  for(const word of arr){
    if(word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
      upperCaseWords.push(word);
    } 
    else if(word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) {
      lowerCaseWords.push(word);
    }
  }
  return [...upperCaseWords, ...lowerCaseWords].join(' ');
}



function capitalsFirst(str) {
    let arr = str.split(' ');
    return arr.filter((w) => /[a-z]/i.test(w[0]) ).filter((w) => w[0]==w[0].toUpperCase()).concat(arr.filter((w) => w[0]!=w[0].toUpperCase())).join(" ");
}



// Test Codes
const strictEqual = (a, b) => {
    if(a === b) console.log('Correct');
    else console.error('Incorrect', a, b);
}
strictEqual(capitalsFirst("hey You, Sort me Already!"), "You, Sort Already! hey me");
strictEqual(capitalsFirst("123 baby You and Me"), "You Me baby and");