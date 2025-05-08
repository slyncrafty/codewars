/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57fafd0ed80daac48800019
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

Move all exclamation marks to the end of the sentence
Examples

"Hi!"          ---> "Hi!"
"Hi! Hi!"      ---> "Hi Hi!!"
"Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
"Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
"Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"

*/



// Solutions

function remove (string) {
    //coding and coding....
    const exclamationsCount = 0;
    const noExclamations = '';
    for(const char of string) {
      if(char === '!'){
        exclamationsCount = (exclamationsCount || 0) + 1;
      }
      else noExclamations += char;
    }
    return noExclamations + ('!').repeat(exclamationsCount);
}


// function remove (string) {
//     const exclamationsCount = string.split('').filter(c => c === '!').length;
//     const noExclamations = string.replace(/!/g, '');
//     return noExclamations + '!'.repeat(exclamationsCount);
// }



// Test Codes
console.log(remove("Hi!", "Hi!"));
console.log(remove("Hi! Hi!", "Hi Hi!!"));
console.log(remove("Hi! Hi! Hi!", "Hi Hi Hi!!!"));
console.log(remove("Hi! !Hi Hi!", "Hi Hi Hi!!!"));
console.log(remove("Hi! Hi!! Hi!", "Hi Hi Hi!!!!"));