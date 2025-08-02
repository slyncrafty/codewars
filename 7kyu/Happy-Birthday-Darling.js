/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5e96332d18ac870032eb735f/
/* ========== ========== ========== ========== ========== ==========*/
/*
Happy Birthday, Darling!

Description:
As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

Note: input will be always > 21
Examples:

32  -->  "32? That's just 20, in base 16!"
39  -->  "39? That's just 21, in base 19!"

*/



// Solution
function newAge(n) {
  const base = (n%2===0) ? n/2 : (n-1)/2;
  const newN = 20 + n % base;
  return `${n}? That's just ${newN}, in base ${base}!`
}



// Test Codes
console.log(newAge(32), "32? That's just 20, in base 16!");
console.log(newAge(39), "39? That's just 21, in base 19!");
console.log(newAge(22), "22? That's just 20, in base 11!");
console.log(newAge(65), "65? That's just 21, in base 32!");
console.log(newAge(83), "83? That's just 21, in base 41!");
