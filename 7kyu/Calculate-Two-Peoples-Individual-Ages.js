/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1
/* ========== ========== ========== ========== ========== ==========*/
/*
Calculate Two People's Individual Ages

Description:

*/



// Solution
function getAges(sum,difference){
  if(sum < 0 || difference < 0) return null;
  const num2 = (sum - difference) / 2
  if(num2 < 0) return null;
  const num1 = sum - num2;
  return num1 < 0 ? null : [num1, num2];
};



// Test Codes
console.log(getAges(24,4), [14,10]);
console.log(getAges(63,-14), null);