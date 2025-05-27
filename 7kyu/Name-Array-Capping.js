/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5356ad2cbb858025d800111d
/* ========== ========== ========== ========== ========== ==========*/
/*
Name Array Capping

Description:
Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
Examples

["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

*/



// Solution
function capMe(names) {
  return names.map((name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  });
}



// Test Codes
console.log(capMe(['johnny']), ['Johnny']); 
console.log(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);
