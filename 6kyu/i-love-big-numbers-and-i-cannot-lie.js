/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56121f3312baa28c8500005b
/* ========== ========== ========== ========== ========== ==========*/
/*
I love big nums and I cannot lie

Description:

Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.

For example:

[1, 2, 3] --> "321" (3-2-1)
[3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)

The results will be large so make sure to return a string.
*/


// Solution
function biggest(nums) {
  if(nums.every(e => e === 0)) return '0';
  return nums.map(String).sort((a,b) => (b+a).localeCompare(a+b)).join('');
};


// Test Codes
console.log(biggest([1,2,3]),'321');
console.log(biggest([121,12]),'12121');
console.log(biggest([3, 30, 34, 5, 9]),'9534330');