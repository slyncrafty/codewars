/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5db8a241b8d7260011746407
/* ========== ========== ========== ========== ========== ==========*/
/*
Tetris Series #2 — Primitive Gameplay

Description:
Fun fact

Tetris was the first video game played in outer space

In 1993, Russian cosmonaut Aleksandr A. Serebrov spent 196 days on the Mir space station with a very special distraction: a gray Game Boy loaded with Tetris. During that time the game orbited the Earth 3,000 times and became the first video game played in space. The Game Boy was sold in a Bonhams auction for $1,220 during the Space History Sale in 2011.
Task

Parse the game log and determine how many lines have been cleared through the game. The game ends if all commands from input were interpreted or the maximum field height (30 units) is reached.

A horizontal line, according to the rules of classic Tetris, is considered cleared if it represents a solid line without gaps formed by falling blocks. When such a line is formed, it disappears and any blocks above it fall down to fill the space.
Input

['4L2', '3R4', '4L3', '3L4', '4R0', '1L2'] # example

As an argument, you are given gamelog - an array of commands which you need to interpret.

Each command has the same form:

    The first character - the type of block (integer from 1 to 4, as in this kata we have only 4 types of blocks). Block types are described below.
    The second - the direction of movement ("R" or "L" - right or left).
    The third is an offset (integer from 0 to 4, as width of our field 9 units and new block always appears at the center of the field) relative to the starting position. Thus, L4 means the leftmost position, and R4 the rightmost, and L0 is equivalent to R0.

Output

The total number of cleaned horizontal lines (int) to the end of the game. Note, if the field height is exceeded, then the game ends immediately.
Blocks

In this kata we have only 4 types of blocks. Yes, this is not a classic set of shapes, but this is only for simplicity.

# and their graphical representation:
             ■
         ■   ■
     ■   ■   ■
 ■   ■   ■   ■
---+---+---+---
#1  #2  #3  #4

Field

Gamefield (a rectangular vertical shaft) has width 9 units and height 30 units.

Indices can be represented as:
L4 	L3 	L2 	L1 	L0/R0 	R1 	R2 	R3 	R4
Example 1

>>> gamelog = ['1R4', '2L3', '3L2', '4L1', '1L0', '2R1', '3R2', '4R3', '1L4']
>>> tetris(gamelog)
1

Gamefield before last command (_ means empty space):

___■___■_
__■■__■■_
_■■■_■■■_
_■■■■■■■■

Gamefield after all commands:

___■___■_
__■■__■■_
_■■■_■■■_

As you can see, one solid line was cleared. So, answer is 1.
Example 2

>>> gamelog = ['1L2', '4R2', '3L3', '3L1', '1L4', '1R4']
>>> tetris(gamelog)
0

Gamefield after all commands:

 _____■__
_■_■__■__
_■_■__■__
■■■■__■_■

As you can see, there is no solid lines, so nothing to clear. Our answer is 0, zero cleaned lines.
Note

Since there is no rotation of blocks in our model and all blocks are very simple, do not overthink the task.
*/



// Solution
function tetris(a) {
    let totalLines = 0;
    const height = 30;
    const width = 9;
    const gameField = Array.from( {length: height}, () => Array(width).fill(0));
    const columnHeights = Array(width).fill(0);

    for(const line of a) {
        const blockHeight = parseInt(line[0]);
        const dir = line[1];
        let offset = parseInt(line.slice(2));
        if(dir === 'L')  { offset *= -1};
        const col = offset + 4;

        let startRow = columnHeights[col];
        if(startRow + blockHeight >= height) return totalLines;
        // drop block (fill cells)
        for(let i = 0; i < blockHeight; i++)
        {
            gameField[startRow + i][col] = 1;
        }
        columnHeights[col] += blockHeight;   // tracking column heights
        // Clear Lines
        for(let r = 0; r < height; r++)
        {
            if(gameField[r].every(cell => cell === 1)) {
                gameField.splice(r, 1);
                gameField.push(Array(width).fill(0)); // add new row at the top
                totalLines++;
                for(let c = 0; c < width; c++)
                {
                    columnHeights[c]--;
                }
                r--;
            }
        }
    }
    drawGame(gameField);
    return totalLines;
}


function drawGame(gameField) {
    const height = gameField.length;
    const width = gameField[0].length;

    console.log('-'.repeat(width + 2));

    for(let r = height - 1; r >= 0; r--) {
        let line = '|';
        for(let c = 0; c < width; c++) {
            line += gameField[r][c] ? '■' : '_';
        }
        line += '|';
        console.log(line);
    }
    console.log('-'.repeat(width + 2));
}


// Test Codes
console.log(tetris(['1R4', '2L3', '3L2', '4L1', '1L0', '2R1', '3R2', '4R3', '1L4'])); // 1
console.log(tetris(['1L2', '4R2', '3L3', '3L1', '1L4', '1R4']));  // 0
console.log(tetris(['4R4', '4L3', '4L2', '4L1', '4L0', '4R1', '4R2', '4R3', '3L4'])); // 3