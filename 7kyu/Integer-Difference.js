/*
Integer Difference

Description:

Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

*/



// Solution

const intDiff = (arr, n) => {
    // Construct frequency map to store num 
    // of occurrences of each element in the given array
    const freqMap = new Map();
    for (const num of arr) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    let count = 0;
    
    // case n = 0, count the num of identitical pairs
    if(n === 0){
      for(const [num, freq] of freqMap.entries()){
        if(freq >= 2){
          count += (freq * (freq-1)) / 2;
        }
      }
    }
    else{  
      // Iterate thru frequency map
      // duplicates handled by counting all possible pairs
      for(const [num, freq] of freqMap.entries()){
        const target = num + n;
        if (freqMap.has(target)){
          count += freq * freqMap.get(target);
        }
      }
    }
    return count;
}