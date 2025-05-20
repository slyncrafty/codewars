/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5715eaedb436cf5606000381
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum of positive

Task

You get an array of numbers, return the sum of all of the positives ones.
Example

    [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Note

If there is nothing to sum, the sum is default to 0.
*/



// Solution
function positiveSum(arr) {
  return arr.reduce( (acc, curr) => {
    if (curr > 0) acc += curr;
    return acc;
  }, 0)
}


// Test Codes
console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);