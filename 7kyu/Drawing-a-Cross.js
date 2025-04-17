/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a036ecb2b651d696f00007c
/* ========== ========== ========== ========== ========== ==========*/
/*
Drawing a Cross!

Description:
The aim of this kata is to write function drawACross / draw_a_cross which returns a cross shape with 'x' characters on a square grid of size and height of our sole input n. All non-'x' characters in the grid should be filled with a space character (" ").

For example for drawACross(7) / draw_a_cross(7), the function should draw the following grid:

x     x
 x   x 
  x x  
   x   
  x x  
 x   x 
x     x

The arms of the cross must only intersect through one central 'x' character, and start in the corner of the grid, so for even values of n, return "Centered cross not possible!"

If n<3, function should return "Not possible to draw cross for grids less than 3x3!"

*/



// Solution

// X . . . X (0, 0) (0, 4)
// . X . X . (1, 1) (1, 3)
// . . X . .    (2, 2)
// . X . X . (3, 1) (3, 3)
// X . . . X (4, 0) (4, 4)
// 'X' where (r,c) r+c === n-1 or r === c

function drawACross(n) {
    if(n<3) { return "Not possible to draw cross for grids less than 3x3!"; }
    if(n%2 === 0) { return "Centered cross not possible!"; }
    const result = [];
    for(let r = 0; r < n; r++)
    {
      let line = '';
      for(let c = 0; c < n; c++)
      {
        ((r+c) === n-1 || r === c) ?  line += 'x' : line += ' ';
      }
      result.push(line);
    }
    return result.join('\n');
}



// Test Codes
console.log(drawACross(7) === 'x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x')
console.log(drawACross(15) === 'x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x')
console.log(drawACross(25) === 'x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x')
console.log(drawACross(6) === 'Centered cross not possible!')
console.log(drawACross(10) === 'Centered cross not possible!')
console.log(drawACross(2) === 'Not possible to draw cross for grids less than 3x3!')