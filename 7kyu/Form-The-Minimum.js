/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/
/* ========== ========== ========== ========== ========== ==========*/
/*
Form The Minimum

Description:
Task

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.
Examples

[1, 3, 1] ==> 13
[5, 7, 5, 9, 7] ==> 579
[1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

*/



// Solution
function minValue(values){
  const uniqueValues = [...new Set(values)];
  const number = uniqueValues.sort((a,b) => a - b);
  return parseInt(number.join(''),10);
}



// Test Codes
console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
