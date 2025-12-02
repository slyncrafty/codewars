/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/
/* ========== ========== ========== ========== ========== ==========*/
/*
Can you get the loop ?

Description:
You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:

// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

Notes:

    do NOT mutate the nodes!
    in some cases there can be just a loop, with no dangling piece.

*/

// Solution
//Using Floyd's cycle detection
function loop_size(node) {
	let head = node;
	let slow = head,
		fast = head;
	while (slow !== null && fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) return countNodes(slow);
	}
	return 0;
}

const countNodes = (node) => {
	let count = 1;
	let curr = node;
	while (curr.next !== node) {
		count++;
		curr = curr.next;
	}
	return count;
};

// Test Codes
class Node {
	constructor(val) {
		this.value = val;
	}
	setNext(node) {
		this.next = node;
	}
	getNext() {
		return this.next;
	}
}

function assertDeepEqual(actual, expected, message = '') {
	const ok = JSON.stringify(actual) === JSON.stringify(expected);
	if (ok) {
		console.log('✔ PASS:', message || `${actual} === ${expected}`);
	} else {
		console.error('✘ FAIL:', message);
		console.error('  expected:', expected);
		console.error('  actual:  ', actual);
	}
}

{
	const A = new Node();
	A.setNext(A);
	assertDeepEqual(loop_size(A), 1);
}
{
	const A = new Node(),
		B = new Node();
	A.setNext(B), B.setNext(A);
	assertDeepEqual(loop_size(A), 2);
}
{
	const A = new Node(),
		B = new Node();
	A.setNext(B), B.setNext(B);
	assertDeepEqual(loop_size(A), 1);
}
{
	const A = new Node(),
		B = new Node(),
		C = new Node();
	A.setNext(B), B.setNext(C), C.setNext(C);
	assertDeepEqual(loop_size(A), 1);
}
{
	const A = new Node(),
		B = new Node(),
		C = new Node();
	A.setNext(B), B.setNext(C), C.setNext(B);
	assertDeepEqual(loop_size(A), 2);
}
{
	const A = new Node(),
		B = new Node(),
		C = new Node();
	A.setNext(B), B.setNext(C), C.setNext(A);
	assertDeepEqual(loop_size(A), 3);
}
