/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006
/* ========== ========== ========== ========== ========== ==========*/
/*
IP Validation

Description:

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Valid inputs examples:

Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:

    Leading zeros (e.g. 01.02.03.04) are considered invalid
    Inputs are guaranteed to be a single string

*/



// Solution
// Validation using parseInt() and toString()
function isValidIP(str) {
  const octets = str.split('.');
  if( octets.length !== 4 ) return false;
  console.log(octets)
  for(const octet of octets) {
    // Handle empty strings
    if( octet === '' ) return false;
    const num = parseInt(octet);
    // Handle strings including non-numbers
    if( octet !== num.toString() ) return false;
    // Handle out of range numbers
    if( num > 255 || num < 0 ) return false;
  }
  return true;
}



// Validation using regex test and parseInt()
function isValidIP(str) {
    const octets = str.split('.');
    if( octets.length !== 4 ) return false;
    for( const octet of octets ){
        // Handle leading zero
        if( octet.length > 1 && octet[0] === '0') return false;
        // Handle strings including non-numbers and empty strings
        if( !(/^\d+$/).test(octet) ) return false;
        const num = parseInt(octet);
        if( num > 255 || num < 0 ) return false;
    }
    return true;
}


/* ## Lessons Learned:
** Both solutions use manual splitting and validation for strings. 
** Another possible solution with one liner using long regex for faster performance. 
** Less readable and harder to debug. 
*/


// Test Codes
console.log(isValidIP("0.0.0.0"        ),  true);
console.log(isValidIP("12.255.56.1"    ),  true);
console.log(isValidIP("137.255.156.100"),  true);
console.log(isValidIP(''               ), false);
console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'  ), false);
console.log(isValidIP('12.34.56'       ), false);
console.log(isValidIP('01.02.03.04'    ), false);
console.log(isValidIP('256.1.2.3'      ), false);
console.log(isValidIP('1.2.3.4.5'      ), false);
console.log(isValidIP('123,45,67,89'   ), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(isValidIP(' 1.2.3.4'       ), false);
console.log(isValidIP('1.2.3.4 '       ), false);
console.log(isValidIP('12.34.56.-7'    ), false);
console.log(isValidIP('1.2.3.4\n'      ), false);
console.log(isValidIP('\n1.2.3.4'      ), false);