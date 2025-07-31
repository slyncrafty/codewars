/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/599da159a30addffd00000af
/* ========== ========== ========== ========== ========== ==========*/
/*
Collision Detection

Description:
Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}

If a collision is detected, return true. If not, return false.
*/



// Solution
function collision(x1, y1, radius1, x2, y2, radius2) {
  const minDist = radius1 + radius2;
  const eucDist = (x1 - x2)**2 + (y1 - y2)**2
  return Math.sqrt(eucDist) <= minDist ? true : false
}



function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.hypot(x1 - x2, y1 - y2) <= radius1 + radius2;
}



// Test Codes
console.log(collision(1, 1, 1, 1.1, 1.1, 0.1), true);
console.log(collision(-1, 1, 10, -10.1, 1.1, 1), true);
console.log(collision(-5, 5, 5.0001, 5, -5, 5*Math.sqrt(5)), true);

console.log(collision(1, 1, 0.01, 1, 1.1, 0.01), false);
console.log(collision(-1, 1, 6, -10.1, 1.1, 1), false);
console.log(collision(-5, 5, 5.0001, 5, -5, 4*Math.sqrt(5)), false);