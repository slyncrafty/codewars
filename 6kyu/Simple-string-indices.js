/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple string indices

Description:
In this Kata, you will be given a string with brackets and an index of an opening bracket and your task will be to return the index of the matching closing bracket. Both the input and returned index are 0-based except in Fortran where it is 1-based. An opening brace will always have a closing brace. Return -1 if there is no answer (in Haskell, return Nothing; in Fortran, return 0; in Go, return an error)
Examples

solve("((1)23(45))(aB)", 0) = 10 // the opening brace at index 0 matches the closing brace at index 10
solve("((1)23(45))(aB)", 1) = 3 
solve("((1)23(45))(aB)", 2) = -1 // there is no opening bracket at index 2, so return -1
solve("((1)23(45))(aB)", 6) = 9
solve("((1)23(45))(aB)", 11) = 14
solve("((>)|?(*'))(yZ)", 11) = 14

Input will consist of letters, numbers and special characters, but no spaces. The only brackets will be ( and ). 
*/



// Solution
function solve(str,idx){
  if(str[idx] !== '(') return -1;
  let openCounter = 0, closeCounter = 0;
  for(let i = idx; i < str.length; i++) {
    if(str[i] === '(') openCounter++;
    if(str[i] === ')') closeCounter++;
    if(openCounter === closeCounter) return i;
  }
  return -1;
}



// Test Codes
const strictEqual = (actual, expected) => {
    if(actual === expected) console.log('Correct');
    else console.log('Incorrect', actual, expected);
}
strictEqual(solve("((1)23(45))(aB)",0),10);
strictEqual(solve("((1)23(45))(aB)",1),3);
strictEqual(solve("((1)23(45))(aB)",2),-1);
strictEqual(solve("((1)23(45))(aB)",6),9);
strictEqual(solve("((1)23(45))(aB)",11),14);
strictEqual(solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))",11),28);
strictEqual(solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))",0),29);
strictEqual(solve("(>_(va)`?(h)C(as)(x(hD)P|(fg)))",19),22);