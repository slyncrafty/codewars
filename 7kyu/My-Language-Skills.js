/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5b16490986b6d336c900007d
/* ========== ========== ========== ========== ========== ==========*/
/*
My Language Skills

Description:
Task

You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your corresponding test results as values. Return the list of languages where your score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
Examples

Input object with key-value pairs:
"Java" -> 10, "Ruby" -> 80, "Python" -> 65
Ouput:
[ "Ruby", "Python" ]

Input object with key-value pairs:
"Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
Output:
[ "Dutch", "Greek", "Hindi" ]

Input object with key-value pairs:
"C++" -> 50, "ASM" -> 10, "Haskell" -> 20
Output:
[ ]
*/



// Solution
function myLanguages(results){
    return Object.entries(results)
            .filter(([lang, score]) => score >= 60)
            .sort((a, b) => b[1] - a[1])
            .map(pair => pair[0]);
}


// Test Code
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));     // ["Ruby", "Python"]
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));    // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}));      // []