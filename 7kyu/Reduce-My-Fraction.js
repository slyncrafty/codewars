/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/576400f2f716ca816d001614 
/* ========== ========== ========== ========== ========== ==========*/
/*
Reduce My Fraction

Description:
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.
*/



// Solution
function reduce(fraction) {
  const [a,b] = fraction;
  const gcd = (a,b) => {
    if(!b) return a;
    return gcd(b, a % b);
  }
  const div = gcd(a,b);
  return [a/div, b/div];
}



// Test Codes
const deepEqual = (a, b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        return a.every((e,i) => deepEqual(e, b[i]));
    }
    return false;
}
const test = (input, expected, message) => {
  console.log(deepEqual(reduce(input), expected, message));
}


const tests = [
      [[60, 20], [3, 1]],
      [[80, 120], [2, 3]],
      [[4, 2], [2, 1]],
      [[45, 120], [3, 8]],
      [[1000, 1], [1000, 1]],
      [[1, 1], [1, 1]],
    ];

const testsL = [
      [[10956590, 13611876], [30605, 38022]],
      [[35884747, 5576447], [76841, 11941]],
      [[24622321, 24473455], [42673, 42415]],
      [[4255316, 11425973], [17228, 46259]],
    ];


for (const [input, expected] of tests) {
    test(input, expected);
}

for (const [input, expected] of testsL) {
    test(input, expected);
}