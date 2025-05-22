/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5925acf31a9825d616000e74
/* ========== ========== ========== ========== ========== ==========*/
/*
Friday the 13th Birthday

Description:

It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

Ruby, Python, Crystal:

counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7

JavaScript:

var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;

PHP:

$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;

Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

Happy Friday the 13th!
*/


// Solution
function killcount(counselors, jason){
  return counselors.filter(e => e[1] < jason).map(e => e[0]);
}



// Test Codes
let counselors = [["Tiffany", 4],["Jack", 6],["Megan", 7],["Tyler", 3]];
console.log(killcount(counselors, 4), [ "Tyler" ]);  
let counselors2 = [["Rod", 12],["Bill", 19],["Kane", 15],["Dexter", 12]];
console.log(killcount(counselors2, 15), [ "Rod", "Dexter" ]);
