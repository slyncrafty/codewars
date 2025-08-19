/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Least Larger

Description:

Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
Notes

Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.
Example

leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

*/



// Solution
function leastLarger(a,i) {
  const least = a[i];
  let leastLarge = +Infinity;
  let idx = -1;
  for(let j = 0; j < a.length; j++) {
    if(least < a[j] && leastLarge > a[j]) {
      leastLarge = a[j];
      idx = j;
    }
  }
  return idx;
}



const leastLarger = (a, i) => {
   return a.findIndex(x => x === Math.min(...a.filter(j => j > a[i])));
}



// Test Codes
console.log( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
console.log( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
console.log( leastLarger( [1, 3, 5, 2, 4], 0 ), 3 );