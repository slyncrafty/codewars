/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Highest and Lowest

Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/



// Solution
function highAndLow(numbers){
  const nums = numbers.trim().split(' ').map(e => Number(e));
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}



// Test Codes
console.log("Test 1", highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log("Test 2", highAndLow("1 2 3"), "3 1");