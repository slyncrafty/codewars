/*
Array Manipulation

Description:

Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

the desired output is

[18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

Your task is to create a function that takes in an array as its argument, manipulates the array as described above, then return the resulting array.

Note: Return a new array, rather than modifying the passed array.

*/



// Solution

function arrayManip(array){
    const res = new Array(array.length).fill(-1);
    const sortedArray = [];
    
    for(let i = array.length-1; i >= 0 ; i--)
    {
      const val = array[i];
      const idx = BST(sortedArray, val);
      
      if(idx < sortedArray.length)
      {
        res[i] = sortedArray[idx];
      }
      sortedArray.splice(idx, 0, val);
    }
  
    return res;
}
    
function BST(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right)
    {
        const mid = Math.floor((right+left)/2);
        if(arr[mid] > target)
        {
        right = mid - 1;
        }
        else
        {
        left = mid + 1;
        }
    }
    return left; // return the find the next greater element
}