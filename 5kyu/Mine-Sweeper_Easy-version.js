/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/6694b5ce5228b2b97f46f282/train/javascript
/* ========== ========== ========== ========== ========== ==========*/
/*
Mine Sweeper: Easy version

Description:

This is easier version of Mine Sweeper cata, based on good old game Minesweeper. The difference is that this cata requires more simple algorithm to solve it, and it is guaranteed it is always possible to find a solution for it. For those who are not familiar with this game here is a wikipedia article about it.
Task description

You are given a game map and a number of mines in it. In the game map ? represents closed cells and cells with numbers represent how many mines are around this cell. Mines marked with x. Example:

 ? ? ? ? ?
 0 0 0 0 0
 0 1 1 1 0 
 0 1 x 1 0
 0 1 1 1 0
 0 0 0 0 0
 ? ? ? ? ?  

To start the process some cells will be open initially. You have a preloaded function open(row,column)which will return the number of mines around the cell (this open function does not update map, you should do it yourself). You should be very careful and do not open cells with mines.
The task of cata is to return the same game map without any ? on it. Mines should be marked with x and all other cells should have a number of mines around the cell.
*/



// Solution
//  preloaded function to open cell:  open(row,col)
const solveMine = (mapI, n) => {  
  // parse input into game field(array of ?, [0-8], x)
  const game = mapI.trim().split('\n').map( row => row.trim().split(/\s+/));
  
  const H = game.length, W = game[0].length;
  
  // define neighbors
  const neighborMap = [ 
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1],
  ];

  // Minesweeper rules
  let changed;
  do {
    changed = false;

    for (let r = 0; r < H; r++) {
      for (let c = 0; c < W; c++) {
        const cell = game[r][c];
        if(cell === '?' || cell === 'x') continue;

        const num = Number(cell);
        let flagged = 0;
        const closedCells = [];

        // process neighbors
        for (let [dr, dc] of neighborMap) {
          const nr = r + dr, nc = c + dc;
          if( nr < 0 || nr >= H || nc < 0 || nc >= W) continue;
          
          const v = game[nr][nc];
          if( v === 'x') flagged++;
          else if (v === '?') closedCells.push([nr, nc]);
        }
        if(closedCells.length === 0) continue;

        // 1. unopened cells must be mines, flag them
        if(num - flagged === closedCells.length) {
          for(const [nr, nc] of closedCells) {
            game[nr][nc] = 'x';
            changed = true;
          }
        }
        // 3. if num of cells are flagged, the rest are safe
        else if(num === flagged) {
          for (const [nr, nc] of closedCells) {
            game[nr][nc] = String(open(nr, nc));
          }
          changed = true;
        }
      }
    }
  } while(changed);

  // 4. pick up any leftover '?'
  for(let r = 0; r < H; r ++) {
    for(let c = 0; c < W; c ++) {
      if(game[r][c] === '?') {
        game[r][c] = String(open(r, c));
      }
    }
  }
  return game.map(row => row.join(' ')).join('\n');
}


// Test Codes
const map1 = `\
? ? ? ? 0 0 0
? ? ? ? 0 ? ?
? ? ? 0 0 ? ?
? ? ? 0 0 ? ?
0 ? ? ? 0 0 0
0 ? ? ? 0 0 0
0 ? ? ? 0 ? ?
0 0 0 0 0 ? ?
0 0 0 0 0 ? ?`;
const result1 =`\
1 x x 1 0 0 0
2 3 3 1 0 1 1
1 x 1 0 0 1 x
1 1 1 0 0 1 1
0 1 1 1 0 0 0
0 1 x 1 0 0 0
0 1 1 1 0 1 1
0 0 0 0 0 1 x
0 0 0 0 0 1 1`;
const map2 = `\
0 ? ? ? 0 0 0 0 0 0
0 ? ? ? 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 ? ? ? ? ? 0 0
0 0 0 ? ? ? ? ? 0 0
0 0 0 ? ? ? ? ? 0 0
0 0 0 0 0 ? ? ? 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 ? ? ? 0 0
0 0 0 0 0 ? ? ? 0 0`;
const result2 = `\
0 1 x 1 0 0 0 0 0 0
0 1 1 1 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 1 1 2 1 1 0 0
0 0 0 1 x 3 x 2 0 0
0 0 0 1 1 3 x 2 0 0
0 0 0 0 0 1 1 1 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 1 1 1 0 0
0 0 0 0 0 1 x 1 0 0`;
const map3 = `\
0 ? ? ? 0 0 ? ?
0 ? ? ? 0 0 ? ?
0 ? ? ? 0 0 ? ?
0 ? ? ? ? ? ? 0
0 ? ? ? ? ? ? 0
0 ? ? ? ? ? ? ?
0 ? ? ? 0 ? ? ?
0 0 0 0 0 ? ? ?`;
const result3 = `\
0 1 x 1 0 0 1 1
0 2 2 2 0 0 1 x
0 1 x 1 0 0 1 1
0 1 1 1 1 1 1 0
0 1 1 1 1 x 1 0
0 1 x 1 1 2 2 1
0 1 1 1 0 1 x 1
0 0 0 0 0 1 1 1`;
const map4 = `\
0 ? ? ? 0 0 ? ?
0 ? ? ? 0 0 ? ?
0 ? ? ? 0 0 ? ?
0 ? ? ? ? ? ? 0
0 ? ? ? ? ? ? 0
? ? ? ? ? ? ? ?
? ? ? ? 0 ? ? ?
? ? ? 0 0 ? ? ?`;
const result4 = `\
0 1 x 1 0 0 1 1
0 2 2 2 0 0 1 x
0 1 x 1 0 0 1 1
0 1 1 1 1 1 1 0
0 1 1 1 1 x 1 0
2 3 x 1 1 2 2 1
x x 3 1 0 1 x 1
3 x 2 0 0 1 1 1`;

describe("Static Tests, Amount of tests:4", () => {
  it("Test 1/4: It should work for field #1", () => {
    game.load(result1);
    const res = solveMine(map1, 6);
    const message = getErrorMessage(res,result1);
    assert.equal(res, result1, message);
  });
  
  it("Test 2/4: It should work for field #2", () => {
    game.load(result2);
    const res = solveMine(map2, 5);
    const message = getErrorMessage(res,result2);
    assert.equal(res, result2, message);
  });
  
  it("Test 3/4: It should work for field #3", () => {
    game.load(result3);
    const res = solveMine(map3, 6);
    const message = getErrorMessage(res,result3);
    assert.equal(res, result3, message);
  });
  
  it("Test 4/4: It should work for field #4", () => {
    game.load(result4);
    const res = solveMine(map4, 9);
    const message = getErrorMessage(res,result4);
    assert.equal(res, result4, message);
  });
});