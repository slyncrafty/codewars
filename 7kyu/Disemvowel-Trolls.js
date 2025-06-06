/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52fba66badcd10859f00097e
/* ========== ========== ========== ========== ========== ==========*/
/*
Disemvowel Trolls

Description:

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/



// Solution
function disemvowel(str) {
  let res = '';
  let count = 0;
  const vowels = "aeiou";
  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    for(let j = 0; j < vowels.length; j++) {
        if(str[i].toLowerCase() === vowels[j]){
          char = '';
          continue;
        }
    }
    res += char;
  }
  return res;
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}



// Test Codes
console.log(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read") === "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?") === "Wht r y,  cmmnst?")