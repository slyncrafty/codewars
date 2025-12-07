/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/
/* ========== ========== ========== ========== ========== ==========*/
/*
Vector class

Description:Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

    a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)'. In PHP, this is __toString magic method)
    an equals method, to check that two vectors that have the same components are equal

Note: the test cases will utilize the user-provided equals method.

*/

// Solution
class Vector {
	constructor(components) {
		this.components = components;
	}

	checkLength(v) {
		if (this.components.length !== v.components.length) {
			throw new Error('Invalid! Vectors have different lengths.');
		}
	}

	add(v) {
		this.checkLength(v);
		const result = this.components.map((e, i) => e + v.components[i]);
		return new Vector(result);
	}

	subtract(v) {
		this.checkLength(v);
		const result = this.components.map((e, i) => e - v.components[i]);
		return new Vector(result);
	}

	dot(v) {
		this.checkLength(v);
		return this.components.reduce(
			(acc, curr, i) => acc + curr * v.components[i],
			0
		);
	}

	norm() {
		return Math.sqrt(
			this.components.reduce((sum, curr) => sum + curr * curr, 0)
		);
	}

	toString() {
		return `(${this.components})`;
	}

	equals(v) {
		if (this.components.length !== v.components.length) return false;
		return this.components.every((curr, i) => curr === v.components[i]);
	}
}

// Test Codes
const test = (output) => {
	if (output) console.log('✅PASS');
	else console.log(`❌FAILED.`);
};

const assertEquals = (a, b) => {
	if (a === b) return true;
	else return false;
};

var a = new Vector([1, 2]);
var b = new Vector([3, 4]);
test(a.add(b).equals(new Vector([4, 6])));

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);
test(a.add(b).equals(new Vector([4, 6, 8])));
test(a.subtract(b).equals(new Vector([-2, -2, -2])));
test(assertEquals(a.dot(b), 26));
test(a.norm() - Math.sqrt(14) < 0.1);
test(b.norm() - Math.sqrt(50) < 0.1);
test(c.norm() - Math.sqrt(174) < 0.1);
test(a.equals(new Vector([1, 2, 3])));
test(b.equals(new Vector([3, 4, 5])));
test(!a.equals(b));
test(!b.equals(c));
test(!a.equals(c));
test(assertEquals(a.toString(), '(1,2,3)'));
test(assertEquals(b.toString(), '(3,4,5)'));
test(assertEquals(c.toString(), '(5,6,7,8)'));
