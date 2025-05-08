/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58856a06760b85c4e6000055
/* ========== ========== ========== ========== ========== ==========*/
/*
Bits Battle

Description:

The odd and even numbers are fighting against each other!

You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

You should return:

    odds win if number of 1s from odd numbers is larger than 0s from even numbers
    evens win if number of 1s from odd numbers is smaller than 0s from even numbers
    tie if equal, including if list is empty

Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.
Example:

For an input list of [5, 3, 14]:

    odds: 5 and 3 => 101 and 11 => four 1s
    evens: 14 => 1110 => one 0

Result: odds win the battle with 4-1

If you enjoyed this kata, you can find a nice variation of it here.

*/



// Solution

function bitsBattle(numbers) {
    let oddOne = 0, evenZero = 0;

    for(let num of numbers){
        if(num === 0) continue;
        const binaryNum = num.toString(2);

        if(num % 2 ===0){
            evenZero += [...binaryNum].filter(c => c === '0').length;
        } else {
            oddOne += [...binaryNum].filter(c => c === '1').length;
        }
    }
    if(oddOne > evenZero) return "odds win";
    if(oddOne < evenZero) return "evens win";
    return ("tie");
}



// Test Codes
console.log(bitsBattle([5, 3, 14]), 'odds win');
console.log(bitsBattle([3, 8, 22, 15, 78]), 'evens win');
console.log(bitsBattle([]), 'tie');
console.log(bitsBattle([1, 13, 16]), 'tie');
console.log(bitsBattle([0]), 'tie');
console.log(bitsBattle([0, 1, 2]), 'tie');