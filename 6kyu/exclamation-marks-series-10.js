/*
Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word

Description:

Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.
Notes:

    Words are separated with spaces
    Each word will include at least 1 letter
    There will be no exclamation marks in the middle of a word

Examples

remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"

*/



// Solution
function remove(s){
    return s.split(' ').map(elem => balanceExclamations(elem)).join(' ');
}

function balanceExclamations(elem){
    let leftCount = 0, rightCount = 0;
    let n = elem.length;

    while(leftCount < n && elem[leftCount] == '!'){
        leftCount++;
    }
    while(rightCount < n && elem[n - 1 - rightCount] === '!')
    {
        rightCount++;
    }

    let minCount = Math.min(leftCount, rightCount);
    let word = elem.slice(leftCount, n - rightCount);
    return '!'.repeat(minCount) + word + '!'.repeat(minCount);
}



/// Solution 2 
// Using lazy match 
function remove(s){
    return s.replace(/!*?((!*)\w+\2)!*/g, '$1')
}

// Basic Test Cases
console.log(remove("Hi!"));                    // "Hi"
console.log(remove("!Hi! Hi!"));               // "!Hi! Hi"
console.log(remove("!!Hi! !Hi!!"));            // "!Hi! Hi"
console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!")); // "!!Hi!! Hi Hi"

