/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/63f13a354a828b0041979359
/* ========== ========== ========== ========== ========== ==========*/
/*
Finding the Incorrect Value in a Binary Tree

Description:
Each node of a binary tree stores a nonnegative integer. The value at every non-leaf node is supposed to be the sum of its two children, but one node is incorrect. Find this node.

Example: Consider the tree below. 13 is the sum of 6 and 7, but 15 is incorrect, because 27 != 13 + 15 and 15 != 5 + 9. Clearly the 15should be changed to 14.

           27
         /    \
        13    15
       /  \   / \
      6   7  5   9

Details:

(1) The tree will always be full (all non-leaf nodes have exactly 2 children) and perfect (all leaves are on the bottom level).
(2) Considering the root as level 1, its children as level 2, their children as level 3, and so on, the tree contains at least 3 levels and no more than 12.
(3) If the incorrect value occurs on the leaf level, then the right child is the incorrect one.
(4) The tree is provided as a list with the nodes in breath-first order. The root is element 0, its leftchild is element 1 and its rightchild is element 2; element 1's leftchild is element 3 and its rightchild is element 4; element 2's leftchild is element 5 and its rightchild is element 6, and so on. The example above is [27, 13, 15, 6, 7, 5, 9].
(5) Return the index of the incorrect node and the value it should be changed to. In the example return (2,14). (Indexes start from 0.)

Other Examples:

[28, 13, 14, 6, 7, 5, 9] => (0,27).
Explanation: 28 != 13 + 14, but checking the children of 13 and 14 shows that they are both fine. So the 28 must be changed.

[28, 13, 15, 6, 7, 5, 9] => (6,10).
Explanation: 15 != 5 + 9, but the 15 itself is fine, because 28 = 13 + 15. Hence one of its children is wrong, but they are leaves, so how do we tell? Detail (3) says "If the incorrect value occurs on the leaf level, then the right child is the incorrect one." Thus the 9 must be changed to 10, rather than changing the 5 to 6.

SOURCE: Programming Competition at the Midwest Instructional Computing Symposium, 2018.
*/

// Solution
function findIncorrectValue(tree) {
	const n = tree.length;
	if (n === 0) return null;

	// Helper functions to get Children indices
	const left = (i) => 2 * i + 1;
	const right = (i) => 2 * i + 2;

	const height = Math.floor(Math.log2(n + 1));

	return [0, 0];
}
// Test Codes
const deepEqual = (a, b) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

deepEqual(
	findIncorrectValue([28, 13, 14, 6, 7, 5, 9]),
	[0, 27],
	'Root should be 27',
);
deepEqual(
	findIncorrectValue([27, 14, 14, 6, 7, 5, 9]),
	[1, 13],
	"Root's leftchild should be 13",
);
deepEqual(
	findIncorrectValue([27, 13, 15, 6, 7, 5, 9]),
	[2, 14],
	"Root's rightchild should be 14",
);
deepEqual(
	findIncorrectValue([29, 13, 16, 5, 8, 9, 1]),
	[6, 7],
	'The last leaf should be 7',
);
deepEqual(
	findIncorrectValue([21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4]),
	[0, 19],
	'Root should be 19',
);
deepEqual(
	findIncorrectValue([19, 9, 10, 5, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4]),
	[3, 4],
	'First node on level 2 should be 4',
);
deepEqual(
	findIncorrectValue([19, 9, 10, 4, 5, 4, 6, 3, 2, 1, 4, 1, 3, 2, 4]),
	[8, 1],
	'Second node on leaf level should be 1',
);
