/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/586a1af1c66d18ad81000134
/* ========== ========== ========== ========== ========== ==========*/
/*
Driving Licence

Description:
Task

The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

Rules

1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"

Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];

Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female

You will need to output the full 16 digit driving license number, in all UPPERCASE.
*/



// Solution
function driver(data) {
  const [firstName, midName, lastName, dob, sex] = data;
  const [year,month,day] = dob.split("-");
  const monthNum = String(new Date(dob).getMonth() + 1).padStart(2, '0');
  
  const oneToFive = lastName.length > 5 
    ? lastName.slice(0,5) 
    : lastName.padEnd(5, "9");
  const six = day[2];
  const sevenEight = sex === 'M' 
    ? monthNum
    : String(Number(monthNum[0])+5)[0]+monthNum[1];
  const nineTen = year;
  const eleven = day[3];
  const twelveThirteen = midName 
    ? firstName[0] + midName[0] 
    : firstName[0] + '9';
  
  return `${oneToFive.toUpperCase()}${six}${sevenEight}${nineTen}${eleven}${twelveThirteen}9AA`;
}



// Test Codes
const strictEqual = (a, b, msg) => {
    if(a === b) console.log('Correct');
    else console.error('Incorrect', msg)
}
let data = ["John","James","Smith","01-Jan-2000","M"]
strictEqual(driver(data), "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'")

data = ["Johanna","","Gibbs","13-Dec-1981","F"]
strictEqual(driver(data), "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'")

data = ["Andrew","Robert","Lee","02-September-1981","M"]
strictEqual(driver(data), "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")