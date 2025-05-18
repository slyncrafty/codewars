/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5bdc191306a8a678f6000187
/* ========== ========== ========== ========== ========== ==========*/
/*
Shift Left

Description:

You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

    By applying a move to the string "where", the result is the string "here".
    By applying a move to the string "a", the result is an empty string "".

Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.
Notes

    Both strings consist of lowercase latin letters.
    If the string is already empty, you cannot perform any more delete operations.

*/



// Solution
function shiftLeft(s, t) {
    let i = s.length - 1; 
    let j = t.length - 1; 
    while(i >= 0 && j >= 0 && s[i] === t[j]){
        i--;
        j--;
    }
    return i+1 + j+1;
}


// Test Codes
console.log(shiftLeft("test", "west"), 2);
console.log(shiftLeft("test", "yes"), 7);
console.log(shiftLeft("b", "ab"), 1);