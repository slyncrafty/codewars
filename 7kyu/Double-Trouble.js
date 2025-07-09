/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/javascript
/* ========== ========== ========== ========== ========== ==========*/
/*
Double Trouble

Description:

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
*/



// Solution

function trouble(x, t){
  let i = 0;
  while (i < x.length - 1) {
    if (x[i] + x[i+1] === t) {
            x.splice(i+1, 1);
    } else { i++; }
  }
  return x;
}



// using a new array to return satisfying array elements.
function trouble(x, t){
  if(x.length === 0) return [];
  const result = [x[0]];
  for(let i = 1; i < x.length; i++) {
    const val = x[i]
    if(result[result.length - 1] + val === t) continue;
    result.push(val);
  }
  return result;
}



/** Lessons Learned
 *  The version with building a new array doesn't use .splice() to shift elements, which can run o(n^2) in worst case.
 *  This version runs i O(n) time with extra memory for the new output array.
 */


console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
console.log(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
console.log(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
console.log(trouble([2, 6, 2], 8), [2, 2]);