/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/523f5d21c841566fde000009
/* ========== ========== ========== ========== ========== ==========*/
/*
Array.diff

Description:
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
Examples

If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

*/



// Solution
function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}



// Test Codes
console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
