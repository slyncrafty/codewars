/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/570e6e32de4dc8a8340016dd
/* ========== ========== ========== ========== ========== ==========*/
/*
The Lamp: Revisited

Description:
Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

*/

// Solution
class Lamp {
	constructor(color) {
		this.color = color;
		this.on = false;
	}

	toggleSwitch() {
		this.on = !this.on;
	}

	state() {
		return `The lamp is ${this.on ? 'on' : 'off'}.`;
	}
}
// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

let lamp = new Lamp('Blue');
strictEqual(lamp instanceof Lamp, true);
strictEqual(lamp.color, 'Blue');
strictEqual(lamp.on, false);
strictEqual(lamp.state(), 'The lamp is off.');
lamp.toggleSwitch();
strictEqual(lamp.state(), 'The lamp is on.');
strictEqual(lamp.color, 'Blue');
