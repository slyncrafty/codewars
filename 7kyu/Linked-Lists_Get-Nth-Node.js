/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55befc42bfe4d13ab1000007/
/* ========== ========== ========== ========== ========== ==========*/
/*
Friday the 13th Birthday

Description:
Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2

The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).

*/



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (index < 0) throw new Error("Out of bounds!");
  
  let curr = node;
  let i = 0; 
  while(curr !== null) {
    if(i === index) return curr;
    curr = curr.next;
    i++;
  }
  throw new Error("Out of bounds!");
}



/**
 *  Lesson learned
 *  O(1) stack-space, O(n) time. 
 */



// Test Codes
console.log(getNth(list, 0).data, 1, "First node should be located at index 0.");
console.log(getNth(list, 1).data, 2, "Second node should be located at index 1.");
console.log(getNth(list, 2).data, 3, "Third node should be located at index 2.");
console.log("Invalid index value should throw error.", function() {getNth(list, 3)});
console.log("Invalid index value should throw error.", function() {getNth(list, 100)});
console.log("Null linked list should throw error.", function() {getNth(null, 0)});
