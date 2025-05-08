/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57b5907920b104772c00002a
/* ========== ========== ========== ========== ========== ==========*/
/*
Cats in hats

Description:
The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

The Cat In The Hat is 2,000,000 cat units tall.

Each cat is 2.5 times bigger than the cat underneath their hat.

Find the total height of the cats if they are standing on top of one another.

Counting starts from the Cat In The Hat

n = the number of cats

fix to 3 decimal places.
*/



// Solution

function height(n) {
    let h = 2000000;
    let total_height = 0;
    for (let i = 0; i <= n; i++){
      total_height += h;
      h /= 2.5
    }
    return total_height.toFixed(3);
}



// Test Codes
console.log(height(7), "3331148.800");
console.log(height(0), "2000000.000");