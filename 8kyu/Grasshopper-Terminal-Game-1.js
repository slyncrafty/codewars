/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55e8aba23d399a59500000ce
/* ========== ========== ========== ========== ========== ==========*/
/*
Grasshopper - Terminal Game #1

Description:
Terminal Game - Create Hero Prototype

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0

*/



// Solution
class Hero {
  // add default values here
    constructor(name) {
        this.name = (name || 'Hero');
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}



// Test Codes
let myHero = new Hero();
console.log(myHero.name, 'Hero', "Hero should have a 'name' attribute with value \"Hero\"");
console.log(myHero.experience, 0, "Hero should have an 'experience' attribute with value 0");
console.log(myHero.health, 100, "Hero should have a 'health' attribute with value 100");
console.log(myHero.position, '00', "Hero should have a 'position' attribute with value \"00\"");
console.log(myHero.damage, 5, "Hero should have a 'damage' attribute with value 5");
console.log(new Hero('Greg').name, 'Greg', "Hero Greg should have a 'name' attribute with value \"Greg\"");