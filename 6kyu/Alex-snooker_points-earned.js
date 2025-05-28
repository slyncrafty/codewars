/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58b96d99404be9187c000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Alex & snooker: points earned.

Description:
Story

Alex is a great fan of snooker and he likes recording the results of his favourite players by recording the balls that fall into the pockets of the table. He asks you to help him with a program that calculates the points a player scored in a given set using his notes. Unfortunately, his notes are quite a mess... Sometimes Alex forgets that he already wrote down a color and records it multiple times.
Task

Given his short hand notation as string, calculate the points a player scored in a set.

He codes the ball colors with letters:

- R  = red     -->  1 point
- Y  = yellow  -->  2 points
- G  = green   -->  3 points
- Bn = brown   -->  4 points
- Be = blue    -->  5 points
- P  = pink    -->  6 points
- Bk = black   -->  7 points
- W  = white   -->  no points because it's a foul

The color may be followed by a number, e.g. R12 would stand for 12 red balls pocketed. If there is no number given, the ball was pocketed once.

Notes:

    If the string includes the white ball, return 'Foul'
    If the total score is more than 147, return 'invalid data'

For your convenience the points for each color are provided as hash / dictionary with the name blz
Examples

'R15P3G1Bk4Y1Bn1Be3'          -->  85
'R13Bk14YRGBnBkRBePBk1'       -->  147
'G9G11P9Bn2Bn1Be10G7WBn10G3'  -->  'Foul'
'Bn14Bn14Bn8P9'               -->  'invalid data'

*/



const blz = { R: 1, Y: 2, G: 3, Bn: 4, Be: 5, P: 6, Bk: 7 };
// Solution
function frame(balls) {
  // You can access the preloaded `blz` dictionary like this: blz["R"]
  if(!balls) return 0;
  if((/w/i).test(balls) ) return 'Foul';
  const score = balls.split(/(?=[A-Z])/)
                    .map((item) => {
                      const score = item.match(/[a-zA-Z]+|[0-9]+/g);
                      return blz[score[0]] * (score[1] ? parseInt(score[1]) : 1);
                    })
                    .reduce((sum, curr) => sum + curr, 0)
  return score > 147 ? 'invalid data' : score;
}



// Test Codes
  
console.log(frame("R15Bk16YGBnBeP"), 147);
console.log(frame("R15Bk14YGBnBePBk2"), 147);
console.log(frame("R15Bk14YGBnBkBePBk1"), 147);
console.log(frame("R13Bk14YRGBnBkRBePBk1"), 147);
console.log(frame("R15Bk15YGBnBePBk"), 147);

console.log(frame("Bk16YGBnBeP"), 132);
console.log(frame("R13Bk14YRGBnBkRBeP"), 140);
console.log(frame("R13Y2GBnBkRBeP"), 43);
console.log(frame("R13Bk14YRRBeP"), 126);
console.log(frame("R9RGBn4BkRBeP"), 48);

console.log(frame("R15Bk16GYGBnBWeP"), "Foul");
console.log(frame("R15Bk14YGWBnBePBk2"), "Foul");
console.log(frame("R8Bk17YGBnBkBePBk1"), "invalid data");
console.log(frame("R8Bk17YGBnBk5BePBk1"), "invalid data");
