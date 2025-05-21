/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
/* ========== ========== ========== ========== ========== ==========*/
/*
Reversed Strings

Description:

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/



// Solution
function solution(str){
  let reversedStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; 
  }
  return reversedStr;
}

function solution(str){
  return str.split('').reverse().join('');
}


// Test Codes
console.log(solution('world') === 'dlrow');
console.log(solution('hello') === 'olleh');
console.log(solution('') === '');
console.log(solution('h') === 'h');