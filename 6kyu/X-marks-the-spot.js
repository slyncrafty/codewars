/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55cc20eb943f1d8b11000045
/* ========== ========== ========== ========== ========== ==========*/
/*
X marks the spot!

Description:
Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle. The X will be represented by 1's and the rest will be 0's.
Examples

5 --->   [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]]

6  --->  [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]]


*/



// Solution
function x(n) {
  return Array.from({ length: n }, (_, i) => 
            Array.from( { length: n}, (_, j) => (i === j || i + j === n - 1) ? 1 : 0));

}


// Test Codes
function deepEqual(a, b) {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        return a.every((val, i) => deepEqual(val, b[i]));
    }
    return false;
}

function assertEq(actual, expected, msg="") {
    if(!deepEqual(actual, expected)) {
        console.error(`Incorrect! ${msg}: actual ${actual} should match expected ${expected}`);
    } else {
        console.log(`Correct! ${msg}`);
    }
}

assertEq(x(1), [[1]]);
assertEq(x(2), [[1, 1], [1, 1]]);
assertEq(x(3), [[1, 0, 1], [0, 1, 0], [1, 0, 1]]);
assertEq(x(4), [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]);
assertEq(x(5), [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]);
assertEq(x(6), [[1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1]]);
