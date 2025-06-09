/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5864f90473bd9c4b47000057
/* ========== ========== ========== ========== ========== ==========*/
/*
Connect Four - placing tokens

Description:
Simulate placing tokens on a Connect Four board.
Connect Four Example
INPUT

A list of integers representing the columns (from 0 to 6) where tokens are dropped, in order. The first player is yellow (Y), followed by red (R), alternating turns.
OUTPUT

The final state of the board after all tokens have been placed. Empty cells are marked with -.
ASSUMPTIONS

    The board has 7 columns and 6 rows (standard Connect Four size).
    Tokens fall to the lowest available position in the chosen column.
    All input values are valid and within the allowed range.
    The input list must not be modified.
    Output format: rows are listed from top to bottom, with the top row first and the bottom row last.

EXAMPLES

Example 1:

Moves = [0,1,2,5,6]

Result:
['-', '-', '-', '-', '-', '-', '-']
['-', '-', '-', '-', '-', '-', '-']
['-', '-', '-', '-', '-', '-', '-']
['-', '-', '-', '-', '-', '-', '-']
['-', '-', '-', '-', '-', '-', '-']
['Y', 'R', 'Y', '-', '-', 'R', 'Y']

Example 2:

Moves = [0,1,2,5,6,2,0,0]

Result:
['-', '-', '-', '-', '-', '-', '-']
['-', '-', '-', '-', '-', '-', '-']
['-', '-', '-', '-', '-', '-', '-']
['R', '-', '-', '-', '-', '-', '-']
['Y', '-', 'R', '-', '-', '-', '-']
['Y', 'R', 'Y', '-', '-', 'R', 'Y']

*/



// Solution
function connectFourPlaceTokens(columns) {
  const board = Array.from( { length: 6}, () => Array(7).fill('-'));
  let freqMap = {};
  let turn = null;
  for(const col of columns) {
    turn = (turn === 'Y') ? 'R' : 'Y';
    freqMap[col] = (freqMap[col] || 0) + 1;
    board[freqMap[col]-1][col] = turn;
  }
  return board.reverse();
}



// Test Codes
const tests = [
    {
        columns : [0,1,0,1,0,1],
        solution : [['-', '-', '-', '-', '-', '-', '-'], 
                        ['-', '-', '-', '-', '-', '-', '-'], 
                        ['-', '-', '-', '-', '-', '-', '-'], 
                        ['Y', 'R', '-', '-', '-', '-', '-'], 
                        ['Y', 'R', '-', '-', '-', '-', '-'], 
                        ['Y', 'R', '-', '-', '-', '-', '-']],
    },
    {
        columns : [0,1,2,5,6,2,0,0],
        solution : [['-', '-', '-', '-', '-', '-', '-'], 
                    ['-', '-', '-', '-', '-', '-', '-'], 
                    ['-', '-', '-', '-', '-', '-', '-'], 
                    ['R', '-', '-', '-', '-', '-', '-'], 
                    ['Y', '-', 'R', '-', '-', '-', '-'], 
                    ['Y', 'R', 'Y', '-', '-', 'R', 'Y']],
    },
    {
        columns : [0,0,1,4,4,5,6,2,3,4,5,6,3,3,5,6],
        solution : [['-', '-', '-', '-', '-', '-', '-'], 
                    ['-', '-', '-', '-', '-', '-', '-'], 
                    ['-', '-', '-', '-', '-', '-', '-'], 
                    ['-', '-', '-', 'R', 'R', 'Y', 'R'], 
                    ['R', '-', '-', 'Y', 'Y', 'Y', 'R'], 
                    ['Y', 'Y', 'R', 'Y', 'R', 'R', 'Y']],
    },
    {
        columns : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
        solution : [['R', 'R', 'R', 'R', '-', '-', '-'], 
                    ['Y', 'Y', 'Y', 'Y', '-', '-', '-'], 
                    ['R', 'R', 'R', 'R', '-', '-', '-'], 
                    ['Y', 'Y', 'Y', 'Y', '-', '-', '-'], 
                    ['R', 'R', 'R', 'R', '-', '-', '-'], 
                    ['Y', 'Y', 'Y', 'Y', '-', '-', '-']],
    },
    {
        columns : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 
                    4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
        solution : [['R', 'R', 'R', 'R', 'R', 'R', 'R'], 
                    ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'], 
                    ['R', 'R', 'R', 'R', 'R', 'R', 'R'], 
                    ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'], 
                    ['R', 'R', 'R', 'R', 'R', 'R', 'R'], 
                    ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']],
    },
]

function deepCompare(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if(arr1.length !== arr2.length) return false;

    return arr1.every((row, i) => 
        Array.isArray(row) && 
        Array.isArray(arr2[i]) && 
        row.length === arr2[i].length &&
        row.every((val, j) => val === arr2[i][j])
    );
}

tests.forEach((test, i) => {
    console.log(`Test ${i+1}: ${deepCompare(connectFourPlaceTokens(test.columns), test.solution) === true ? "Passed!" : "Failed"}`);
});