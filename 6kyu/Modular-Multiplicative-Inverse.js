/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Modular Multiplicative Inverse

Description:

A common problem in number theory is to find x given a such that:

a * x = 1 mod [n]

Then x is called the inverse of a modulo n.

Your goal is to code a function inverseMod wich take a and n as parameters and return x.

You may be interested by these pages:

http://en.wikipedia.org/wiki/Modular_multiplicative_inverse

http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm

a and n should be co-prime to have a solution, if it is not the case, you should return None (Python), nil (Ruby, Lua), null (Javascript), Nothing (Haskell) or 0 (COBOL).

a and n will be positive integers. The problem can easily be generalised to negative integer with some sign changes so we won't deal with them.

*/

// Solution
modinv = function (a, n) {
	const egcd = (a, b) => {
		if (b === 0) return [1, 0, a];
		const [x1, y1, g] = egcd(b, a % b); //b * x1 + (a%b) * y1 = g
		return [y1, x1 - Math.floor(a / b) * y1, g];
	};

	const [x, y, g] = egcd(a, n);
	if (g !== 1) return null;
	return ((x % n) + n) % n;
};

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect!', a, b);
};

assertEquals(modinv(2, 5), 3);
assertEquals(modinv(48, 101), 40);
assertEquals(modinv(7, 733), 419);
assertEquals(modinv(48, 733), 168);
assertEquals(modinv(2, 733), 367);
assertEquals(modinv(229, 101), 15);
assertEquals(modinv(229, 103), 9);
assertEquals(modinv(229, 105), 94);
assertEquals(modinv(5, 5), null);
assertEquals(modinv(61965, 17408), null);
assertEquals(modinv(101014, 125445), 7969);
assertEquals(modinv(156435434, 3543432125), 1056765589);
