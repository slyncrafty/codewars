/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f669477c9a2b1b9700022d/
/* ========== ========== ========== ========== ========== ==========*/
/*
Identify the array's ordering

Description:
Write a function that takes a single array as an argument (containing multiple strings and/or positive numbers and/or arrays), and returns one of four possible string values, depending on the ordering of the lengths of the elements in the input array:

Your function should return...

    “Increasing” - if the lengths of the elements increase from left to right (although it is possible that some neighbouring elements may also be equal in length)
    “Decreasing” - if the lengths of the elements decrease from left to right (although it is possible that some neighbouring elements may also be equal in length)
    “Unsorted” - if the lengths of the elements fluctuate from left to right
    “Constant” - if all element's lengths are the same.

Numbers and Strings should be evaluated based on the number of characters or digits used to write them.

Arrays should be evaluated based on the number of elements counted directly in the parent array (but not the number of elements contained in any sub-arrays).

*/



// Solution
function orderType(arr) {
  const lengthArr = arr.map(e => Array.isArray(e) ? e.length : String(e).length);
  let increasing = false, decreasing = false;
  for(let i = 1; i < arr.length; i++) {
    if(lengthArr[i] > lengthArr[i-1])
      {
        increasing = true;
      }
    else if(lengthArr[i] < lengthArr[i-1]){
        decreasing = true;
    }
    
    if(increasing && decreasing) return "Unsorted";
  }
  if(!increasing && decreasing) return "Decreasing";
  if(increasing && !decreasing) return "Increasing";
  return "Constant";
}



// Test Codes
const deepEqual = (a, b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) return a.every((val, i) => deepEqual(val, b[i]));
    return false;
}

const assertEq = (actual, expected) => {
    if(!deepEqual(actual, expected)) console.log(`Incorrect!`);
    else console.log(`Correct!`);
}

assertEq(orderType(["a", "b", "c"]),"Constant", "Should return \"Constant\"");
assertEq(orderType(["abcde", "abcd", "abc"]),"Decreasing", "Should return \"Decreasing\"");
assertEq(orderType([["yz"],["uv", "wx"],["ab","cdef", "g"],["hi","jk","lmnopq"]]),"Increasing", "Should return \"Increasing\"");
assertEq(orderType(["abc", "abcde", "c"]),"Unsorted", "Should return \"Unsorted\"");
assertEq(orderType([1, "b", ["p"], 2]),"Constant", "Should return \"Constant\"");
assertEq(orderType([123, 1234, 12345, 123456]),"Increasing", "Should return \"Increasing\"");
assertEq(orderType(["a", "abc", "abcde", "ab"]),"Unsorted", "Should return \"Unsorted\"");
assertEq(orderType([[1, 2, 3, 4], [5, 6, 7], [8, 9]]),"Decreasing", "Should return \"Decreasing\"");
assertEq(orderType([1, 2, 3, 4, 56]),"Increasing", "Should return \"Increasing\"");
assertEq(orderType([["ab","cdef", "g"],["hi","jk","lmnopq"],["rst", "uv", "wx"],["yz"]]),"Decreasing", "Should return \"Decreasing\"");
assertEq(orderType([[1, 23, 456, 78910], ["abcdef", "ghijklmno", "pqrstuvwxy"], [[1, 23, 456, 78910, ["abcdef", "ghijklmno", "pqrstuvwxy"]], 1234]]),"Decreasing", "Should return \"Decreasing\"");
