/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5572f7c346eb58ae9c000047
/* ========== ========== ========== ========== ========== ==========*/
/*
Complete The Pattern #1 

Description:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.

Rules/Note:

    If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.

Pattern:

1
22
333
....
.....
nnnnnn

Examples:

    pattern(5):

    1
    22
    333
    4444
    55555

    pattern(11):

    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
    10101010101010101010
    1111111111111111111111

    Hint: Use \n in string to jump to next line

*/



// Solution
function pattern(n){
  if(n < 1) return "";
  
  let output=[];
  for(let i = 1; i <= n; i++) {
    output.push(String(i).repeat(i));
  }
  return output.join("\n");
}



// Test Codes
const checkEquals = (a, b) => {
    if(a === b) console.log("Correct!");
    else console.error("Incorrect!")
}
checkEquals(pattern(1),"1");
checkEquals(pattern(2),"1\n22");
checkEquals(pattern(5),"1\n22\n333\n4444\n55555");
