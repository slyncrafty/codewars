/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e67378fd2d897b8a000110
/* ========== ========== ========== ========== ========== ==========*/
/*
Drone Fly-By

Description:

Consider a sequence of integers xs, and a target integer n. Your task is to write a function which counts how many combinations of indexes of xs meet two rules:

    The size of the combination must be 1 less than the size of xs
    The sum of elements corresponding to the indexes must equal n

For example:

xs = [5, 0, 0, 2], n = 7

All combinations of indexes (of size 3)
{0, 1, 2} -> 5 + 0 + 0 = 5
{0, 1, 3} -> 5 + 0 + 2 = 7
{0, 2, 3} -> 5 + 0 + 2 = 7
{1, 2, 3} -> 0 + 0 + 2 = 2

Only 2 combinations match the target -> Answer = 2

*/




// Solution
function numCombo(arr, num){
  const size = arr.length - 1; 
  if(size < 1) return 0;
  const sum    = arr.reduce((sum, curr) => sum + curr, 0);
  const dropVal  = sum - num;
  let   count    = 0;
  for (const x of arr) {
    if (x === dropVal) count++;
  }
  return count;
}



// Test Codes
console.log(numCombo([2, 0, 0, 0, 1], 2), 1);
console.log(numCombo([2, 0, 0, 0, 1], 1), 1);
console.log(numCombo([2, 0, 0, 0, 1], 3), 3);
console.log(numCombo([0, 0, 0, 0, 0], 0), 5);
console.log(numCombo([0, 0, 0, 0, 1], 1), 4);
console.log(numCombo([0, 0, 0, 0, 1], 2), 0);
