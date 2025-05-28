/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5809b62808ad92e31b000031
/* ========== ========== ========== ========== ========== ==========*/
/*
Basic Math (Add or Subtract)

Description:
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.
Examples

"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/


// Solution
function calculate(str) {
  const tokens = str.split(/(plus|minus)/);
  let result = parseInt(tokens[0], 10);
  for (let i = 1; i < tokens.length - 1; i=i+2) {
    const operator = tokens[i];
    const number = parseInt(tokens[i+1], 10);
    if(operator === 'plus') result += number;
    else if(operator === 'minus') result -= number;
  }
  return result.toString();
}


// Test Codes
console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');