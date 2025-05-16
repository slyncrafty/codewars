/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5642bf07a586135a6f000004/
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.

*/



// Solution
// regex version
const stepThroughWith = (s) => /(.)\1/.test(s);

// loop version
// function stepThroughWith (s) {
//   for(let i = 0; i < s.length - 1; i++) {
//     const char = s[i];
//     const charNext = s[i+1];
//     if(char == charNext) return true;
//   }
//   return false;
// }



// Test Codes
console.log(stepThroughWith("moon"), true, "You can take the moon, but not the sun");
console.log(stepThroughWith("test"), false, "You can take a challenge, but not a test");
console.log(stepThroughWith("glasses"), true, "You can take your glasses, but not your contacts");
console.log(stepThroughWith("airplane"), false, "You can take a balloon, but not an airplane");
console.log(stepThroughWith("free"), true, "You can be free, but not in chains");
console.log(stepThroughWith("branch"), false, "You can take the tree or the wood, but not a branch");