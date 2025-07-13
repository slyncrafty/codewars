/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5932c94f6aa4d1d786000028/
/* ========== ========== ========== ========== ========== ==========*/
/*
number with 3 roots.

Description:
In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x:

r^n=x,

Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0), return true if it exists, false if not.

// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2
perfectRoots(256) // returns true 

*/



// Solution
function perfectRoots(n) {
    if(n < 0) return false;
    if(n === 0) return true;
    const r2nd = Math.sqrt(n);
    if(r2nd < 0 || !Number.isInteger(r2nd)) return false;
    const r4th = Math.sqrt(r2nd);
    if(r4th < 0 || !Number.isInteger(r4th)) return false;
    const r8th = Math.sqrt(r4th);
    if(r8th < 0 || !Number.isInteger(r8th)) return false;
    return true;
}



// Test Codes
console.log(perfectRoots(256), true);
console.log(perfectRoots(1000), false);
console.log(perfectRoots(6561), true);