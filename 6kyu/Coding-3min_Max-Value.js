/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/570771871df89cf59b000742/
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding 3min : Max Value

Description:
*/

// Solution
function sc(array) {
	m = -1 / 0;
	for (i in array) {
		for (j in array) {
			x = array[i];
			y = array[j];
			if (i < j)
				m = Math.max(
					m,
					x + y,
					x - y,
					y - x,
					x * y,
					x ? y / x : -1 / 0,
					y ? x / y : -1 / 0,
				);
		}
	}
	return m;
}

// Test Codes
const assertSimilar = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

assertSimilar(sc([1, 1]), 2, 'good luck!');
assertSimilar(sc([1, 2]), 3, 'good luck!');
assertSimilar(sc([1, 2, 3]), 6, 'good luck!');
assertSimilar(sc([-1, 2]), 3, 'good luck!');
assertSimilar(sc([1, 0.5]), 2, 'good luck!');
assertSimilar(sc([1, 0]), 1, 'good luck!');
assertSimilar(sc([0.333, 0.5]), 1.5015015015015014, 'good luck!');
assertSimilar(
	sc([1, 7, 15, 1, 20, 7, 12, 6, 8, 13, 19, 0.036, 18, -12, -7, 9, 10, 13]),
	555.5555555555555,
	'good luck!',
);
