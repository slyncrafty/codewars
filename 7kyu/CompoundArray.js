/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56044de2aa75e28875000017
/* ========== ========== ========== ========== ========== ==========*/
/*
CompoundArray

Description:
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}

*/



// Solution
function compoundArray(a, b) {
    const res = [];
    const max = Math.max(a.length, b.length);
    for(let i = 0; i < max; i++) {  
        if(i < a.length) res.push(a[i]);
        if(i < b.length) res.push(b[i]);
    }
    return res;
}



// Test Codes
console.log(compoundArray([11, 12], [21, 22, 23, 24]), [11, 21, 12, 22, 23, 24]);
console.log(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]), [2147483647,9,2147483646,2147483645,2147483644,2147483643]);
console.log(compoundArray([214,215,216,217,218], []), [214,215,216,217,218]);
console.log(compoundArray([], [314,315,316,317,318]), [314,315,316,317,318]);
