/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Disarium Number (Special Numbers Series #3)

Description:
Definition

Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task

Given a number, Find if it is Disarium or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .
    Return the result as String

Input >> Output Examples

disariumNumber(89) ==> return "Disarium !!"

Explanation:

    Since , 81 + 92 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!"

Explanation:

Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/



// Solution
function disariumNumber(n){
    const sum = String(n).split('')
      .reduce((sum, curr, i) => sum + Number(curr)**(i+1),0);
    return sum === n ? "Disarium !!" : "Not !!";
}



// Test Codes
console.log(disariumNumber(89),"Disarium !!");
console.log(disariumNumber(564),"Not !!");
console.log(disariumNumber(1024),"Not !!");
console.log(disariumNumber(135),"Disarium !!");
console.log(disariumNumber(136586),"Not !!");