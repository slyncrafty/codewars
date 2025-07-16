/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/
/* ========== ========== ========== ========== ========== ==========*/
/*
String repeat

Description:
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/



// Solution
function repeatStr (n, s) {
  return s.repeat(n);
}



// Test Codes
console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
console.log(repeatStr(0, ""), "");
console.log(repeatStr(0, "I"), "");
console.log(repeatStr(5, ""), "");
console.log(repeatStr(6, "I"), "IIIIII");
console.log(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");