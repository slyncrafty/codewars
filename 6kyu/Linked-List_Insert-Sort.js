/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-insert-sort
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Insert Sort

Description:

Linked Lists - Insert Sort

Write an InsertSort() function which rearranges nodes in a linked list so they are sorted in increasing order. You can use the SortedInsert() function that you created in the "Linked Lists - Sorted Insert" kata below. The InsertSort() function takes the head of a linked list as an argument and must return the head of the linked list.

var list = 4 -> 3 -> 1 -> 2 -> null
insertSort(list) === 1 -> 2 -> 3 -> 4 -> null

If the passed in head node is null or a single node, return null or the single node, respectively. You can assume that the head node will always be either null, a single node, or a linked list consisting of multiple nodes.

The push(), buildOneTwoThree(), and sortedInsert() functions need not be redefined.

*/



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  
  let curr = head;
  let newHead = null; 
  while(curr !== null) {
    const next = curr.next;
    newHead = sortedInsert(newHead, curr.data);
    curr = next;
  }
  return newHead;
}



// Test codes
console.log(insertSort(null), null, "sorting an empty linked list should return null.");

console.log(insertSort(new Node(5)).data, 5, "list should be return if length is 1.");

console.log(insertSort(buildOneTwo()).data, 1, "Node at index 0 of InsertSort(1 -> 2) should return 1.");
console.log(insertSort(buildOneTwo()).next.data, 2, "Node at index 1 InsertSort(1 -> 2) should return 2.");
console.log(insertSort(buildOneTwo()).next.next, null, "Index 2 of InsertSort(1 -> 2) should return null.");

console.log(insertSort(buildTwoOne()).data, 1, "Node at index 0 of InsertSort(2 -> 1) should return 1.");
console.log(insertSort(buildTwoOne()).next.data, 2, "Node at index 1 InsertSort(2 -> 1) should return 2.");
console.log(insertSort(buildTwoOne()).next.next, null, "Index 2 of InsertSort(2 -> 1) should return null.");

console.log(insertSort(buildOneTwoThree()).data, 1, "Node at index 0 of InsertSort(1 -> 2 -> 3) should return 1.");
console.log(insertSort(buildOneTwoThree()).next.data, 2, "Node at index 1 of InsertSort(1 -> 2 -> 3) should return 2.");
console.log(insertSort(buildOneTwoThree()).next.next.data, 3, "Node at index 2 of InsertSort(1 -> 2 -> 3) should return 3.");
console.log(insertSort(buildOneTwoThree()).next.next.next, null, "Value at index 3 of InsertSort(1 -> 2 -> 3) should be null.");

console.log(insertSort(buildThreeTwoOne()).data, 1, "Node at index 0 of InsertSort(3 -> 2 -> 1) should return 1.");
console.log(insertSort(buildThreeTwoOne()).next.data, 2, "Node at index 1 of InsertSort(3 -> 2 -> 1) should return 2.");
console.log(insertSort(buildThreeTwoOne()).next.next.data, 3, "Node at index 2 of InsertSort(3 -> 2 -> 1) should return 3.");
console.log(insertSort(buildThreeTwoOne()).next.next.next, null, "Value at index 3 of InsertSort(3 -> 2 -> 1) should be null.");

console.log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).data, 1, "Node at index 0 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 1.");
console.log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.data, 2, "Node at index 1 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 2.");
    
