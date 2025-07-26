/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52988f3f7edba9839c00037d
/* ========== ========== ========== ========== ========== ==========*/
/*
The reject() function

Description:
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

*/



// Solution
function reject(array, predicate) {
    return array.filter((e, i, a) => !predicate(e, i, a));
}



// Test Codes
console.log(reject(['a', 'b', 3, 'd'], x => typeof x === 'number'), ['a', 'b', 'd']);
console.log(reject(['a', 'b', 3, 'd'], x => typeof x === 'string'), [3]);
console.log(reject([1, 2, 3, 4, 5, 6], x => x % 2 === 0), [1, 3, 5]);