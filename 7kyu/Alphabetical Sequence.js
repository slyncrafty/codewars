/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5bd00c99dbc73908bb00057a
/* ========== ========== ========== ========== ========== ==========*/
/*
Alphabetical Sequence

Description:
In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.
Example

"ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"

Technical Details

    The string will include only letters.
    The first letter of each sequence is uppercase followed by n-1 lowercase.
    Each sequence is separated with a comma.
    Return value needs to be a string.

*/



// Solution
function alphaSeq (str) {
  return [...str.toLowerCase()].sort().map((e) => e.toUpperCase() + e.repeat(e.charCodeAt(0)-97)).join(',');
}



// Test Codes
const doTest = (a, b) => {
    if(alphaSeq(a) === b) console.log('Correct!');
    else console.error('Incorrect', alphaSeq(a), b);
}

doTest("ZpglnRxqenU", "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz");
doTest("NyffsGeyylB", "Bb,Eeeee,Ffffff,Ffffff,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Sssssssssssssssssss,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy");
doTest("MjtkuBovqrU", "Bb,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Ooooooooooooooo,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Tttttttttttttttttttt,Uuuuuuuuuuuuuuuuuuuuu,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv");
doTest("EvidjUnokmM", "Dddd,Eeeee,Iiiiiiiii,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Mmmmmmmmmmmmm,Nnnnnnnnnnnnnn,Ooooooooooooooo,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv");
doTest("HbideVbxncC", "Bb,Bb,Ccc,Ccc,Dddd,Eeeee,Hhhhhhhh,Iiiiiiiii,Nnnnnnnnnnnnnn,Vvvvvvvvvvvvvvvvvvvvvv,Xxxxxxxxxxxxxxxxxxxxxxxx");
doTest("A", "A");
doTest("", "");