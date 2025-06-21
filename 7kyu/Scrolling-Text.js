/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd
/* ========== ========== ========== ========== ========== ==========*/
/*
Scrolling Text

Description:

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
Example

scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/



// Solution
function scrollingText(text){
  const textUpperCase = text.toUpperCase();
  const res = [textUpperCase];
  for(let i = 1 ; i < text.length; i++){
    res.push(textUpperCase.slice(i)+textUpperCase.slice(0,i));
  }
  return res;
}


function scrollingText(text){
    const textUpperCase = text.toUpperCase();
    return [...text].map((_, i) => textUpperCase.slice(i)+textUpperCase(0, i));
}



// Test Codes
console.log(scrollingText("abc"), ["ABC","BCA","CAB"]);
console.log(scrollingText("codewars"), [ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA", "SCODEWAR" ])