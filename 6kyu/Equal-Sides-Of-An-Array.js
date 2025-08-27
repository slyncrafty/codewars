/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
/* ========== ========== ========== ========== ========== ==========*/
/*
Equal Sides Of An Array

Description:
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.
For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.
Input

An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
Output

The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
Note

If you are given an array with multiple answers, return the lowest correct index.

*/



// Solution
function findEvenIndex(arr) {
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  let left = 0;
  
  for(let i = 0; i < arr.length; i++) {
    const right = arrSum - left - arr[i];
    if(left === right) return i;
    left += arr[i];
  }
  return -1;
}



function findEvenIndex(arr) {
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    let left = 0; 
    return arr.findIndex((x) => {
      const ans = (2*left+x === arrSum);
      left += x; 
      return ans;
    });
}



// Test Codes
const assertEq = (actual, expected) => {
    if(actual !== expected)
        console.error(`Incorrect!`);
    else
        console.log(`Correct!`);
}


assertEq(findEvenIndex([1,2,3,4,3,2,1]), 3);
assertEq(findEvenIndex([1,100,50,-51,1,1]), 1);
assertEq(findEvenIndex([1,2,3,4,5,6]), -1);
assertEq(findEvenIndex([20,10,30,10,10,15,35]), 3);
assertEq(findEvenIndex([20,10,-80,10,10,15,35]), 0);
assertEq(findEvenIndex([10,-80,10,10,15,35,20]), 6);
assertEq(findEvenIndex([8,8]),  -1);
assertEq(findEvenIndex([8,0]),  0);
assertEq(findEvenIndex([0,8]),  1);
assertEq(findEvenIndex([7,3,-3]),  0);
assertEq(findEvenIndex([8]),  0);
assertEq(findEvenIndex([0,0,0,0,0]),  0);
assertEq(findEvenIndex([-1,1,0,-1,1,0,-1,1,0,0]), 2);
