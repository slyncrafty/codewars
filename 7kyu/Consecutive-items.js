/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5f6d533e1475f30001e47514/
/* ========== ========== ========== ========== ========== ==========*/
/*
Consecutive items

Description:
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

*/



// Solution
function consecutive (arr, a, b) {
  return arr.some((val, i) => 
    (val === a && arr[i+1] === b) || 
    (val === b && arr[i+1] === a)
  ); 
}



function consecutive (arr, a, b) {
    const s = arr.join(',');
    const regex = new RegExp(`(${a},${b}|${b},${a})`);
    return regex.test(s);
}



// Test Codes
console.log(consecutive([1, 3, 5, 7], 3, 7), false);
console.log(consecutive([1, 3, 5, 7], 3, 1), true);
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
