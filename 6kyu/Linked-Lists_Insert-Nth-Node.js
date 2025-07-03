/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-insert-nth-node
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Insert Nth

Description:
Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)

You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.

*/



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
   if(index < 0) throw new Error("Out of Bounds!");
  
  if(index === 0) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }
  
  let idx = 0; 
  let curr = head;
  while(curr !== null && idx < index - 1) {
    curr = curr.next;
    idx++;
  }
  if(curr === null) throw new Error("Out of Bounds!");

  const newNode = new Node(data);
  newNode.next = curr.next;
  curr.next = newNode;
  return head;
}



// Test Codes
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

console.log(insertNth(null, 0, 12).data, 12, "should be able to insert a node on an empty/null list.");
console.log(insertNth(null, 0, 12).next, null, "value at index 1 should be null.");

console.log(insertNth(buildOneTwoThree(), 0, 23).data, 23, "should be able to insert new node at head of list.");
console.log(insertNth(buildOneTwoThree(), 0, 23).next.data, 1, "value for node at index 1 should be 1.");
console.log(insertNth(buildOneTwoThree(), 0, 23).next.next.data, 2, "value for node at index 2 should be 2.");
console.log(insertNth(buildOneTwoThree(), 0, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
console.log(insertNth(buildOneTwoThree(), 0, 23).next.next.next.next, null, "value at index 4 should be null.");

console.log(insertNth(buildOneTwoThree(), 1, 23).data, 1, "value for node at index 0 should be 1.");
console.log(insertNth(buildOneTwoThree(), 1, 23).next.data, 23, "value for node at index 1 should be 23");
console.log(insertNth(buildOneTwoThree(), 1, 23).next.next.data, 2, "value for node at index 2 should be 2.");
console.log(insertNth(buildOneTwoThree(), 1, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
console.log(insertNth(buildOneTwoThree(), 1, 23).next.next.next.next, null, "value at index 4 should be null.");

console.log(insertNth(buildOneTwoThree(), 2, 23).data, 1, "head should remain unchanged after inserting new node at index 2");
console.log(insertNth(buildOneTwoThree(), 2, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
console.log(insertNth(buildOneTwoThree(), 2, 23).next.next.data, 23, "value for node at index 2 should be 23.");
console.log(insertNth(buildOneTwoThree(), 2, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
console.log(insertNth(buildOneTwoThree(), 2, 23).next.next.next.next, null, "value at index 4 should be null.");

console.log(insertNth(buildOneTwoThree(), 3, 23).data, 1, "head should remain unchanged after inserting new node at tail");
console.log(insertNth(buildOneTwoThree(), 3, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
console.log(insertNth(buildOneTwoThree(), 3, 23).next.next.data, 3, "value for node at index 2 should be 3.");
console.log(insertNth(buildOneTwoThree(), 3, 23).next.next.next.data, 23, "value for node at index 3 should be 23.");
console.log(insertNth(buildOneTwoThree(), 3, 23).next.next.next.next, null, "value at index 4 should be null.");

