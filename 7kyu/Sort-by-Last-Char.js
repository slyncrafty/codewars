/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
/* ========== ========== ========== ========== ========== ==========*/
/*
Sort by Last Char

Description:
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/



// Solution
function last(x){
    return x.split(' ')
    .sort((a,b) => {
        const aLast = a[a.length - 1];
        const bLast = b[b.length - 1];
        if(aLast < bLast) return -1;
        else if(aLast > bLast) return 1;
        return 0;
    });
}



function last(x){
    return x.split(' ')
    .sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)));
}



// Test Codes
console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    
