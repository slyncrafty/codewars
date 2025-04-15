/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9
/* ========== ========== ========== ========== ========== ==========*/
/*
Jumping Kangaroos

Description:
Adapted from here, with less terrible instructions and a couple tweaks.

Two kangaroos are jumping on a line. They start out at different points on the line, and jump in the same direction at different speeds. Your task is to determine whether or not they'll ever land in the same spot at the same time (you'll just have to suspend disbelief for a moment and accept that two kangaroos, for the purpose of this kata, can occupy the same space at the same time :)

Your function is given four arguments (kanga1, rate1, kanga2, rate2); the first kangaroo's starting point, the first kangaroo's speed, the second kangaroo's starting point, and the second kangaroo's speed.

Return true if the above conditions are met, else false. Starting location and speed may vary wildly. The first kangaroo will usually start behind the second one and travel faster, but not always. Starting locations may be negative, but speeds will always be > 0.

Example:

kangaroo(kanga1 = 0, speed1 = 3, kanga2 = 4, speed2 = 2)=> true //they meet on their fourth jump

kangaroo

Other examples:

kangaroo(0,2,5,3)=> false //the first kangaroo starts behind, moves slower, and never catches up
*/



// Solution
function kangaroo(kanga1, rate1, kanga2, rate2) {
    // const A = kanga1 + t * rate1;
    // const B = kanga2 + t * rate2;
    const t = (kanga1 - kanga2) / (rate2 - rate1);
    return (t > 0 && t % Math.floor(t) === 0) ? true : false;
}



// Test Codes
console.log(kangaroo(0,3,4,2), true)
console.log(kangaroo(0,9,16,4), false)
console.log(kangaroo(0,2,5,3), false)
console.log(kangaroo(1571,4240,9023,4234), true)
console.log(kangaroo(-1571,4240,9023,4234), false)
console.log(kangaroo(-7855,4240,9023,4234), true)
console.log(kangaroo(43,5,49,3), true)
console.log(kangaroo(9023,4240,1571,4234), false)
console.log(kangaroo(129,15,147,9), true)
console.log(kangaroo(129,15,147,90), false)
console.log(kangaroo(0,2,100000,1), true)
console.log(kangaroo(72893, 11125, 24432, 4202), false)
console.log(kangaroo(13613, 299, 65130, 73), false)  