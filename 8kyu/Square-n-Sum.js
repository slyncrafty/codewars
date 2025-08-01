/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/515e271a311df0350d00000f/
/* ========== ========== ========== ========== ========== ==========*/
/*
Square(n) Sum

Description:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

*/



// Solution
function squareSum(numbers){
  return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
}



// Test Codes
console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
console.log(squareSum([-1,-2]), 5);
console.log(squareSum([-1,0,1]), 2);