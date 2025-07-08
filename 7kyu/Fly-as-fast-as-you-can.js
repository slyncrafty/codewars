/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58356a94f8358058f30004b5
/* ========== ========== ========== ========== ========== ==========*/
/*
Drone Fly-By

Description:
Scenario:

Two trains are on the same line, 60 miles apart, heading towards each other, each traveling at 30 mph. A fly that can travel at 60 mph leaves one engine flying towards the other. Upon reaching the other engine, it instantaneously turns around, and heads back to the other engine. This is repeated until the two trains crash and the fly is annihilated at the same time.
Problem:

Write a function to calculate how far the fly has traveled by the time the trains collide.

Your function should be able to take varying inputs:

    dist = the initial distance between the two trains
    train = the speed of each train
    fly = the speed of the fly

Note if the trains are not moving then the poor fly is confused, and enters a state of divine singularity so return null.
*/



// Solution
function flyTime (dist, train, fly) {
  if(train <= 0)  return null;
  return dist / (2 * train) * fly;

}



// Test Codes
console.log(flyTime(100, 50, 30), 30);
console.log(flyTime(100, 0, 30), null);