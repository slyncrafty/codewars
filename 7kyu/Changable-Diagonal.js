/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/68508d8937ee53321e405d31
/* ========== ========== ========== ========== ========== ==========*/
/*
Changable Diagonal

Description:
Task

Given a matrix (NxN), and a specific value.

# Input:

matrix = [[ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9, 10, 11, 12],
          [13, 14, 15, 16]]

value = 2

What this value does is it changes the main diagonal of the matrix. The main diagonal is basically the trace of the matrix (read this article if you are unaware of what the trace is).

    If value > 0, the main diagonal drops down.
    If value < 0, the main diagonal goes up.
    If value = 0, the diagonal does not change.

With this example here (I marked the diagonal numbers with *):

[[*1,   2,   3,   4],
 [ 5,  *6,   7,   8],
 [ 9,  10, *11,  12],
 [13,  14,  15, *16]]

# The main diagonal here is [1, 6, 11, 16] but with given value 2:

[[ 1,   2,  3,  4],
 [ 5,   6,  7,  8],
 [*9,  10, 11, 12],
 [13, *14, 15, 16]]

# The main diagonal is [9, 14].

# In case of the value being negative, for example -2:

[[ 1,  2, *3,  4],
 [ 5,  6,  7, *8],
 [ 9, 10, 11, 12],
 [13, 14, 15, 16]]

# The main diagonal is [3, 8].

With these rules in effect, find the sum of the trace of a matrix with the given value.
The value will never reach the size of the matrix. 
*/



// Solution
function matrixDiagonal(matrix,value) {
  const n = matrix.length;
  let trace = 0;
  
  for(let i = 0; i < n; i++) {
    let row = i + value;
    let col = i;
    
    if(row >= 0 && row < n) {
      trace += matrix[row][col];
    }
  }
  return trace;
}



// Test Codes
console.log( matrixDiagonal( [[ 1, 2, 3, 4],
                                         [ 5, 6, 7, 8],
                                         [ 9,10,11,12],
                                         [13,14,15,16]], 0 ), 1+6+11+16 );
console.log( matrixDiagonal( [[ 1, 2, 3, 4],
                                        [ 5, 6, 7, 8],
                                        [ 9,10,11,12],
                                        [13,14,15,16]], 2 ), 9+14 );
console.log( matrixDiagonal( [[ 1, 2, 3, 4],
                                        [ 5, 6, 7, 8],
                                        [ 9,10,11,12],
                                        [13,14,15,16]], -2 ), 3+8 );
