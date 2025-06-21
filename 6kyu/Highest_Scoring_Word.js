/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
/* ========== ========== ========== ========== ========== ==========*/
/*
Highest Scoring Word

Description:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/



// Solution
function high(x){
  let max = [0, null];
  x.split(' ').forEach((elem, i) => {
    if(max[0] < getScore(elem)) {
      max[0] = getScore(elem);
      max[1] = elem;
    }
  })
  return max[1]
}

const getScore = (word) => {
  const offset = 'a'.charCodeAt() - 1;
  return word.split('').map((e,i) => e.charCodeAt() - offset).reduce((acc, curr) => acc+curr, 0);
}


// Second solution
function high(s){
  let as = s.split(' ').map(s => 
    [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)
  );
  return s.split(' ')[as.indexOf(Math.max(...as))];
}



/**
 *  Lesson Learned
 * 
 *  First solution is more efficient and readable. Single traversal through the array without creating a new array. 
 *  The second solution is concise but a bit dense. 
 *  [...s] is slightly slower than s.split('')
 *  Math.max(...s) creates a new array and spreads it
 *  indexOf() does a linear search 
 */



// Test Codes
console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');