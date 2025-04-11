/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56833b76371e86f8b6000015
/* ========== ========== ========== ========== ========== ==========*/
/*
Regexp basics - parsing prices

Description:

Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.

In this kata, for a price to be considered valid, it must start with a dollar sign ($), followed immediately by a decimal number with exactly 2 decimal digits.
*/



// Solution
String.prototype.toCents=function(){
    const regex = /^\$(\d+)\.(\d{2})$/;
    const match = this.match(regex);
    if (!match) return null;
    [_, dollars, cents] = match;
    return parseInt(dollars+cents);
}


// Test Code
console.log("".toCents()); // null
console.log("1".toCents()); // null
console.log("1.23".toCents()); // null
console.log("$1".toCents()); // null
console.log("$1.23".toCents()); // 123
console.log("$99.99".toCents()); // 9999
console.log("$12345678.90".toCents()); // 1234567890
console.log("$9.69".toCents()); // 969
console.log("$9.70".toCents()); // 970
console.log("$9.71".toCents()); // 971
console.log("$1.23\n".toCents()); // null
console.log("\n$1.23".toCents()); // null
console.log("$0.69".toCents()); // 69
console.log("$9.69$4.3.7".toCents()); // null
console.log("$9.692".toCents()); // null