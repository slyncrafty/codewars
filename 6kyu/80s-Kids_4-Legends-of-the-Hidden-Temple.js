/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/80-s-kids-number-4-legends-of-the-hidden-temple
/* ========== ========== ========== ========== ========== ==========*/
/*
80's Kids #4: Legends of the Hidden Temple

Description:

You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.

With your last movements, you've decided to draw an "X" marks the spot for the next archaeologist.

Given an odd number, n, draw an X for the next crew. Follow the example below.

markSpot(5) ->

X       X
  X   X
    X
  X   X
X       X

For a clearer understanding of the output, let '.' represent a space and \n the newline.
X.......X\n
..X...X\n
....X\n
..X...X\n
X.......X\n

markSpot(3) ->

X   X
  X
X   X  

If n = 1 return 'X\n' and if you're given an even number or invalid input, return '?'.

The output should be a string with no spaces after the final X on each line, but a \n to indicate a new line.
*/



// Solution
function markSpot(n) {
  if(n%2 === 0 || n < 1 || typeof n !== 'number') return '?';
  const length = 2 * n - 1;
  let result = '';
  for(let i = 0; i < n; i++) {
    let line = Array(length).fill(' ');
    line[i*2] = 'X';
    line[2*(n-1-i)] = 'X';
    result += line.join('').trimEnd() + '\n';
  }
  return result;
}


// Test Codes
console.log(markSpot(5) === "X       X\n  X   X\n    X\n  X   X\nX       X\n");
console.log(markSpot(1) === "X\n");
console.log(markSpot(11) === "X                   X\n  X               X\n    X           X\n      X       X\n        X   X\n          X\n        X   X\n      X       X\n    X           X\n  X               X\nX                   X\n");
console.log(markSpot("treasure") === "?");