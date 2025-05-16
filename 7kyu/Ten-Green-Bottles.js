/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5838e2978bbc04b7cd000008
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

Who knows the nursery rhyme Ten Green Bottles?(https://www.youtube.com/watch?v=Ak7kedzR8bg)

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.

Task

Write some amazing code to reproduce the above lyrics starting from n green bottles!


    parameter n is 1 to 10
    newline terminates every line (including the last)
    don't forget the blank lines between the verses

*/



// Solution
function tenGreenBottles(n) {
  // Your code here
  const numToWordCount = ["no", "One", "Two", "Three", "Four", "Five", "Six", "Seven","Eight", "Nine", "Ten"];
  let song = "";
  
  for (let i = n; i > 0; i--){
    const curr = numToWordCount[i];
    const next = numToWordCount[i-1]
    const currBottlePlural = (i === 1) ? "bottle" : "bottles";
    const thirdLine = (i === 1) ? "If that one" : "And if one";
    const nextBottlePlural = (i === 2) ? "bottle" : "bottles";
    const rhyme = 
    `${curr} green ${currBottlePlural} hanging on the wall,\n`.repeat(2)+
    `${thirdLine} green bottle should accidentally fall,\n`+
    `There'll be ${next.toLowerCase()} green ${nextBottlePlural} hanging on the wall.\n`;
    song += rhyme;
    if (i > 1) song += '\n';
  }
  return song;
}  



// Test Codes
var expected = 
    "Two green bottles hanging on the wall,\n"+
    "Two green bottles hanging on the wall,\n"+
    "And if one green bottle should accidentally fall,\n"+
    "There'll be one green bottle hanging on the wall.\n"+
    "\n"+
    "One green bottle hanging on the wall,\n"+
    "One green bottle hanging on the wall,\n"+
    "If that one green bottle should accidentally fall,\n"+
    "There'll be no green bottles hanging on the wall.\n";
console.log(tenGreenBottles(2) === expected);