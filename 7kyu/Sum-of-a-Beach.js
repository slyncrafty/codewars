/*
Sum of a Beach

Description:

Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
Examples

"WAtErSlIde"                    ==>  1
"GolDeNSanDyWateRyBeaChSuNN"    ==>  3
"gOfIshsunesunFiSh"             ==>  4
"cItYTowNcARShoW"               ==>  0

*/



// Solution

function sumOfABeach(beach) {
    // your code here
    const beachLowerCase = beach.toLowerCase();
    
    const strings = ["sand", "water", "fish", "sun"];
    let count = 0;
    // loop through each string and count if found
    strings.forEach(str => {
      let idx = 0;
      // find words without overlapping
      while((idx = beachLowerCase.indexOf(str, idx)) !== -1)
        {
          count++;
          idx += str.length;
        }
    })
    return count;
}