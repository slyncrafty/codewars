/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5714803d2817ffce17000a35
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

This is the simple version of Fastest Code series. If you need some challenges, please try the Performance version
Task:

Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

The array numbers is a sorted array, value range: -100...100

The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]

Please see more example in testcases.
*/


// Solution
function findAB(numbers,c){
    for(let i = 0; i < numbers.length; i++){
      const a = numbers[i];
      if((a === 0 && c !== 0)) continue;
      if(a === 0) return [a, numbers[i+1]];
      const b = c / a;
      if(numbers.slice(i+1).includes(b)){
        return [a,b];
      }
    }
    return null;
}

// Test Code
findAB([1,2,3], 3); // [1,3]
findAB([1,2,3], 6); // [2,3]
findAB([1,2,3], 7); // null
findAB([1,2,3,6], 6); // [1,6]
findAB([1,2,3,4,5,6], 15); // [3,5]
findAB([0,0,2], 4); // null
findAB([0,0,2,2], 4); // [2,2]
findAB([-3,-2,-2,-1,0,1,2,3,4], 4); // [-2,-2] 
findAB([-3,-2,-2,-1,0,1,2,3,4], 0); // [-3,0]
findAB([-3,-2,-1,0,1,2,3,4], 4); // [1,4]
findAB([0,1,2,3], 0); // [0,1]
findAB([0,0,2,3], 0); // [0,0]