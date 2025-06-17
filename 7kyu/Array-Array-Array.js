/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57eb936de1051801d500008a
/* ========== ========== ========== ========== ========== ==========*/
/*
Array Array Array

Description:
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/



// Solution
/**
 * @param {Array} x, a 2-element array
 * @returns {Array|String} an array of arrays of `x` repeated `score` times.
 */
function explode(x) {
  const [a,b] = x;
  const aIsNum = typeof a === 'number';
  const bIsNum = typeof b === 'number';
  if(!aIsNum && !bIsNum) return 'Void!';
  const score = ((aIsNum) ? a : 0 ) + ((bIsNum) ? b : 0);
  let res = [];
  for(let i = 0; i < score; i++) {
    res.push(x);
  }
  return res;
}



// Test Codes
console.log(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
console.log(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
console.log(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
console.log(explode(['a', 'b']), 'Void!');  
console.log(explode(["a", 0]), []); 