/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/536c00e21da4dc0a0700128b
/* ========== ========== ========== ========== ========== ==========*/
/*

Find Your Villain Name

Description:
Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

The first name will come from the month, and the last name will come from the last digit of the date:

Month -> first name

    January -> "The Evil"
    February -> "The Vile"
    March -> "The Cruel"
    April -> "The Trashy"
    May -> "The Despicable"
    June -> "The Embarrassing"
    July -> "The Disreputable"
    August -> "The Atrocious"
    September -> "The Twirling"
    October -> "The Orange"
    November -> "The Terrifying"
    December -> "The Awkward"

Last digit of date -> last name

    0 -> "Mustache"
    1 -> "Pickle"
    2 -> "Hood Ornament"
    3 -> "Raisin"
    4 -> "Recycling Bin"
    5 -> "Potato"
    6 -> "Tomato"
    7 -> "House Cat"
    8 -> "Teaspoon"
    9 -> "Laundry Basket"

The returned value should be a string in the form of "First Name Last Name".

For example, a birthday of November 18 would return "The Terrifying Teaspoon"
*/



// Solution
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const birthMonth  = birthday.getMonth();
    const birthDate = birthday.getDate().toString().slice(-1);
    const firstName = m[birthMonth];
    const lastName = d[birthDate];
    return `The ${firstName} ${lastName}`
}



/*  Lessons Learned
**  new Date("May 4") kind of parsing date does not work in all browsers
**  works on codewars and chrome but I've noticed that Firefox does not recognize it as a valid date. 
*/

// Test Codes
//may 4
console.log(getVillainName(new Date("May 4")), "The Despicable Recycling Bin");

//apr 1
console.log(getVillainName(new Date("April 21")), "The Trashy Pickle");

//dec 7
console.log(getVillainName(new Date("December 17")), "The Awkward House Cat");

// for testing on firefox. 
// May 4
console.log(getVillainName(new Date("May 4 2024")), "The Despicable Recycling Bin");

// April 21
console.log(getVillainName(new Date("April 21 2024")), "The Trashy Pickle");

// December 17
console.log(getVillainName(new Date("December 17 2024")), "The Awkward House Cat");
