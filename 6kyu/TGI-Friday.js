/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0d6d8c6975982b5b000383
/* ========== ========== ========== ========== ========== ==========*/
/*
TGI Friday!!

Description:
We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

For example, between 1901 and 2000, a month ends on Friday 171 times.
*/



// Solution
function lastDayIsFriday(initialYear, endYear) {
  let countFridayLastDayofMonth = 0;
  if(!endYear) endYear = initialYear;
  for(let year = initialYear; year <= endYear; year++) {
    for(let month = 1; month <= 12; month++) {
      const lastDay = new Date(year, month, 0);
      if(lastDay.getDay() === 5) // 5 -> Friday
        countFridayLastDayofMonth++;
    }
  }
  return countFridayLastDayofMonth;
}


// Test Codes
console.log(lastDayIsFriday(1901, 2000), 171); 
  
  
console.log(lastDayIsFriday(1901, 2017), 200); 
  
  
console.log(lastDayIsFriday(1991), 1); 
  
  
console.log(lastDayIsFriday(2017), 2); 
