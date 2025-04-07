/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e440d8acfd3edfb2000aee
/* ========== ========== ========== ========== ========== ==========*/
/*
Geometry Basics: Cross Product in 3D

Description:
This series of katas will introduce you to basics of doing geometry with computers.

Vector objects (struct in C) have x, y, and z attributes.

Write a function calculating the cross product of Vector a and Vector b, the result should be a Vector object.

You can read more about cross product on Wikipedia.(a x b = ||a||||b||sin(theta)n)
s1 = a2b3 - a3b2
s2 = a3b1 - a1b3
s3 = a1b2 - a2b1

Tests round answers to 6 decimal places.
*/



// Solution
function crossProduct(v1, v2) {
    let {x:a1, y:a2, z:a3} = v1;
    let {x:b1, y:b2, z:b3} = v2;
    return new Vector(a2*b3 - a3*b2, a3*b1 - a1*b3, a1*b2 - a2*b1);
}

// Test Code
crossProduct(new Vector(2,0,-1), new Vector(0,-2,1)); // new Vector(-2,-2,-4)
crossProduct(new Vector(0,-2,1), new Vector(2,0,-1)); // new Vector(2,2,4)
crossProduct(new Vector(1,1,1), new Vector(2,-2,2));  // new Vector(4,0,-4)
crossProduct(new Vector(7,2.5,-3), new Vector(0.4,-0.9,0.2)); // new Vector(-2.2,-2.6000000000000005,-7.3)