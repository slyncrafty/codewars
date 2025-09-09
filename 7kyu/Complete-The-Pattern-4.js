/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55736129f78b30311300010f
/* ========== ========== ========== ========== ========== ==========*/
/*
Complete The Pattern #4

Description:
You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
Examples:

pattern(4):

1234
234
34
4

pattern(6):

123456
23456
3456
456
56
6

Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/



// Solution
function pattern(n){
  if(n <= 0) return "";
  const output=[];
  for(let i = 0; i < n; i++) {
    let line = [];
    for(let j = i + 1; j <= n; j++) {
      line.push(j);
    }
    output.push(line.join(""));
  }
  return output.join("\n");
}



// Test Codes
const simpleTest = (a, b) => {
    if(a === b) console.log("Correct!");
    else console.error("Incorrect");
}
simpleTest(pattern(1),"1");
simpleTest(pattern(2),"12\n2");
simpleTest(pattern(5),"12345\n2345\n345\n45\n5");