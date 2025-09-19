/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57b2020eb69bfcbf64000375
/* ========== ========== ========== ========== ========== ==========*/
/*
Weird words 

Description:
Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

    Spaces and special characters should remain the same.
    Capital letters should transfer in the same way but remain capitilized.

Examples

"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"

*/



// Solution
function nextLetter(str) {
    return str.replace(/[a-z]/gi, (char) => {
        const code = char.charCodeAt(0);
        if(code >=65 && code<= 90) {    // A-Z
            return String.fromCharCode(((code - 65 + 1) % 26) + 65);
        }
        if(code >= 97 && code <= 122) { // a-z
            return String.fromCharCode(((code - 97 + 1) % 26 ) + 97);
        }
        return char;
    })
}



// Test Codes
console.log(nextLetter("My Name Is Zoo"), "Nz Obnf Jt App");
console.log(nextLetter("What is your name"), "Xibu jt zpvs obnf")
console.log(nextLetter("zOo"), "aPp")