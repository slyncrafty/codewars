/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/635b8fa500fba2bef9189473/
/* ========== ========== ========== ========== ========== ==========*/
/*
PhoneWords

Description:
Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

    0 is a space in the string.
    1 is used to separate letters with the same number.
    always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
    you cannot return digits.
    Given a empty string, return empty string.
    Return a lowercase string.

Examples:

"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "

*/



// Solution
function phoneWords(stringOfNums) {
  if(stringOfNums === '') return '';
  
  const map = {
    '2' : 'abc',
    '3' : 'def',
    '4' : 'ghi',
    '5' : 'jkl',
    '6' : 'mno',
    '7' : 'pqrs',
    '8' : 'tuv',
    '9' : 'wxyz'
  };
  
  const separated =stringOfNums.split('1');
  let res = [];
  
  for(const part of separated) {
    if(!part) continue;
    
    let i = 0;
    while(i < part.length) {
      const d = part[i];
      
      if(d === '0') {
        let j = i;
        while (j < part.length && part[j] === '0') j++;
        res.push(" ".repeat(j - i));
        i = j;
        continue;
      }
      
      if(map[d]) {
        let j = i;
        while(j < part.length && part[j] === d) j++;
        const len = j - i;
        const letters = map[d];
        const k = letters.length;
        
        const quotient = Math.floor(len / k);
        const rem = len % k;
        
        if(quotient > 0) res.push(letters[k - 1].repeat(quotient));
        if(rem > 0) res.push(letters[rem - 1]);
        
        i = j;
        continue;
      }
      i++;
    }
  }
  return res.join("");
}



// Test Codes
const strictEqual= (a,b) => {
    if(a === b) console.log('Correct!');
    else console.error('Incorect!');
}

strictEqual(phoneWords("443355555566604466690277733099966688"),"hello how are you")
strictEqual(phoneWords("55282"), "kata")
strictEqual(phoneWords("44460208337777833777"), "im a tester")
strictEqual(phoneWords("22266631339277717777"), "codewars")
strictEqual(phoneWords("66885551555"), "null")
strictEqual(phoneWords("833998"), "text")
strictEqual(phoneWords("000"), "   ")
strictEqual(phoneWords("7999844666166"), "python")
strictEqual(phoneWords("55886444833"), "kumite")
strictEqual(phoneWords("271755533"), "apple")
strictEqual(phoneWords(""), "")
strictEqual(phoneWords("111"), "")