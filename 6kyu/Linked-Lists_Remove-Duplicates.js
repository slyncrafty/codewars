/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-remove-duplicates
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Remove Duplicates

Description:
Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null

If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.

The push() and buildOneTwoThree() functions need not be redefined.
*/



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if(!head) return null;
  let curr = head;
  while(curr !== null && curr.next !== null) {
    if(curr.data === curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}



// Test Codes
console.log(removeDuplicates(null), null, "removing duplicates from null should return null.");


console.log(removeDuplicates(new Node(23)).data, 23, "removing duplicates from linked list consisting of one node should return the node.");


console.log(removeDuplicates(buildOneTwoThree()), buildOneTwoThree(), "removing duplicates from a linked list without duplicates node should return the list.");
console.log(removeDuplicates(buildOneTwoThreeFourFiveSix()), buildOneTwoThreeFourFiveSix(), "removing duplicates from linked list without duplicates node should return the list.");

console.log(removeDuplicates(buildList([1, 2, 2])), buildList([1, 2]), "should remove the duplicate '2' entries");
console.log(removeDuplicates(buildList([1, 1, 1, 1, 1])), buildList([1]), "should remove the duplicate '1' entries");
console.log(removeDuplicates(buildList([1, 2, 3, 3, 4, 4, 5])), buildList([1, 2, 3, 4, 5]), "should remove the duplicate '3' and '4' entries");
console.log(removeDuplicates(buildList([1, 1, 1, 1, 2, 2, 2, 2])), buildList([1, 2]), "should remove the duplicate '1' and '2' entries");
