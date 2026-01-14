/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/591b3ca0e0f838dfea0000bf/
/* ========== ========== ========== ========== ========== ==========*/
/*
How deep do these trees even go?

Description:
You will be given an array arr representing a tree, which has nested arrays, which might have nest arrays in them, which... well, you get the idea. You need to quantify how deep these arrays go by calculating these numbers:

    min: minimum depth
    max: maximum depth
    mean: average depth

and return the result as an object:

{
  min: <some number>,
  max: <some number>,
  mean: <some number>
}

Depth is quantified by all the leaves (i.e elements that are not arrays) of the tree.

It is guaranteed that the initial array will always be an array, and there will never be any circular references.

*/

// Solution
function arrayDeepness(arr) {
	let depths = [];

	function traverse(node, depth) {
		if (Array.isArray(node)) {
			for (const e of node) {
				traverse(e, depth + 1);
			}
		} else {
			depths.push(depth);
		}
	}

	traverse(arr, 0);

	const min = Math.min(...depths);
	const max = Math.max(...depths);
	const mean = depths.reduce((a, c) => a + c, 0) / depths.length;

	return { min, max, mean };
}

// Test Codes
function doTest(input, expected) {
	const actual = arrayDeepness(input);
	const a = JSON.stringify(actual);
	const e = JSON.stringify(expected);

	if (a === e) console.log('✅PASSED');
	else console.log('❌FAILED');
}

doTest([0], { min: 1, max: 1, mean: 1 });
doTest([['s'], ['t']], { min: 2, max: 2, mean: 2 });
doTest([[1.23], [, [undefined], 7.89]], { min: 2, max: 3, mean: 2.25 });
doTest([[null], [[[/[a-z]/], new Date()], [-Infinity], NaN]], {
	min: 2,
	max: 4,
	mean: 2.8,
});
doTest([, [, [, [, [, [, [, ['deep']]]]]]]], { min: 1, max: 8, mean: 4.5 });
