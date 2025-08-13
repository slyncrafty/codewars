/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/595aa94353e43a8746000120
/* ========== ========== ========== ========== ========== ==========*/
/*
Lost number in number sequence

Description:
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

*/



// Solution
function findDeletedNumber(arr, mixArr) {
    if(arr.length === 0 || arr.length === mixArr.length) return 0;
    const arrSum = arr.reduce((acc, curr) => acc+curr, 0);
    const mixSum = mixArr.reduce((acc, curr) => acc+curr, 0);
    return arrSum - mixSum;
}



// Test Codes
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion');
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion');
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion');
