/*
The Speed of Letters

Description:

Given a string as input, return a new string with each letter pushed to the right by its respective index in the alphabet.

We all know that A is a slow and Z is a fast letter. This means that Z gets shifted to the right by 25 spaces, A doesn't get shifted at all, and B gets shifted by 1 space.

You can assume the following things about your input:

    It will only contain uppercase letters from A to Z, no whitespaces or punctuation;
    Input strings will not exceed 100 characters (although your output string might!)

Note that if 2 or more letters fall onto the same space after shifting, the latest character will be used. For example: "BA" -> " A"
Examples

"AZ"   -->  "A                         Z"
"ABC"  -->  "A B C"
"ACE"  -->  "A  C  E"
"CBA"  -->  "  A"
"HELLOWORLD"  -->  "     E H    DLL   OLO   R  W"

*/



// Solution
function speedify(input) {
    const offset = 'A'.charCodeAt(0);
    let maxShift = 0;
    let positions = [];
    
    for (let i = 0; i < input.length; i++){
      let shift = input[i].charCodeAt(0) - offset;
      let newPos = i + shift;
      maxShift = Math.max(maxShift, newPos);
      positions.push([newPos, input[i]]);
    }
    let res = new Array(maxShift + 1).fill(' ');
    
    for (let [pos, char] of positions) {
      res[pos] = char;
    }
    return res.join('');
}