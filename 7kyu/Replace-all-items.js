/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a
/* ========== ========== ========== ========== ========== ==========*/
/*
Replace all items

Description:
Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]


*/



// Solution
function replaceAll(seq, find, replace) {
  if(typeof seq === "string") return seq.split(find).join(replace);
  if(Array.isArray(seq))  return seq.map(e => e === find ? replace : e);
  return seq;
}



// Test Codes
console.log(replaceAll([], 1, 2), []);
console.log(replaceAll([1,2,2], 1, 2), [2,2,2]);
console.log(replaceAll([1,1,2], 1, 2), [2,2,2]);
console.log(replaceAll([1,2,1,2,1], 1, 2), [2,2,2,2,2]);
console.log(replaceAll("Hello World", 'o', '0'), "Hell0 W0rld");