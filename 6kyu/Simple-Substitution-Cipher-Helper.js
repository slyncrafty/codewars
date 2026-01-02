/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52eb114b2d55f0e69800078d/
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Substitution Cipher Helper

Description:
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

const abc1 = "abcdefghijklmnopqrstuvwxyz";
const abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
const sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"

If a character provided is not in the opposing alphabet, simply leave it as be.

*/

// Solution
class SubstitutionCipher {
	constructor(abc1, abc2) {
		this.encoderMap = new Map();
		this.decoderMap = new Map();
		for (let i = 0; i < abc1.length; i++) {
			if (!this.encoderMap.has(abc1[i]) && !this.decoderMap.has(abc2[i])) {
				this.encoderMap.set(abc1[i], abc2[i]);
				this.decoderMap.set(abc2[i], abc1[i]);
			}
		}
	}

	encode(plaintext) {
		return plaintext
			.split('')
			.map((e) => {
				if (!this.encoderMap.has(e)) return e;
				else return this.encoderMap.get(e);
			})
			.join('');
	}

	decode(ciphertext) {
		return ciphertext
			.split('')
			.map((e) => {
				if (!this.decoderMap.has(e)) return e;
				else return this.decoderMap.get(e);
			})
			.join('');
	}
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

let abc1 = 'abcdefghijklmnopqrstuvwxyz';
let abc2 = 'etaoinshrdlucmfwypvbgkjqxz';
let sub = new SubstitutionCipher(abc1, abc2);
strictEqual(sub.encode('abc'), 'eta');
strictEqual(sub.encode('xyz'), 'qxz');
strictEqual(sub.encode('aeiou'), 'eirfg');
strictEqual(sub.decode('eta'), 'abc');
strictEqual(sub.decode('qxz'), 'xyz');
strictEqual(sub.decode('eirfg'), 'aeiou');

abc1 = 'abcdefghijklmnopqrstuvwxyz';
abc2 = 'tfozcivbsjhengarudlkpwqxmy';
sub = new SubstitutionCipher(abc1, abc2);
strictEqual(sub.encode('abc'), 'tfo');
strictEqual(sub.decode('tfo'), 'abc');
strictEqual(sub.encode('tjuukf'), 'kjpphi');
strictEqual(sub.decode('kjpphi'), 'tjuukf');
strictEqual(sub.decode('tjuukf'), 'ajqqtb');
strictEqual(sub.encode('ajqqtb'), 'tjuukf');

abc1 = 'abcdefghijklmnopqrstuvwxyz';
abc2 = 'tfozcivbsjhengarudlkpwqxmy';
sub = new SubstitutionCipher(abc1, abc2);
strictEqual(sub.encode('a_bc&*83'), 't_fo&*83');
strictEqual(sub.decode('t_fo*&83'), 'a_bc*&83');
