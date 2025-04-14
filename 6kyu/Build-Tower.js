/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:
Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/



// Solution
function towerBuilder(nFloors) {
    const width = nFloors * 2 - 1; 
    const result = [];
    for(let r = nFloors-1; r >= 0 ;r--) {
      const line = ' '.repeat(r) + '*'.repeat(width-2*r) + ' '.repeat(r)
      result.push(line);
    }
    return result;
}



// Test Codes
console.log(towerBuilder(1));   // ["*"]
console.log(towerBuilder(2));   // [" * ","***"]
console.log(towerBuilder(3));   // ["  *  "," *** ","*****"]