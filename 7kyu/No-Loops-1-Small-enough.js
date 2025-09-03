/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2
/* ========== ========== ========== ========== ========== ==========*/
/*
No Loops 1 - Small enough?

Description:
*** No Loops Allowed ***

You will be given an array and a limit value, you must check that all values in the array are less than or equal to limit. If they all are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.

*/



// Solution
function smallEnough(a, limit){
    return Math.max(...a) <= limit;
}



function smallEnough(a, limit){
    return a.reduce((ok, curr) => ok && curr <= limit, true)
}



// Test Codes
const strictEqual = (fx, expected) => {
    if(fx === expected) { console.log("Correct") }
    else console.error("Incorrect");

}
strictEqual(smallEnough([66, 101], 200), true);
strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);