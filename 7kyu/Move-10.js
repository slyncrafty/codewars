/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57cf50a7eca2603de0000090
/* ========== ========== ========== ========== ========== ==========*/
/*
Move 10

Description:
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/



// Solution
function moveTen(s){  
  const range = 'z'.charCodeAt();
  const offset = range - 'a'.charCodeAt() + 1;
  return s.split('').map(e => {
    let newChar = (e.charCodeAt() + 10);
    if (newChar > range) { newChar -= offset; }
    return String.fromCharCode(newChar);
    }).join('');
}



function moveTen(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const move10 = 'jklmnopqrstuvwxyzabcdefghi';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}


/*  Lesson learned
**  the second solution with two look-up strings performs less efficient than the first solution using char-code arithmetic.
**  because `.indexOf(x)` has a hidden loop operation which scans up to 26 chars each time it is called.
*/

// Test Codes
console.log(moveTen("testcase") === "docdmkco");
console.log(moveTen("codewars") === "mynogkbc");
console.log(moveTen("exampletesthere") === "ohkwzvodocdrobo");
