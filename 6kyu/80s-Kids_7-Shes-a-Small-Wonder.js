/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56743fd3a12043ffbb000049
/* ========== ========== ========== ========== ========== ==========*/
/*
80's Kids #7: She's a Small Wonder

Description:
Vicky is quite the small wonder. Most people don't even realize she's not a real girl, but a robot living amongst us. Sure, if you stick around her home for a while you might see her creator open up her back and make a few tweaks and even see her recharge in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words she's learning.

Write a function, learnWord(word) ( LearnWord(word) in C# ) which is a method of the Robot object. The function should report back whether the word is now stored, or if she already knew the word.

Example:

var vicky = new Robot();
vicky.learnWord('hello') -> 'Thank you for teaching me hello'
vicky.learnWord('abc') -> 'Thank you for teaching me abc'
vicky.learnWord('hello') -> 'I already know the word hello'
vicky.learnWord('wow!') -> 'I do not understand the input'

Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!
*/



// Solution
function Robot() {
  // The Robot object
  this.words = new Set();
  const preload = ['I do not understand the input', 'I already know the word', 'Thank you for teaching me']
  for (const phrase of preload) {
    for(const w of phrase.toLowerCase().split(' '))
      this.words.add(w);
  }
}

Robot.prototype.learnWord = function(word) {
  if(!/^[a-z]+$/i.test(word)) return 'I do not understand the input';  
  const lowerWord = word.toLowerCase();
  if(this.words.has(lowerWord)) return `I already know the word ${word}`;
  else{
    this.words.add(lowerWord);
    return `Thank you for teaching me ${word}`;
  }
  
}



// Test Codes
const strictEqual = (actual, expected) => {
    if(actual === expected)
        console.log('Correct');
    else console.error('Incorrect');
}
const vicky = new Robot();
strictEqual(vicky.learnWord('hello'),'Thank you for teaching me hello');
strictEqual(vicky.learnWord('world'),'Thank you for teaching me world');
strictEqual(vicky.learnWord('goodbye'),'Thank you for teaching me goodbye');
strictEqual(vicky.learnWord('world'),'I already know the word world');
strictEqual(vicky.learnWord('World'),'I already know the word World');
strictEqual(vicky.learnWord('thank'),'I already know the word thank');
strictEqual(vicky.learnWord('wow!'),'I do not understand the input');
strictEqual(vicky.learnWord('thank'),'I already know the word thank');
strictEqual(vicky.learnWord('you'),'I already know the word you');
strictEqual(vicky.learnWord('for'),'I already know the word for');
strictEqual(vicky.learnWord('teaching'),'I already know the word teaching');
strictEqual(vicky.learnWord('me'),'I already know the word me');
strictEqual(vicky.learnWord('I'),'I already know the word I');
strictEqual(vicky.learnWord('HELLO'),'I already know the word HELLO');
strictEqual(vicky.learnWord('a whole bunch of words'),'I do not understand the input');
strictEqual(vicky.learnWord('1234'),'I do not understand the input');
strictEqual(vicky.learnWord(' '),'I do not understand the input');
strictEqual(vicky.learnWord(''),'I do not understand the input');
strictEqual(vicky.learnWord('[]'),'I do not understand the input'); 
strictEqual(vicky.learnWord('sleep'),'Thank you for teaching me sleep');
strictEqual(vicky.learnWord('power'),'Thank you for teaching me power');
strictEqual(vicky.learnWord('CLOSET'),'Thank you for teaching me CLOSET');
strictEqual(vicky.learnWord('ALREADY'),'I already know the word ALREADY');
strictEqual(vicky.learnWord('KnOW'),'I already know the word KnOW');
strictEqual(vicky.learnWord('understand'),'I already know the word understand');
