/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5574940eae1cf7d520000076
/* ========== ========== ========== ========== ========== ==========*/
/*
Complete The Pattern #6 - Odd Ladder

Description:
You have to write a function which creates the following odd-numbers staircase pattern up to the desired number of rows.

    If the input is <= 0, return an empty string
    If the input is even, round it down to the odd number that precedes it.
    There are no spaces in the pattern
    The lines are separated by a newline character (\n)

Examples:

pattern(9):

1
333
55555
7777777
999999999

pattern(6):

1
333
55555

*/



// Solution
function pattern(n){
  if(n <= 0) return "";
  let output=[];
  if(n % 2 === 0) n = Math.floor(n) - 1;
  for(let i = 1; i <= n; i+=2) {
    output.push(String(i).repeat(i));
  }
  return output.join("\n");
}



// Test Codes
const strictEqual = (actual , expected) => {
    if(actual === expected) {
        console.log("Correct!");
    } else {
        console.log("Incorrect!");
    }
}
strictEqual(pattern(4),"1\n333");
strictEqual(pattern(1),"1");
strictEqual(pattern(5),"1\n333\n55555");
strictEqual(pattern(0),"");
strictEqual(pattern(-25),"");