/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a4e3782880385ba68000018
/* ========== ========== ========== ========== ========== ==========*/
/*
Balanced Number (Special Numbers Series #1 ) 

Description:
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
The task

Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
Examples

    7 ==> return "Balanced"

    Explanation:

    middle digit(s): 7
    sum of all digits to the left of the middle digit(s) -> 0
    sum of all digits to the right of the middle digit(s) -> 0
    0 and 0 are equal, so it's balanced.

    295591 ==> return "Not Balanced"

    Explanation:

    middle digit(s): 55
    sum of all digits to the left of the middle digit(s) -> 11
    sum of all digits to the right of the middle digit(s) -> 10
    11 and 10 are not equal, so it's not balanced.

    959 ==> return "Balanced"

    Explanation:

    middle digit(s): 5
    sum of all digits to the left of the middle digit(s) -> 9
    sum of all digits to the right of the middle digit(s) -> 9
    9 and 9 are equal, so it's balanced.

    27102983 ==> return "Not Balanced"

    Explanation:

    middle digit(s): 02
    sum of all digits to the left of the middle digit(s) -> 10
    sum of all digits to the right of the middle digit(s) -> 20
    10 and 20 are not equal, so it's not balanced.

*/



// Solution
function balancedNum(number)
{
  const numString = number.toString().split('').map(e => parseInt(e));
  const len = numString.length;
  if(len <= 2) return "Balanced";
  const mid = len / 2;
  let range = (len % 2 === 0) ? mid - 1 : mid;
  const leftSum = numString.slice(0, range).reduce((acc, curr) => acc + curr, 0);
  const rightSum = numString.slice(-range).reduce((acc, curr) => acc + curr, 0);
  return (leftSum === rightSum) ? "Balanced" : "Not Balanced"
}



// Test Codes
console.log(balancedNum(7), 'Balanced')
console.log(balancedNum(959), 'Balanced')
console.log(balancedNum(13), 'Balanced')
console.log(balancedNum(432), 'Not Balanced')
console.log(balancedNum(424), 'Balanced')
console.log(balancedNum(1024), 'Not Balanced')
console.log(balancedNum(66545), 'Not Balanced')
console.log(balancedNum(295591), 'Not Balanced')
console.log(balancedNum(1230987), 'Not Balanced')
console.log(balancedNum(56239814), 'Balanced')