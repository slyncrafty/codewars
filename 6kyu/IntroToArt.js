/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5d7d05d070a6f60015c436d1
/* ========== ========== ========== ========== ========== ==========*/
/*
IntroToArt

Description:

Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

Write a function that takes an integer as height and returns a list of strings with a line-by-line image of the object.

Below is an example function:

# height = 3 should return:
[
  "*   *   *",
  " * * * * ",
  "  *   *  "
]

# height = 5 should return:
[
  "*       *       *",
  " *     * *     * ",
  "  *   *   *   *  ",
  "   * *     * *   ",
  "    *       *    "
]

Return an empty list for height < 2.

*/



// Solution
function getW(height) {
  if( height < 2 ) return [];
  const width = (height - 1) * 4 + 1;
  let lines = [];
  for(let i = 0; i < height; i++) {
    let line = Array(width).fill(' ');
    line[i] = '*';
    line[Math.floor(width/2) - i] = '*';
    line[Math.floor(width/2) + i] = '*'; 
    line[width - 1 - i] = '*';
    lines.push(line.join(''));
  }
  return lines;
}



// Test Codes
console.log(getW(2), ["* * *", " * * "]);
console.log(3, ["*   *   *", " * * * * ", "  *   *  "]);
console.log(4, [
    "*     *     *",
    " *   * *   * ",
    "  * *   * *  ",
    "   *     *   "
]);
console.log(5, [
    "*       *       *",
    " *     * *     * ",
    "  *   *   *   *  ",
    "   * *     * *   ",
    "    *       *    "
]);
console.log(6, [
    "*         *         *",
    " *       * *       * ",
    "  *     *   *     *  ",
    "   *   *     *   *   ",
    "    * *       * *    ",
    "     *         *     "
]);