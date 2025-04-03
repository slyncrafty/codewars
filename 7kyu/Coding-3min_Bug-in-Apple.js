/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/javascript
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.
Task:

Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
*/



// Solution
function sc(apple){
    const row = apple.findIndex(row => row.includes("B"));
    const col = apple[row].indexOf("B");
    return [row,col];
}

// Test Code
var apple=[
    ["B","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ] // answer=[0,0];
console.log(sc(apple)) 
    apple=[
    ["A","A","A","A","A"],
    ["A","B","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ] //answer=[1,1];
console.log(sc(apple)) 
 
    apple=[
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","B","A","A","A"]
    ] //answer=[4,1];
console.log(sc(apple)) 
