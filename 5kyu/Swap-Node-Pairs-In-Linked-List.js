/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59c6f43c2963ecf6bf002252/
/* ========== ========== ========== ========== ========== ==========*/
/*
Swap Node Pairs In Linked List

Description:
You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list. You have to swap the nodes themselves, not their values.

Example:

(A --> B --> C --> D) => (B --> A --> D --> C)

The swapping should be done left to right, so if the list has an odd length, the last node stays in place:

(A --> B --> C) => (B --> A --> C)

The list will be composed of Nodes of the following specification:

*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

// Solution
// recursive solution
function swapPairs(head) {
	if (!head || !head.next) return head;
	const next = head.next;
	head.next = swapPairs(next.next);
	next.next = head;
	return next;
}

// function swapPairs(head) {
//   if(!head || head.next === null) return head;

//     const dummy = new Node(null, head);
//     let prev = dummy;

//     while (prev.next && prev.next.next) {
//         const a = prev.next;
//         const b = prev.next.next;
//         [prev.next, a.next, b.next] = [b, b.next, a];
//         prev = a;
//     }
//     return dummy.next;
// }

// Test Codes
function stringFromArray(nodesArray) {
	return nodesArray.map((e) => e.value).join(' -> ');
}
function listFromArray(nodesArray) {
	if (nodesArray.length === 0) return null;
	const head = nodesArray[0];
	for (let i = 1; i < nodesArray.length; i++)
		nodesArray[i - 1].next = nodesArray[i];

	nodesArray.at(-1).next = null;
	return head;
}

function arrayFromList(list) {
	const seen = new Set(),
		nodesArray = [];
	for (let node = list; node !== null; node = node.next) {
		if (seen.has(node)) throw new Error('you introduced a cycle in the list !');
		seen.add(node);
		nodesArray.push(node);
	}
	return nodesArray;
}

function doTest(inputNodes, expectedNodes) {
	const head = listFromArray(inputNodes);
	const result = swapPairs(head);
	const actual = arrayFromList(result);

	const actualStr = stringFromArray(actual);
	const expectedStr = stringFromArray(expectedNodes);

	if (actualStr === expectedStr) {
		console.log('Correct:', actualStr);
	} else {
		console.log('Incorrect:');
		console.log('  actual:  ', actualStr);
		console.log('  expected:', expectedStr);
	}
}

const a = new Node('A'),
	b = new Node('B'),
	c = new Node('C'),
	d = new Node('D');

doTest([a], [a]);

doTest([a, b], [b, a]);

doTest([a, b, c], [b, a, c]);

doTest([a, b, c, d], [b, a, d, c]);
