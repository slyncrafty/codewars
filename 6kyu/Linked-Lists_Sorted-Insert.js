/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-sorted-insert
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Sorted Insert

Description:
Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)

The push() and buildOneTwoThree() functions do not need to be redefined.
*/



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  const newNode = new Node(data);
  
  // insert at head;
  if(head === null || data < head.data) {
    newNode.next = head; 
    return newNode;
  }
  
  let curr = head;
  // insert in the middle
  while(curr.next !== null && curr.next.data < data) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  return head;
}



// Test Codes
console.log(sortedInsert(null, 23).data, 23, "should be able to insert a node on an empty/null list.");
console.log(sortedInsert(null, 23).next, null, "value at index 1 should be null.");

console.log(sortedInsert(buildOneTwoThree(), 0.5).data, 0.5, "should be able to insert new node at head of list.");
console.log(sortedInsert(buildOneTwoThree(), 0.5).next.data, 1, "value for node at index 1 should be 1.");
console.log(sortedInsert(buildOneTwoThree(), 0.5).next.next.data, 2, "value for node at index 2 should be 2.");
console.log(sortedInsert(buildOneTwoThree(), 0.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
console.log(sortedInsert(buildOneTwoThree(), 0.5).next.next.next.next, null, "value at index 4 should be null.");

console.log(sortedInsert(buildOneTwoThree(), 1.5).data, 1, "value for node at index 0 should be 1.");
console.log(sortedInsert(buildOneTwoThree(), 1.5).next.data, 1.5, "value for node at index 1 should be 1.5");
console.log(sortedInsert(buildOneTwoThree(), 1.5).next.next.data, 2, "value for node at index 2 should be 2.");
console.log(sortedInsert(buildOneTwoThree(), 1.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
console.log(sortedInsert(buildOneTwoThree(), 1.5).next.next.next.next, null, "value at index 4 should be null.");

console.log(sortedInsert(buildOneTwoThree(), 2.5).data, 1, "head should remain unchanged after inserting new node at index 2");
console.log(sortedInsert(buildOneTwoThree(), 2.5).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
console.log(sortedInsert(buildOneTwoThree(), 2.5).next.next.data, 2.5, "value for node at index 2 should be 2.5.");
console.log(sortedInsert(buildOneTwoThree(), 2.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
console.log(sortedInsert(buildOneTwoThree(), 2.5).next.next.next.next, null, "value at index 4 should be null.");

console.log(sortedInsert(buildOneTwoThree(), 3.5).data, 1, "head should remain unchanged after inserting new node at tail");
console.log(sortedInsert(buildOneTwoThree(), 3.5).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
console.log(sortedInsert(buildOneTwoThree(), 3.5).next.next.data, 3, "value for node at index 2 should be 3.");
console.log(sortedInsert(buildOneTwoThree(), 3.5).next.next.next.data, 3.5, "value for node at index 3 should be 3.5.");
console.log(sortedInsert(buildOneTwoThree(), 3.5).next.next.next.next, null, "value at index 4 should be null.");
