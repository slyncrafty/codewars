/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/564f458b4d75e24fc9000041
/* ========== ========== ========== ========== ========== ==========*/
/*
Finding Remainder Without Using '%' Operator

Description:
Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!
Assumption

Dividend will always be greater than or equal to divisor.
Notes

Make sure that the implemented remainder function works exactly the same as the Modulus operator (%).

*/



// Solution
const remainder = (D, d) => d ? D - d * Math.floor(D / d) : null;


// Test Codes
const simpleTest = (a, b) => {
    if(a === b) console.log("Correct");
    else console.error("Incorrect")
}
simpleTest( remainder(3,2), 1);
simpleTest( remainder(19,2), 1);
simpleTest( remainder(10,2), 0);
simpleTest( remainder(34,7), 6);
simpleTest( remainder(27,5), 2);