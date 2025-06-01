/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/595fb7d8de9d34743f000162
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

It was a long, hard voyage with many battles, but finally you've found Captain Blackbeard's treasure room. It's full of treasure chests! But they all have combination locks.
The locks:

Each lock has two or more numbers anywhere from 1 to 100 000. They are labeled with letters, but the letters do not change (they're just labels). Examples:

A (number reel) B (number reel)
E (number reel) R (number reel) Y (number reel)
The Clues:

Because Blackbeard had such a poor memory, he's written clues on the bottom of each chest. Example:

Clue: "A2B4C6"

You figure out that if you divide each number by the greatest common factor, it gives you the correct code to the chest. Examples:

Clue: "A2B4C6"

Gretest common factor = 2
2 / 2 = 1
4 / 2 = 2
6 / 2 = 3

Code: "A1B2C3"

More examples:

Clue: "T3Y3U9E6" Code: "T1Y1U3E2"
Clue: "M3H7" Code: "M3H7"
Clue: "Y14U7I7P21 Code: "Y2U1I1P3"
Task:

Write a function treasureCode(), that accepts a String parameter and returns the correct code as a String.

Input: String. Two or more letter number combinations. The letter will be one uppercase character A-Z. The number can be from 1 to 100 000.

Output: String.
*/



// Solution
// function finds gcd recursively
function gcd(a, b) {
  if(a === 0) return b;
  return gcd(b % a, a);
}

// function finds gcd for given array of numbers
function gcdFromArray(arr) {
  arr = arr.map(Number);
  let res = arr[0];
  for(let i = 1; i < arr.length; i++) {
    res = gcd(arr[i], res);
    if(res === 1) return 1;
  }
  return res;
}


function treasureCode(clue) {
  // find gcd of the numbers in the clue
  const numbers = clue.match(/\d+/g);
  const gcd = gcdFromArray(numbers);
  
  // Regex to match [alphabet][number] pattern
  const pattern = /([A-Za-z])(\d+)/g;
  // .replace() using regex and a callback function.
  return clue.replace(pattern, (_, char, num) => {
    return char + (parseInt(num) / gcd);
  });
}



/* ## Lessons Learned:
** Extract pattern from given string and found gcd. Using .replace method to update numbers 
** 
** .replace() method can take regex and a callback function (match, group1, group2, ... ) => {}
** array.map(Number) to make sure given array contains numbers.
*/

// More concise solution using .reduce method to apply gcd through array instead of the additional helper function. 
function treasureCode(clue) {
  const numRegex = /\d+/g
  const numbers = clue.match(numRegex).map(Number);
  const gcdFactor = numbers.reduce((a, b) => gcd(a,b));
  return clue.replace(numRegex, n => +n / gcdFactor);
}



// Test Codes
const tests = [
    {
        str: "A2B1",
        expected: "A2B1", 
    },
    {
        str: "A112B333C4",
        expected: "A112B333C4", 
    },
    {
        str: "R2D2C4",
        expected: "R1D1C2", 
    }
]

for (const test of tests){
    console.log(test.expected === treasureCode(test.str));
}