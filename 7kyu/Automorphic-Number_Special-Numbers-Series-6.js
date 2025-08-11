/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Automorphic Number (Special Numbers Series #6)

Description:
A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.
Task

Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"
Examples

    25 is an automorphic number, because 252=625 25^2 = 625 252=625 ends with 25, so return "Automorphic".
    13 is not an automorphic number, because 132=169 13^2 = 169 132=169 does not end with 13, so return "Not!!".
    76 is an automorphic number, because 762=5776 76^2 = 5776 762=5776 ends with 76, so return "Automorphic".
    225 is not an automorphic number, because 2252=50625 225^2 = 50625 2252=50625 does not end with 225, so return "Not!!".
    625 is an automorphic number, because 6252=390625 625^2 = 390625 6252=390625 ends with 625, so return "Automorphic".
    1 is an automorphic number, because 12=1 1^2 = 1 12=1 ends with 1, so return "Automorphic".
    6 is an automorphic number, because 62=36 6^2 = 36 62=36 ends with 6, so return "Automorphic".

*/



// Solution
function automorphic(n){
  return String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";
}



// Test Codes
console.log(automorphic(1), "Automorphic");
console.log(automorphic(3), "Not!!");
console.log(automorphic(6), "Automorphic");
console.log(automorphic(9), "Not!!");
console.log(automorphic(25), "Automorphic");
console.log(automorphic(53), "Not!!");
console.log(automorphic(76), "Automorphic");
console.log(automorphic(95), "Not!!");
console.log(automorphic(625), "Automorphic");
console.log(automorphic(225), "Not!!");
console.log(automorphic(100), "Not!!");