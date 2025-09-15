/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58663693b359c4a6560001d6/
/* ========== ========== ========== ========== ========== ==========*/
/*
Maze Runner

Description:
Introduction

Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

Task

You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point

  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Rules

1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.

*/



// Solution
function mazeRunner(maze, directions) {
  const N = maze.length;
  if(N === 0) return 'Lost';
  
  // find the start 
  let startR = -1, startC = -1, ok = false;
  for(let r = 0; r < N; r++) {
    const row = maze[r];
    for(let c = 0; c < N; c++) {
      if(row[c] === 2) {
        startR = r;
        startC = c;
        ok = true;
        break;
      }
    }
    if(ok) break;
  }
  
  // direction lookup
  const moveLookUp = {N: [-1,0], S: [1, 0], E: [0, 1], W:[0, -1]}
  
  // moves
  let r = startR, c = startC;
  for(const dir of directions) {
    const move = moveLookUp[dir];
    if(!move) continue;
    r += move[0];
    c += move[1];
    
    if(r >= N || c >= N || r < 0 || c < 0) return 'Dead';
    const pos = maze[r][c];
    if(pos === 1) return 'Dead';
    if(pos === 3) return 'Finish';
  }
  return 'Lost';
}



// Test Codes
const testEqual = (actual, expected, msg) => {
    if(actual === expected) console.log('Correct!');
    else console.error(`Incorrect! ${msg}`);
}
var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
            
testEqual(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish", "Expected Finish");
testEqual(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), "Finish", "Expected Finish");
testEqual(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]), "Finish", "Expected Finish");

testEqual(mazeRunner(maze,["N","N","N","W","W"]), "Dead", "Expected Dead");
testEqual(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), "Dead", "Expected Dead");

testEqual(mazeRunner(maze,["N","E","E","E","E"]), "Lost", "Expected Lost");
