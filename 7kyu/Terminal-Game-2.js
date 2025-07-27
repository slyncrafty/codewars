/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55e8beb4e8fc5b7697000036/
/* ========== ========== ========== ========== ========== ==========*/
/*
Terminal Game #2

Description:
Create the hero move method

Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:
00 	01 	02 	03 	04
10 	11 	12 	13 	14
20 	21 	22 	23 	24
30 	31 	32 	33 	34
40 	41 	42 	43 	44

The dir argument will be a string

up
down
left
right

If the position is not inside the level grid the method should throw an error and not move the hero

*/



// Solution
Hero.prototype.move = function (dir) {
  let [newY, newX] = [parseInt(this.position[0]), parseInt(this.position[1])];
  switch(dir) {
      case 'up' :{
        newY -= 1;
        break;
      }
      case 'right' : {
        newX += 1;
        break;
      }
      case "down" : {
        newY += 1;
        break;
      }
      case "left": {
        newX -= 1;
        break;
      }
      default: {
        throw new Error ('Invalid direction');
      }
  }
  if(newX < 0 || newX > 4 || newY < 0 || newY > 4) {
    throw new Error ('Invalid range');
  }
  this.position = `${newY}${newX}`;
}




// Test Codes
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

const testHero = new Hero()
testHero.move('down')
console.log(testHero.position, '10')
testHero.move('right')
console.log(testHero.position, '11')
testHero.move('up')
console.log(testHero.position, '01')
testHero.move('right')
console.log(testHero.position, '02')
testHero.move('down')
console.log(testHero.position, '12')
testHero.move('down')
console.log(testHero.position, '22')