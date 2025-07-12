/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a30e7e9c5e28454790000c1
/* ========== ========== ========== ========== ========== ==========*/
/*
The Spider and the Fly (Jumping Spider)

Description:
Background

A spider web is defined by

    "rings" numbered out from the centre as 0, 1, 2, 3, 4

    "radials" labelled clock-wise from the top as A, B, C, D, E, F, G, H

Here is a picture to help explain:
[source: imgur.com]
Web Coordinates

As you can see, each point where the rings and the radials intersect can be described by a "web coordinate".

So in this example the spider is at H3 and the fly is at E2
Kata Task

Our friendly jumping spider is resting and minding his own spidery business at web-coordinate spider.

An inattentive fly bumbles into the web at web-coordinate fly and gets itself stuck.

Your task is to calculate and return the distance the spider must jump to get to the fly.
Example

The solution to the scenario described by the picture is 4.63522
Notes

    The centre of the web will always be referred to as A0
    The rings intersect the radials at evenly spaced distances of 1 unit

*/



// Solution
const pi = Math.PI;
const radialMap = {A:0, B: 1/4*pi, C: 1/2*pi, D: 3/4*pi, E: pi, F: 5/4*pi, G: 6/4*pi, H: 7/4*pi}

// parse a coordinate 'H3' to {rad:7/4*pi, rin:3}
const parseCoord = (coord) => {
  const [radial, ...ring] = coord;
  return {rad: radialMap[radial], rin: parseInt(ring.join(''))};
}

var spiderToFly = function(spider, fly) {
  // destructing
  const {rad:angle1, rin:num1} = parseCoord(spider);
  const {rad:angle2, rin:num2} = parseCoord(fly);
  // calculate distance in polar coordinate system
  const angle = angle2 - angle1;
  const x1 = num1 * Math.cos(angle1), y1 = num1 * Math.sin(angle1);
  const x2 = num2 * Math.cos(angle2), y2 = num2 * Math.sin(angle2);
  return Math.hypot(x2-x1, y2-y1);
}



// Test Codes
console.log(spiderToFly("H3", "E2"), 4.63522);
console.log(spiderToFly("C2", "C2"), 0);
console.log(spiderToFly("A0", "A0"), 0);
console.log(spiderToFly("F3", "F3"), 0);
console.log(spiderToFly("H1", "H2"), 1);
console.log(spiderToFly("H1", "H4"), 3);
console.log(spiderToFly("G4", "C4"), 8);
console.log(spiderToFly("G4", "C3"), 7);