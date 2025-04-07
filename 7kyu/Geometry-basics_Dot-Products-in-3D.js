/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e3ea29a33b52c1dc0000c0
/* ========== ========== ========== ========== ========== ==========*/
/*
Geometry Basics: Dot Product in 3D

Description:

This series of katas will introduce you to basics of doing geometry with computers.

Vector objects have x, y, and z attributes.

Write a function calculating dot product of Vector a and Vector b.

You can read more about dot product on Wikipedia.

Tests round answers to 6 decimal places.

*/



// Solution
// function dotProduct(v1, v2) {
//     return v1.x * v2.x + v1.y * v2.y + v1.z *v2.z;
// }

// using deconstructing
const dotProduct = ({x, y, z}, {x: x, y: y, z: z}) => x * x + y * y + z * z;


// Test Code
dotProduct(new Vector(2,0,-1), new Vector(0,-2,1)); // -1
dotProduct(new Vector(1,1,1), new Vector(2,-2,2));  //  2
dotProduct(new Vector(7,2.5,-3), new Vector(0.4,-0.9,0.2)); //  -0.05