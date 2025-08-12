/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a662a02e626c54e87000123
/* ========== ========== ========== ========== ========== ==========*/
/*
Extra Perfect Numbers (Special Numbers Series #7)

Description:
An extra perfect number is a positive integer whose first and last bits in binary representation are set (i.e., both are 1).
Task

Given a positive integer N, return all the extra perfect numbers in the range from 1 to N, inclusive.
Warm-up (Recommended)

Part of the Playing With Numbers Series
Notes

    The input is always a positive integer.
    The returned list/array should contain the extra perfect numbers in ascending order, from lowest to highest.
    Extra perfect numbers correspond to binary representations that start and end with 1.

Input >> Output Examples

extraPerfect(3)  ==>  return {1, 3}

Explanation:

    1 in binary is 1 → first and last bits are set.
    3 in binary is 11 → first and last bits are set.

extraPerfect(7)  ==>  return {1, 3, 5, 7}

Explanation:

    5 in binary is 101 → first and last bits are set.
    7 in binary is 111 → first and last bits are set.

*/



// Solution
function extraPerfect(n){
    if(n <= 0) return [];
    const res = [];
    for(let i = 1; i <= n; i++) {
      if(i % 2 === 1) res.push(i);
    }
    return res;
}



// Test Codes
console.log(extraPerfect(3), [1,3], 'extraPerfect(3)');
console.log(extraPerfect(5), [1,3,5], 'extraPerfect(5)');
console.log(extraPerfect(7), [1,3,5,7], 'extraPerfect(7)');
console.log(extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27], 'extraPerfect(28)');
console.log(extraPerfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 'extraPerfect(39)');
