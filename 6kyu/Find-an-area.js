/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59b166f0a35510270800018d
/* ========== ========== ========== ========== ========== ==========*/
/*
Find an area

Description:
You have an array or list of coordinates or points (e.g. [ [1, 1], [3, 4], ... , [5, 2] ]), and your task is to find the area under the graph defined by these points (limited by x of the first and last coordinates as left and right borders, y = 0 as the bottom border and the graph as top border).

Notes:

    x can be negative;
    x of the next pair of coordinates will always be greater than the previous one;
    y >= 0;
    the array will contain more than 2 points.

Example

x=1 (left border)               x=5 (right border)
|                      x,y      |
|                    /\         |
|                   /  \        |
|    x,y           /    \       |
|   /\            /      \      |
|  /  \    x,y   /        \     |
| /    \  /\    /          \    |
|/      \/  \  /            \   |
|x,y    x,y  \/              \  |
|            x,y              \ | 
|_____________________________ \x,y_____ y=0 (bottom border)

The required area:

|                               |
|                    /\         |
|                   /\\\        |
|                  /\\\\\       |
|   /\            /\\\\\\\      |
|  /\\\          /\\\\\\\\\     |
| /\\\\\  /\    /\\\\\\\\\\\    |
|/\\\\\\\/\\\  /\\\\\\\\\\\\\   |
|\\\\\\\\\\\\\/\\\\\\\\\\\\\\\  |
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ | 
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|

Definition of points

class Point {
    #x; #y;

    get x() { return this.#x; }
    get y() { return this.#y; }

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
}

*/

// Solution
// insight - area under each segment is trapezoid.
// use: area = (x2 - x1) * (y2 + y1) / 2

function findArea(points) {
	let totalArea = 0;

	for (let i = 0; i < points.length - 1; i++) {
		const x1 = points[i].x;
		const y1 = points[i].y;
		const x2 = points[i + 1].x;
		const y2 = points[i + 1].y;
		totalArea += ((x2 - x1) * (y2 + y1)) / 2;
	}
	return totalArea;
}

// Test Codes
class Point {
	#x;
	#y;

	get x() {
		return this.#x;
	}
	get y() {
		return this.#y;
	}

	constructor(x, y) {
		this.#x = x;
		this.#y = y;
	}
}
function doTest(points, expected) {
	const message = `for points = [ ${points
		.map((p) => p.toString())
		.join(', ')} ]\n`;
	const actual = findArea(points);
	approximately(actual, expected, 1e-6, message);
}

const approximately = function (actual, expected, tol, msg = '') {
	if (
		typeof actual !== 'number' ||
		typeof expected !== 'number' ||
		typeof tol !== 'number'
	) {
		throw new TypeError('assert.approximately expects numbers');
	}

	if (Math.abs(actual - expected) > tol) {
		throw new Error(`${message}\nExpected ${actual} ≈ ${expected} (±${tol})`);
	} else {
		console.log('✅PASSED');
	}
};

doTest([new Point(0, 0), new Point(1, 4), new Point(3, 2)], 8);
doTest([new Point(-3, 0), new Point(-1, 4), new Point(3, 2)], 16);
doTest([new Point(-3, 2), new Point(-1, 0), new Point(3, 2)], 6);
doTest([new Point(-3, 2), new Point(3, 5)], 21);
doTest(
	[
		new Point(-3, 2),
		new Point(-1, 5),
		new Point(0, 3),
		new Point(3, 7),
		new Point(4, 6),
	],
	32.5
);
