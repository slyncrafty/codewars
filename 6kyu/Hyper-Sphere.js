/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52de9bd621c71b919c000592
/* ========== ========== ========== ========== ========== ==========*/
/*
Hyper Sphere

Description:
You will be given an array of cordinates and a radius. The function should return if the coordinates describe a point within the given radius of the origin.

In two dimensions the condition that any [x, y] coordinate lies in a given radius (= a circle) is:

x^2 + y^2 ≤ r^2

This generalises to higher dimensions as follows:

x^2 + y^2 + z^2 + ... ≤ r^2

Note: a point with no coordinates should return true, as in zero dimensions all points are the same point
*/




// Solution
function inSphere(coords, radius){ 
    return coords.map((e) => e**2).reduce((sum,curr) => sum+curr,0) <= radius**2;
}



// Test Cases
const testCases = [
    [[0.5, 0.5], 1, true],
    [[0.5, 0.5, 0.5], 1, true],
    [[0.5, 0.5, 0.5, 0.5, 0.5], 1, false],
    [[1, 0], 1, true],
    [[3, 0], 3, true],
    [[1, 0, 0.1], 1, false],
    [[3, 4, 5], 6, false],
    [[], 1, true],
    [[0.5, 0.5, -0.5, -0.5, -0.5], 2, true],
    [[0, 0, 0, 0, 0], 0, true],
    [[0.1, -2, -3], 0, false],
  ];
  
for (let [coords, radius, expected] of testCases) {
        const actual = inSphere(coords, radius);
        console.log(`${JSON.stringify(coords)}, ${radius})`, (actual === expected))
    }