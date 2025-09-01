/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58981e716551af31b100063f
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Fun #101: Regular Months

Description:
 In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!

You and your colleagues have started calling these months regular months. Since you're a fan of working from home, you decide to find out how far away the nearest regular month is, given that the currMonth has just started.

For your convenience, here is a list of month lengths (from January to December, respectively):

 Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31. Please, note that in leap years February has 29 days.
Example

For currMonth = "02-2016", the output should be "08-2016".

February of 2016 year is regular, but it doesn't count since it has started already, so the next regular month is August of 2016 - which is the answer.
Input/Output

    [input] string currMonth

    A string representing the correct month in the format mm-yyyy, where mm is the number of the month (1-based, i.e. 01 for January, 02 for February and so on) and yyyy is the year.

    Constraints:

    1 ≤ int(mm) ≤ 12,

    1970 ≤ int(yyyy) ≤ 2100.

    [output] a string

    The earliest regular month after the given one in the same format as currMonth.

*/



// Solution
function regularMonths(currMonth) {
    let[month, year] = currMonth.split("-").map(Number);

    const day = new Date(Date.UTC(year, month, 1));
    while(day.getUTCDay() !== 1) {
        day.setUTCMonth(day.getUTCMonth() + 1);
    }
    const m = String(day.getUTCMonth() + 1).padStart(2, "0");
    const y = day.getUTCFullYear();
    return `${m}-${y}`;
}



// Test Codes
const simpleTest = (input, expected) => {
    if(regularMonths(input) === expected) {
        console.log('Correct!');
    } else {
        console.log('Incorrect!');
    }
}
simpleTest("02-2016", "08-2016");
simpleTest("05-2027", "11-2027");
simpleTest("09-2099", "02-2100");
simpleTest("01-1970", "06-1970");
simpleTest("07-2024", "09-2025");