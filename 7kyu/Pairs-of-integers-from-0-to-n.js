/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Pairs of integers from 0 to n

Description:
Write a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition

0 <= a <= b <= n

The pairs should be sorted by increasing values of a, then by increasing values of b.

For example,

for input: 2
it should return: [  [0, 0], [0, 1], [0, 2],  [1, 1], [1, 2],  [2, 2]  ]

*/



// Solution
function generatePairs(n) {
  const res = [];
  for(let a = 0; a <= n; a++) {
    for(let b = a; b <= n; b++) {
      res.push([a,b]);
    }
  }
  return res;
}



const generatePairs = (n) => 
    Array.from( {length: n+1}, (_,a) => 
        Array.from ( {length: n - a + 1 }, (_,j) => [a, a+j]))
    .flat();



// Test Codes
console.log( generatePairs(2), [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ], `generatePairs(2)`);
