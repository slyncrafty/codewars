/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57d93978950d8486a3000def
/* ========== ========== ========== ========== ========== ==========*/
/*
These aren't the numbers you're looking for! (Find a number by approximation)

Description:
You should find a searched number by approximation.

The searched number will always be between 0 and 100.

You have to write a method, that will get only a function to compare your guess number with the searched number.
Your method have to find the number with a precision of 5 fractional digits.
The tolerance for the value: The difference from the searched number must be smaller than 0.00002.

The compare-function, that your method will get as parameter, takes the guessed number as parameter and returns 0 for the correct number, -1 if your number is smaller than the searched number and 1 if your guessed number is greater than the searched number.

Example:
Searched number: 6

Compare(1); -> -1
Compare(10); -> 1
Compare(6); -> 0

You do not need a Compare-Call, that returns 0. If your number has a precision of 5 fractional digits, and you are sure, it is the searched number, you can return the number.

You will always get the compare-method! So there is no need for a check for null.
*/



// Solution
function findNumber(compare) {
    let left = 0, right = 100;
    while((right - left) > 0.00002){
        const mid = (right + left) / 2;
        const comp = compare(mid);
        if( comp === 0 ) return +mid.toFixed(5);
        if( comp === 1 ) right = mid;
        else left = mid;
    }
    return +((left + right) / 2).toFixed(5);
}



// Test Codes
let searchedNumber = 5;
let actual = findNumber((a) => a > searchedNumber ? 1 : a < searchedNumber ? -1 : 0);
let expected = searchedNumber;
console.log(Math.abs(actual - expected) < 0.00002, "Actual: " + actual + " Expected: " + expected);

searchedNumber = 5.123456789;
actual = Math.round(findNumber((a) => a > searchedNumber ? 1 : a < searchedNumber ? -1 : 0) * 100000) / 100000;
expected = Math.round(searchedNumber* 100000) / 100000;
console.log(Math.abs(actual - expected) < 0.00002, "Actual: " + actual + " Expected: " + expected);


searchedNumber = 8.098754899803273;
actual = Math.round(findNumber((a) => a > searchedNumber ? 1 : a < searchedNumber ? -1 : 0) * 100000) / 100000;
expected = Math.round(searchedNumber* 100000) / 100000;
console.log(Math.abs(actual - expected) < 0.00002, "Actual: " + actual + " Expected: " + expected);    


searchedNumber = 0.04570974208302214;
actual = Math.round(findNumber((a) => a > searchedNumber ? 1 : a < searchedNumber ? -1 : 0) * 100000) / 100000;
expected = Math.round(searchedNumber* 100000) / 100000;
console.log(Math.abs(actual - expected) < 0.00002, "Actual: " + actual + " Expected: " + expected);

