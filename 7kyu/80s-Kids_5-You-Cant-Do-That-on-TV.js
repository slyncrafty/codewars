/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/80-s-kids-number-5-you-cant-do-that-on-television
/* ========== ========== ========== ========== ========== ==========*/
/*
80's Kids #5: You Can't Do That on Television

Description:

There are just some things you can't do on television. In this case, you've just come back from having a "delicious" Barth burger and you're set to give an interview. The Barth burger has made you queezy, and you've forgotten some of the import rules of the "You Can't Do That on Television" set.

If you say any of the following words a large bucket of "water" will be dumped on you: "water", "wet", "wash" This is true for any form of those words, like "washing", "watered", etc.

If you say any of the following phrases you will be doused in "slime": "I don't know", "slime"

If you say both in one sentence, a combination of water and slime, "sludge", will be dumped on you.

Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.

Examples:

bucketOf("What is that, WATER?!?") -> "water"
bucketOf("I don't know if I'm doing this right.") -> "slime"
bucketOf("You won't get me!") -> "air"

*/



// Solution
function bucketOf(str) {
    const lowerStr = str.toLowerCase();
    const waterList = ["water", "wet", "wash"]
    const slimeList = ["slime", "I don't know"];
    let hasWater = waterList.some(word => lowerStr.includes(word.toLowerCase()));
    let hasSlime = slimeList.some(word => lowerStr.includes(word.toLowerCase())); 
  
    if(hasSlime && hasWater) return "sludge"
    if(hasSlime) return "slime"
    if(hasWater) return "water"
    return "air"
}


// Test Codes
console.log(bucketOf("I don't know "));     //slime
console.log(bucketOf("What is that, WATER?!?"))     //water
console.log(bucketOf("I don't know if I'm doing this right."))  //slime
console.log(bucketOf("You won't get me!"))  //air
console.log(bucketOf("It's slime and water!"));   //sludge