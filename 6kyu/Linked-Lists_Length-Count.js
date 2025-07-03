/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-length-and-count
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Length & Count

Description:

Implement length to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3

Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4

I've decided to bundle these two functions within the same Kata since they are both very similar.

The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

*/



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let length = 0;
  let curr = head;
  while(curr !== null) {
    curr = curr.next;
    length++;
  }
  return length;
}

function count(head, data) {
  if(head === null) return 0;
  let index = 0;
  let curr = head;
  while(curr !== null) {
    if(curr.data === data){
      index++;
    }
    curr = curr.next;
  }
  return index;
}



// Test Codes
console.log(length(null), 0, "Length of null list should be zero.");
console.log(length(new Node(99)), 1, "Length of single node list should be one.");

function push(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode;
}
function buildOneTwoThree() {
  let head = null;   
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);
  return head;
}
const list = buildOneTwoThree();
console.log(count(list, 1), 1, "list should only contain one 1.");
console.log(count(list, 2), 1, "list should only contain one 2.");
console.log(count(list, 3), 1, "list should only contain one 3.");
console.log(count(list, 99), 0, "list should return zero for integer not found in list.");
console.log(count(null, 1), 0, "null list should always return count of zero.");