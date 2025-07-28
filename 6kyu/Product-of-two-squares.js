/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/558298453b0435384e000101
/* ========== ========== ========== ========== ========== ==========*/
/*
Product of two squares

Description:
Given a strictly positive integer n, the goal of this Kata is to find every possible pair of integers (a, b) whose product of their squares is equal to n:
n=a²∗b²n = a² * b²n=a²∗b²

Return a 2D array of these pairs.

    The order of elements within a pair does not matter: [2, 3] is considered the same as [3, 2].
    The order of the pairs within the array does not matter: [ [1, 2], [3, 4] ] is the same as [ [3, 4], [2, 1] ].
    The array should not contain duplicate pairs. [2, 1] is a duplicate of [1, 2].
    If there are no pairs that satisfy the equation, return an empty array [].

Examples

    256 --> [ [1, 16], [2, 8], [4, 4] ] (or [ [4, 4], [16, 1], [2, 8] ] , or [ [1, 16], [8, 2], [4, 4] ]... etc.)
    2 --> []
    1 --> [ [1, 1] ]
    81 --> [ [1, 9], [3, 3] ]


*/



// Solution
function squareProduct(n) {
    const res = [];
    
    for(let i = 1; i * i <= n; i++) {
      if(n % (i*i) !== 0) continue;
      const j = Math.sqrt(n / (i*i));
      if(Number.isInteger(j) && i <= j) {
        res.push([i,j]);
      }
    }
    return res;
}



// Test Codes
console.log(doTest(16, [[1,4],[2,2]]));
console.log(doTest(256, [[1,16],[2,8],[4,4]]));
console.log(doTest(81, [[9, 1],[3, 3]]));
console.log(doTest(1, [[1,1]]));
console.log(doTest(2, []));
