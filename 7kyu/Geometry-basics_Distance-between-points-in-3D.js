/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58dceee2c9613aacb40000b9
/* ========== ========== ========== ========== ========== ==========*/
/*
Geometry Basics: Distance between points in 3D

Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes. For Haskell there are Point data types described with record syntax with fields x, y, and z.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. Tests in Haskell will not round.

*/



// Solution
// function distanceBetweenPoints(a,b){
//     return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z -b.z, 2))
// }

const distanceBetweenPoints = ({x:x1, y:y1, z:z1}, {x:x2, y:y2, z:z2}) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
}



// Test Code
distanceBetweenPoints(new Point(1, 3, 5), new Point(1, 3, 5)); // 0
distanceBetweenPoints(new Point(1, 3, 6), new Point(4, 3, 2)); // 5
distanceBetweenPoints(new Point(-10.2, 12.5, 8.4), new Point(0.3, 14.7, -2.8)); // 15.509030
