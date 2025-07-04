/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-append
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Append

Description:

Linked Lists - Append

Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) functions need not be redefined. The Node class is also predefined for you in PHP.
*/

/* PHP Only */
// class Node {
//   public $data, $next;
//   public function __construct($data, $next = NULL) {
//     $this->data = $data;
//     $this->next = $next;
//   }
// }



// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if(listA === null) return listB;
  if(listB === null) return listA;
  
  let listATail = listA;
  while(listATail.next !== null) {
    listATail = listATail.next;
  }
  listATail.next = listB;
  return listA;
}



// Test Codes
console.log(append(null, null), null, "appending two empty lists should return null.");

console.log(append(null, buildOneTwoThree()), buildOneTwoThree(), "appending a list to null should return the list.");
console.log(append(buildOneTwoThree(), null), buildOneTwoThree(), "appending null to a list should return the list.");

console.log(append(new Node(1), new Node(2)), buildOneTwo(), "appending a list to another list should return the concatenated list.");
console.log(append(new Node(2), new Node(1)), buildTwoOne(), "appending a list to another list should return the concatenated list.");
console.log(append(new Node(2), new Node(1)).next.next, null, "null should exist at end of concatenated linked list.");

console.log(append(buildOneTwoThree(), buildFourFiveSix()), buildOneTwoThreeFourFiveSix(), "appending a list to another list should return the concatenated list.");
console.log(append(buildFourFiveSix(), buildOneTwoThree()), buildFourFiveSixOneTwoThree(), "appending a list to another list should return the concatenated list.");
console.log(append(buildFourFiveSix(), buildOneTwoThree()).next.next.next.next.next.next, null, "null should exist at end of concatenated linked list.");
