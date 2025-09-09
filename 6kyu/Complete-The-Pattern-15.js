/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/558db3ca718883bd17000031/
/* ========== ========== ========== ========== ========== ==========*/
/*
Complete The Pattern #15

Description:
You have to write a function pattern which returns the following Pattern(See Examples) upto desired number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.

Parameters:

pattern(        n        ,        x        ,        y        );
                ^                 ^                 ^   
                |                 |                 |
         Term upto which   Number of times   Number of times
          Basic Pattern     Basic Pattern     Basic Pattern
            should be         should be         should be
             created          repeated           repeated
                            horizontally        vertically

    Note: Basic Pattern means what we created in Complete The Pattern #12

Rules/Note:

    The pattern should be created using only unit digits.
    If n < 1 then it should return "" i.e. empty string.
    If x <= 1 then the basic pattern should not be repeated horizontally.
    If y <= 1 then the basic pattern should not be repeated vertically.
    The length of each line is same, and is equal to the length of longest line in the pattern.
    Range of Parameters (for the sake of CW Compiler) :
        n ∈ (-∞,25]
        x ∈ (-∞,10]
        y ∈ (-∞,10]
    If only two arguments are passed then the function pattern should run as if y <= 1.
    If only one argument is passed then the function pattern should run as if x <= 1 & y <= 1.
    The function pattern should work when extra arguments are passed, by ignoring the extra arguments.

Examples:

    Having Three Arguments-

    pattern(4,3,2):

     1     1     1     1
      2   2 2   2 2   2 
       3 3   3 3   3 3  
        4     4     4   
       3 3   3 3   3 3  
      2   2 2   2 2   2 
     1     1     1     1
      2   2 2   2 2   2 
       3 3   3 3   3 3  
        4     4     4   
       3 3   3 3   3 3  
      2   2 2   2 2   2 
     1     1     1     1

    Having Two Arguments-

        pattern(10,2):

        1                 1                 1
         2               2 2               2 
          3             3   3             3  
           4           4     4           4   
            5         5       5         5    
             6       6         6       6     
              7     7           7     7      
               8   8             8   8       
                9 9               9 9        
                 0                 0         
                9 9               9 9        
               8   8             8   8       
              7     7           7     7      
             6       6         6       6     
            5         5       5         5    
           4           4     4           4   
          3             3   3             3  
         2               2 2               2 
        1                 1                 1

    Having Only One Argument-

        pattern(25):

        1                                               1
         2                                             2 
          3                                           3  
           4                                         4   
            5                                       5    
             6                                     6     
              7                                   7      
               8                                 8       
                9                               9        
                 0                             0         
                  1                           1          
                   2                         2           
                    3                       3            
                     4                     4             
                      5                   5              
                       6                 6               
                        7               7                
                         8             8                 
                          9           9                  
                           0         0                   
                            1       1                    
                             2     2                     
                              3   3                      
                               4 4                       
                                5                        
                               4 4                       
                              3   3                      
                             2     2                     
                            1       1                    
                           0         0                   
                          9           9                  
                         8             8                 
                        7               7                
                       6                 6               
                      5                   5              
                     4                     4             
                    3                       3            
                   2                         2           
                  1                           1          
                 0                             0         
                9                               9        
               8                                 8       
              7                                   7      
             6                                     6     
            5                                       5    
           4                                         4   
          3                                           3  
         2                                             2 
        1                                               1


*/



// Solution
function pattern(n,x,y){
  if(n < 1) return "";
  if(!x || x <= 1) x = 1;
  if(!y || y <= 1) y = 1;
  
  const length = 2 * n - 1;
  const horiGap = length - 1; 
  const width = horiGap * x + 1;
  const block=[];
  // building the unit pattern 
  for(let r = 0 ; r < length; r++) {
    const i = r < n ? r : length - 1 - r;
    const digit = String((i+1) % 10);
    
    const line = Array(width).fill(" ");
    
    for(let h = 0; h < x; h++) {
      const c = h * horiGap; 
      const L = c + i;
      const R = c + (length - 1 - i);
      
      if(L < width) line[L] = digit;
      if(R < width) line[R] = digit;
    }
    block.push(line.join(""));
  }
  // Repeats
  const out = [];
  out.push(...block);
  for(let v = 1; v < y; v++) {
    for(let i = 1; i < block.length; i++) out.push(block[i])
  }
  return out.join("\n");
}



// Test Codes
const simpleTest = (a, b) => {
    if(a === b) console.log("Correct!");
    else console.error("Incorrect!");
}
simpleTest(pattern(4,2,3),"1     1     1\n 2   2 2   2 \n  3 3   3 3  \n   4     4   \n  3 3   3 3  \n 2   2 2   2 \n1     1     1\n 2   2 2   2 \n  3 3   3 3  \n   4     4   \n  3 3   3 3  \n 2   2 2   2 \n1     1     1\n 2   2 2   2 \n  3 3   3 3  \n   4     4   \n  3 3   3 3  \n 2   2 2   2 \n1     1     1");
simpleTest(pattern(3,-29,4),"1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1");
simpleTest(pattern(5,-28,0),"1       1\n 2     2 \n  3   3  \n   4 4   \n    5    \n   4 4   \n  3   3  \n 2     2 \n1       1");
simpleTest(pattern(7,2),"1           1           1\n 2         2 2         2 \n  3       3   3       3  \n   4     4     4     4   \n    5   5       5   5    \n     6 6         6 6     \n      7           7      \n     6 6         6 6     \n    5   5       5   5    \n   4     4     4     4   \n  3       3   3       3  \n 2         2 2         2 \n1           1           1");
simpleTest(pattern(10,-2999),"1                 1\n 2               2 \n  3             3  \n   4           4   \n    5         5    \n     6       6     \n      7     7      \n       8   8       \n        9 9        \n         0         \n        9 9        \n       8   8       \n      7     7      \n     6       6     \n    5         5    \n   4           4   \n  3             3  \n 2               2 \n1                 1");
simpleTest(pattern(5),"1       1\n 2     2 \n  3   3  \n   4 4   \n    5    \n   4 4   \n  3   3  \n 2     2 \n1       1");
simpleTest(pattern(4,2,3,5,7,-8),"1     1     1\n 2   2 2   2 \n  3 3   3 3  \n   4     4   \n  3 3   3 3  \n 2   2 2   2 \n1     1     1\n 2   2 2   2 \n  3 3   3 3  \n   4     4   \n  3 3   3 3  \n 2   2 2   2 \n1     1     1\n 2   2 2   2 \n  3 3   3 3  \n   4     4   \n  3 3   3 3  \n 2   2 2   2 \n1     1     1");
    