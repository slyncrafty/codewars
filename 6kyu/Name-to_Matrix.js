/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"
Examples

"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]

*/



// Solution
const matrixfy = str => {
  const length = str.length;
  if(length === 0) return "name must be at least one letter";
   
  const size = Math.ceil(Math.sqrt(length));
  const result = str + ('.').repeat(size**2 - length);
  const res = [];
  // Iterate through the result string and split into the square matrix
  for(let i = 0; i < result.length; i+= size) {
    const row = result.slice(i, i+size).split('');
    res.push(row);
  }
  return res;
};



// Test Codes
console.log(matrixfy(''), 'name must be at least one letter');
console.log(JSON.stringify(matrixfy('A')), JSON.stringify([['A']]));
console.log(JSON.stringify(matrixfy('Franklin')), JSON.stringify([['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']]));
console.log(JSON.stringify(matrixfy('Beyonce')), JSON.stringify([["B","e","y"],["o","n","c"],["e",".","."]]));
console.log(JSON.stringify(matrixfy('Bill')), JSON.stringify([ ["B", "i"], ["l", "l"] ]));
console.log(JSON.stringify(matrixfy('Frank')), JSON.stringify([ ["F", "r", "a"], ["n", "k", "."], [".", ".", "."] ]));
