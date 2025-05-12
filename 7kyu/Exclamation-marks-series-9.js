/* ========== ========== ========== ========== ========== ==========*/
/* https://www.codewars.com/kata/57fb017d9610ce369a0006ac
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.
Examples

"Hi!"            ---> "Hi"
"Hi! Hi!"        ---> "Hi Hi"
"Hi! Hi"         ---> "Hi Hi!"
"Hi! Hi Hi!!"    ---> "Hi Hi! Hi!!"
"!Hi! !Hi !Hi!!" ---> "!Hi !Hi! !Hi!!"

*/



// Solutions
function removeOrAdd (string) {
  let words = string.split(' ');
  for(let i = 0 ; i < words.length; i++){
    let word = words[i];
    const firstChar = word[0];
    const lastChar = word[word.length-1];
    const secondToLastChar = word[word.length-2]
    
    if(lastChar === '!' && secondToLastChar === '!'){
        continue;
    } else if(lastChar === '!'){
      words[i] = word.slice(0, -1)
    } else{
      words[i] = word + '!'
    }
    }
	return words.join(' ');
}



// Test Codes
console.log(removeOrAdd("Hi!") === "Hi");
console.log(removeOrAdd("Hi! Hi!") === "Hi Hi");
console.log(removeOrAdd("Hi! Hi") === "Hi Hi!");
console.log(removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!");
console.log(removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!");

 

 
 
 