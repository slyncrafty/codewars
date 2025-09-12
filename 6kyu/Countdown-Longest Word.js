/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57a4c85de298a795210002da/
/* ========== ========== ========== ========== ========== ==========*/
/*
Countdown - Longest Word

Description:
#Detail

Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

#Task

Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return None/nil/null.

##Examples

letters = "ZZZZZZZZZ"
longest word = None

letters = "POVMERKIA", 
longest word = ["VAMPIRE"]

letters = "DVAVPALEM"
longest word = ["PALMED", "VALVED", "VAMPED"]

*/



// Solution
function longestWord(letters) {
    // Find frequency of letters forming the input
    const freqMap = (str) => {
        const map = {};
        for(const char of str) map[char] = (map[char] || 0) + 1;
        return map;
    }

    const lettersFreqMap = freqMap(letters);
    let bestLen = 0;
    let best = [];

    // Find frequency of each word of words(given)
    // of available letters return the longest valid words
    for(let word of words) {
        if(word.length < bestLen) continue;
        const wordFreqMap = freqMap(word);
        let available = true;


        for(let ch in wordFreqMap) {
            if(!lettersFreqMap[ch] || lettersFreqMap[ch] < wordFreqMap[ch]) {
                available = false;
                break;
            }
        }
        // find the longest valid word
        if(available) {
            if(word.length > bestLen) {
                bestLen = word.length;
                best = [word];
            } else if (word.length === bestLen) {   // handle ties
                best.push(word);
            }
        }
        // if no valid answer, return null
        if(bestLen === 0) return null;
        // return as sorted alphabetically
        return best.sort();
    }
}



// Test Codes
const deepEqual = (actual, expected) => {
    if(actual === expected) return true;
    if(Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length ) return actual.every((e,i) => deepEqual(e, expected[i]));
    else return false;
}
const exampleTestCases = {
    'GQEMAUVXY': ['GAME'],
    'TDWAYZROE': ['TODAY', 'TOWER', 'TRADE', 'WATER'],
    'EAEEAYITB': ['BEAT', 'BITE', 'BYTE'],
    'AKUIYOOLO': ['LOOK', 'YOLK'],
    'GVDTCAESU': ['CAGES', 'CAUSE', 'CAVES', 'DATES', 'GATES', 'GUEST', 'STAGE', 'USAGE']
}
for (const item in exampleTestCases){
    deepEqual(longestWord(item), exampleTestCases[item])
}