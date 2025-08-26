/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5832514f64a4cecd1c000013/
/* ========== ========== ========== ========== ========== ==========*/
/*
Chess piece values

Description:
This is a rough estimation and the real piece value depends on other factors in game as well, such as the game being a closed or open one, which can favor either knights or bishops. But for our purposes we will use the mentioned values.

Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king. You will not be tested for invalid input.
Examples

[ [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", " ", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "] ], 
  "white")

This should return 14, because white has a queen (9) and a rook (5). The same board should return 9 for black (one queen).

[ [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", "b-pawn", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", "w-pawn", " ", " ", " "],
  [" ", " ", " ", " ", " ", "w-bishop", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "b-pawn", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "] ],
  "white");

This should return 18 for white (queen, rook, pawn, bishop). The same board should return 11 for black (queen, 2 pawns)
*/



// Solution
function piecesValue(arr, s) {
  const player = s[0] === 'w' ? 'w' : 'b';
  let score = 0;
  for(const row of arr) {
    for(const space of row) {
      if(space[0] === player){
        const piece = space.slice(2);
        const pieceScore = hash[piece];
        if(pieceScore) score += pieceScore;
      }
    }
  }
  return score;
}

const hash = Object.freeze({ queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1 });



// Test Codes
function assertEq(actual, expected, msg = "") {
    if(actual !== expected) {
        console.error(`Incorrect! ${msg}: actual ${actual} should match expected ${expected}`);
    } else {
        console.log(`Correct! ${msg}`);
    }
}

var r1 = [['b-bishop',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
            [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
            [' ',' ',' ',' ','w-pawn',' ',' ',' '],
            [' ',' ',' ',' ',' ','w-bishop',' ',' '],
            ['w-king',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ','b-pawn','b-pawn',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ',' ']];
var r2 = [[' ',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ','b-king',' ',' '],
            [' ','b-knight',' ',' ','w-pawn',' ',' ',' '],
            [' ',' ','w-bishop',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ',' '],
            [' ','w-pawn',' ',' ',' ','w-pawn',' ',' '],
            [' ',' ',' ',' ','b-pawn',' ',' ',' '],
            [' ','w-rook',' ',' ',' ','w-king',' ',' ']];
var r3 = [[' ',' ',' ',' ','b-king',' ',' ',' '],
            [' ','b-bishop',' ',' ','b-pawn','b-pawn',' ',' '],
            [' ',' ',' ',' ','b-knight',' ',' ',' '],
            [' ',' ','w-queen',' ',' ',' ',' ',' '],
            [' ','w-bishop',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ','b-rook'],
            [' ','w-pawn','w-pawn',' ',' ',' ',' ',' '],
            [' ',' ','w-king',' ',' ',' ',' ',' ']]
assertEq(piecesValue(r1,'white'), 18);
assertEq(piecesValue(r1,'black'), 15);
assertEq(piecesValue(r2,'white'), 11);
assertEq(piecesValue(r2,'black'), 4);
assertEq(piecesValue(r3,'white'), 14);
assertEq(piecesValue(r3,'black'), 13);