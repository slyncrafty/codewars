/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
/* ========== ========== ========== ========== ========== ==========*/
/*
Well of Ideas - Harder Version

Description:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

*/



// Solution
function well(x){
  let counter = 0; 
  for(const row of x) {
    for(const idea of row) {
      if(typeof idea === 'string' && idea.toLowerCase() === 'good') counter++;
        if(counter > 2) return 'I smell a series!';
    }
  }
  return counter === 0 ? 'Fail!' : 'Publish!';
}



// Test Codes
console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');

