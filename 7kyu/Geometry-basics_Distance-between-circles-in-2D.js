/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e3031ce265671f6a000542
/* ========== ========== ========== ========== ========== ==========*/
/*
Geometry Basics: Distance between circles in 2D

Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius which is a number.

Write a function calculating distance between Circle a and Circle b.

If they're overlapping or one is completely within the other, just return zero.

Tests round answers to 6 decimal places, so you don't need to round them yourselves.
*/



// Solution
function distanceBetweenCircles(a, b){
    const centerDist = Math.sqrt((a.center.x - b.center.x) ** 2 + (a.center.y - b.center.y) ** 2);
    const closestDist = centerDist - (a.radius + b.radius);
    return closestDist <= 0 ? 0 : closestDist;
}



// Test Code
a = Circle(Point(10, 60), 11);
b = Circle(Point(40, 20), 7);
distanceBetweenCircles(a,b); // 32

a = Circle(Point(10, 60), 40);
b = Circle(Point(40, 20), 40);
distanceBetweenCircles(a,b); // 0

a = Circle(Point(100, 100), 50);
b = Circle(Point(102, 110), 10);
distanceBetweenCircles(a,b); // 0
