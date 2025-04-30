/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/571af500196bb01cc70014fa
/* ========== ========== ========== ========== ========== ==========*/
/*
Mirroring cipher

Description:

You are back at your newly acquired decrypting job for the secret organization when a new assignment comes in. Apparently the enemy has been communicating using a device they call "The Mirror".
It is a rudimentary device with encrypts the message by switching its letter with its mirror opposite (A => Z), (B => Y), (C => X) etc.

Your job is to build a method called "mirror" which will decrypt the messages. Resulting messages will be in lowercase.

To add more secrecy, you are to accept a second optional parameter, telling you which letters or characters are to be reversed; if it is not given, consider the whole alphabet as a default.

To make it a bit more clear: e.g. in case of "abcdefgh" as the second optional parameter, you replace "a" with "h", "b" with "g" etc. .

For example:

mirror("Welcome home"), "dvoxlnv slnv" //whole alphabet mirrored here
mirror("hello", "abcdefgh"), "adllo" //notice only "h" and "e" get reversed
*/



// Solution 
function mirror(code, opt=null){
    const lowerCode = code.toLowerCase();
    let src = '';
    let map = {};
    if(opt ===null){
        src='abcdefghijklnmopqrstuvwxyz';
    } else {
        src = opt.toLowerCase();
    }
    const reversed = src.split('').reverse();
    for(let i = 0; i < src.length; i++) {
        map[src[i]] = reversed[i];
    }
    return lowerCode.split('').map(char => map[char] || char).join('');
}


// Test Codes
console.log(mirror("Welcome home") === "dvoxlnv slnv");
console.log(mirror("hello") === "svool");
console.log(mirror("goodbye") === "tllwybv");
console.log(mirror("ngmlsoor")=== "mtnohlli");
console.log(mirror("gsrh rh z hvxivg")=== "this is a secret");
console.log(mirror("Welcome home", "w")=== "welcome home");
console.log(mirror("hello", "abcdefgh")=== "adllo");
console.log(mirror("goodbye", "")=== "goodbye");
console.log(mirror("CodeWars", "+-*/=")=== "codewars");
console.log(mirror("this is a secret", " *")=== "this*is*a*secret");