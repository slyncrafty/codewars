/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/51f082ba7297b8f07f000001
/* ========== ========== ========== ========== ========== ==========*/
/*
Find within array

Description:
We'll create a function that takes in two parameters:

    a sequence (length and types of items are irrelevant)
    a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.

Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3

*/



// Solution
function findInArray(array, iterator) {
  if(!Array.isArray(array)) return -1;
  for(let i = 0; i < array.length; i++) {
    if(iterator(array[i], i)) return i;
  }
  return -1;
};



// Test Codes
const deepEqual = (a, b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        return a.every((val, i) => deepEqual(val, b[i]));
    }
    return false;
}

const assertEq = (actual, expected) => {
    if(!deepEqual(actual, expected))
        console.error(`Incorrect!`);
    else
        console.log(`Correct!`);
}

let trueIfEven = function(v, i) { return v % 2 === 0; }
let neverTrue = function(v, i) { return false; }
let trueIfValueEqualsIndex = function(v, i) { return v === i; }
let trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }

assertEq(findInArray([], trueIfEven) , -1);
assertEq(findInArray([1,3,5,6,7], trueIfEven) , 3);
assertEq(findInArray([2,4,6,8], trueIfEven) , 0);
assertEq(findInArray([2,4,6,8], neverTrue) , -1);
assertEq(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex) , 4);
assertEq(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex) , 4);
assertEq(findInArray(["bc","af","d","e"], trueIfLengthEqualsIndex) , -1);