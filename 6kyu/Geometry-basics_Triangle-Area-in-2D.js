/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e4377c46e371aee7001262
/* ========== ========== ========== ========== ========== ==========*/
/*
Geometry Basics: Triangle Area in 2D

Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating area of a Triangle defined this way.
Area = 1/2 *(AB x AC) given triangle ABC
Tests round answers to 6 decimal places.
*/



// Solution
function triangleArea(triangle){
    const AB = { x: triangle.b.x - triangle.a.x, y: triangle.b.y - triangle.a.y };
    const AC = { x: triangle.c.x - triangle.a.x, y: triangle.c.y - triangle.a.y };
    const cross = AB.x * AC.y - AB.y * AC.x;
    return 0.5 * Math.abs(cross);
}


// Test Code
+triangleArea(new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))).toFixed(6);  // 600
+triangleArea(new Triangle(new Point(15, -10), new Point(40, 20), new Point(20, 50))).toFixed(6); // 675
