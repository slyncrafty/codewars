/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/599febdc3f64cd21d8000117/
/* ========== ========== ========== ========== ========== ==========*/
/*
Numbers of Letters of Numbers

Description:
If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
Examples

numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]
*/



// Solution
function numbersOfLetters(integer) {
  if(integer === null) return [];
  const numMap = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const toStr = num => String(num).split('').map(n => numMap[Number(n)]).join('');
  let str = toStr(integer);
  const res = [str];
  
  while(str !== "four") {
    str = toStr(str.length);
    res.push(str);
  }
  return res;
}



// Test Codes
console.log(numbersOfLetters(1), ["one", "three", "five", "four"]);
console.log(numbersOfLetters(12), ["onetwo", "six", "three", "five", "four"]);
console.log(numbersOfLetters(37), ["threeseven", "onezero", "seven", "five", "four"]);
console.log(numbersOfLetters(311), ["threeoneone", "oneone", "six", "three", "five", "four"]);
console.log(numbersOfLetters(999), ["nineninenine", "onetwo", "six", "three", "five", "four"]);
 