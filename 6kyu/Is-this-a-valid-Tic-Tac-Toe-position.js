/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/68582183cf16719a5ba943df
/* ========== ========== ========== ========== ========== ==========*/
/*
Is this a valid Tic Tac Toe position?

Description:
You work as a data scientist at an IT company, and your boss, all of a sudden, asked you to find the most common patterns in Tic Tac Toe games submitted to a survey on your company's website.

However, some of them are not from real games, i. e. the position on such a game board cannot be reached through normal play.

You have to find a way to filter out such "games", leaving only the correct (reachable) ones.
Task

You will be given a 3x3 list of characters (see Initial Solution and Sample Tests for the particular encoding used in your language) representing a Tic Tac Toe game board, with the following specifications:

    'X' is a square occupied by player X,
    'O' is a square occupied by player O,
    '_' is a square not occupied by either player.

Given this board, you need to determine whether this board represents a position that is reachable through normal play, and return a boolean value: true (if the condition is satisfied) and false otherwise.

Validation rules:

    'X' should always be the first player to move.
    During one move, a player must occupy one extra square.
    If a player manages to occupy 3 squares in a row (horizontally, vertically or diagonally), the game is immediately over and no further moves can be made; that player wins and is declared victorious (such a game is valid).
    If all squares are occupied and neither player managed to get 3 in a row, the game ends in a draw (which is valid).
    Games where not all squares are occupied and neither player got 3 in a row are considered valid.

Special case: This board (and similar ones where 'X' has two three-in-a-rows but the position can be reached):

X X X
O O X
O O X

should result in true.

The board is guaranteed to be 3x3 and to consist of only 'X', 'O' or '_'.

*/



// Solution
function isValid(board) {
  let countX = 0, countO = 0;
  for(const row of board) {
    for(const char of row) {
      if(char === 'X') countX++;
      if(char === 'O') countO++;
    }
  }
  if(!(countX === countO || countO + 1 === countX)) return false;
  const rows = board;
  const cols = [0, 1, 2].map(c => rows[0][c] + rows[1][c] + rows[2][c]);
  const dias = [
    rows[0][0] + rows[1][1] + rows[2][2],
    rows[0][2] + rows[1][1] + rows[2][0] 
  ];
  
  const lines = [...rows, ...cols, ...dias];
  
  const xWon = lines.some(e => e === 'XXX');
  const oWon = lines.some(e => e === 'OOO');
  
  if(xWon && oWon) return false;
  if(xWon) return countX === countO + 1;
  if(oWon) return countX === countO;
  
  return true;
}



// Test Codes
console.log(isValid(["XOX","XOX","OXO"]), true);
console.log(isValid(["OOO","XXX","__X"]), false);
console.log(isValid(["XXO","OOX","XOO"]), false);
console.log(isValid(["XXX","OOX","OOX"]), true);