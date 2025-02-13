/*
Array2Binary addition

Description:

Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

[1, 2]      --> "11"
[1, "a", 2] --> false / False (depending on the language)

*/



// Solution

function arr2bin(arr){
    if(arr.length === 0) return "0";
    if(!arr.every(Number.isInteger))  return false;
    let sum = arr.reduce((acc, curr) => acc += curr, 0);
    return sum.toString(2);
}