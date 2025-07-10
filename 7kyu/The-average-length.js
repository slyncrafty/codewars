/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a430359e1ce0e35540000b1
/* ========== ========== ========== ========== ========== ==========*/
/*
The average length

Description:
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

    If the average length is not an integer, use Math.round().
    The input array's length > 1

*/



// Solution
function averageLength(array) { 
  const avgLength = Math.round(array.reduce((acc, curr) => acc + curr.length, 0) / array.length);
  return array.map(e => e[0].repeat(avgLength));
}



// Test Codes
console.log(averageLength(['u', 'y']), ['u', 'y']);
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);