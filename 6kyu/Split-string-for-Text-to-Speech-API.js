/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/579bed0e72292d32c8000084/
/* ========== ========== ========== ========== ========== ==========*/
/*
Split string for Text-to-Speech API

Description:
You bought an access to Text-to-Speech API and you want to utilise it by converting big amounts of text into audio files. Now, while you had no problems with copy-pasting things like audio files downloading from Stack Overflow, your API has a limitation - it accepts no more than 50 characters each call. So you decide to make multiple calls and then concat audio files you receive. However, you cannot just split your string into 50 characters long parts, because it will split sentence mid-word, resulting in (at best) funny spelling. How annoying!

And to make it worse, your boss is performance-freak so he forbade you from using String.prototype.split and String.prototype.indexOf functions, saying you don't need these.

Please leave punctuation as is. Also, for simplicity, don't remove spaces except for the last one from every part.

Write a function splitText(text, max) that:

    will split the text into parts no longer than max
    will return an array with those parts
    will make sure text isn't going to be cut in the middle of a word
    will make parts as long as possible (API calls can be expensive)
    will return an empty array if no call is needed (text is empty)

Examples:

splitText("Abc cde", 50)  // ["Abc cde"]
splitText("Abc cde", 5)   // ["Abc", "cde"]
splitText("A b C d E", 5) // ["A b C", "d E"]
splitText("Lorem ipsum dolor sit amet, consectetur adipiscing", 15) // ["Lorem ipsum", "dolor sit amet,", "consectetur", "adipiscing"]

If you are bored, you can make following code true:

splitText("abcde ", 5)    // will return ["abcde"]

Story behind this kata

You might know that Google Translate splits its requests to internal TTS API into parts of 100 characters each. I just thought - how do they do that, anyway? Splitting is done client-side, so they could use many different ways. I want to see all of them, so be creative!

P.S. It's my first kata.

P.S.S. You can assume that the input string has words of length at most max.

*/



// Solution
// return an array of strings, every string being part of text no longer than max
// Avoid using String.prototype.split() and String.prototype.indexOf()
// Splits the input string int words and Do not break mid word. 
function splitText(text, max) {
    if(!text) return [];

    // manual .split() 
    const tokens = [];
    let token = "";
    const delim = ' ';
    for(let i = 0; i < text.length; i++) {
        const char = text[i];
        if(char === delim) {
            if(token.length) {
                tokens.push(token);
                token = "";
            }
        } else {
            token += char;
        }
    }
    if(token.length) tokens.push(token);

    // build res within max
    const res = [];
    let curr = '';

    for(const elem of tokens) {
        if((curr.length ? curr.length + 1 : 0) + elem.length <= max) {
            curr += (curr.length ? ' ' : '') + elem;
        } else {
            if(curr.length) res.push(curr);
            curr = elem;
        }
    }
    if(curr.length) res.push(curr);
    return res;
}



// Test Codes
console.log(splitText('Abc cde', 50),  ["Abc cde"])

console.log(splitText('Abc cde', 5), ["Abc", "cde"]);

console.log(splitText('A b C d E', 5), ["A b C", "d E"]);

console.log(splitText("Lorem ipsum dolor sit amet, consectetur adipiscing", 15), ["Lorem ipsum", "dolor sit amet,", "consectetur", "adipiscing"]);