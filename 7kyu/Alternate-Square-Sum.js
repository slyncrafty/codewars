/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/559d7951ce5e0da654000073/
/* ========== ========== ========== ========== ========== ==========*/
/*
Alternate Square Sum

Description:
Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

For empty arrays, result should be zero (except for Haskell).
Note

The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.
Example

[11, 12, 13, 14, 15]  -->  379
# 1.  2.  3.  4.  5.  position

11 + 12^2 + 13 + 14^2 + 15 = 379

Explanation:

Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1, 13 is at position #3 and 15 at #5.

Elements at indices 1, 3 are 12 and 14 and they are at even position. So we need to add 11, 13, 15 as they are and square of 12 and 14

*/



// Solution
function alternateSqSum(arr){
    if(!arr || !Array.isArray(arr)) return 0;
    return arr.map((e,i) => {
      if((i+1) % 2 === 0) return e*e;
      else return e;
    }).reduce((acc, curr) => acc+curr,0);
}



// Test Codes
console.log(alternateSqSum([]),0);
console.log(alternateSqSum([1,2,3,4,5]),29);
console.log(alternateSqSum([-1,0,-3,0,-5,3]),0);
console.log(alternateSqSum([-1,2,-3,4,-5]),11);