/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/linked-lists-move-node
/* ========== ========== ========== ========== ========== ==========*/
/*
Linked Lists - Move Node

Description:

Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. You should throw an error when the source list is empty. For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by moveNode.

MoveNode() is a handy utility function to have for later problems.
JavaScript

var source = 1 -> 2 -> 3 -> null
var dest = 4 -> 5 -> 6 -> null
moveNode(source, dest).source === 2 -> 3 -> null
moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null

Python

source = 1 -> 2 -> 3 -> None
dest = 4 -> 5 -> 6 -> None
move_node(source, dest).source == 2 -> 3 -> None
move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> None

Ruby

source = 1 -> 2 -> 3 -> nil
dest = 4 -> 5 -> 6 -> nil
move_node(source, dest).source == 2 -> 3 -> nil
move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> nil

The push() and buildOneTwoThree() functions need not be redefined.
*/



// Solution
function Node(data, next = null) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  return new Context(source.next, new Node(source.data, dest));
}



// Codes
console.log("error should be thrown when source list is empty", function() {moveNode(null, null)});

console.log("error should be thrown when source list is empty", function() {moveNode(null, new Node(23))});
console.log(moveNode(buildOneTwoThree(), null), new Context(buildList([2, 3]), new Node(1)));

console.log(moveNode(buildOneTwoThree(), buildOneTwoThree()), new Context(buildList([2, 3]), buildList([1, 1, 2, 3])));
console.log(moveNode(buildOneTwoThreeFourFiveSix(), buildOneTwoThreeFourFiveSix()), new Context(buildList([2, 3, 4, 5, 6]), buildList([1, 1, 2, 3, 4, 5, 6])));
console.log(moveNode(buildList([1, 2, 3, 4, 5, 6, 7]), buildList([4, 5, 6, 7])), new Context(buildList([2, 3, 4, 5, 6, 7]), buildList([1, 4, 5, 6, 7])));
