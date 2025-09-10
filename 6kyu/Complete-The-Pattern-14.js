/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/559379505c859be5a9000034
/* ========== ========== ========== ========== ========== ==========*/
/*
Complete The Pattern #14

Description:
You have to write a function pattern which returns the following Pattern(See Examples) upto desired number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.

Parameters:

pattern(        n        ,        y        );
                ^                 ^         
                |                 |         
         Term upto which   Number of times  
          Basic Pattern     Basic Pattern   
            should be         should be     
             created          repeated      
                             vertically    

    Note: Basic Pattern means what we created in Complete The Pattern #12 i.e. a simple X.

Rules/Note:

    The pattern should be created using only unit digits.
    If n < 1 then it should return "" i.e. empty string.
    If y <= 1 then the basic pattern should not be repeated vertically.
    The length of each line is same, and is equal to the length of longest line in the pattern.
    Range of Parameters (for the sake of CW Compiler) :
        n ∈ (-∞,50]
        y ∈ (-∞,25]
    If only one argument is passed then the function pattern should run as if y <= 1.
    The function pattern should work when extra arguments are passed, by ignoring the extra arguments.

Examples:
Having Two Arguments:
pattern(4,3):

    1     1
     2   2 
      3 3  
       4   
      3 3  
     2   2 
    1     1
     2   2 
      3 3  
       4   
      3 3  
     2   2 
    1     1
     2   2 
      3 3  
       4   
      3 3  
     2   2 
    1     1
   

pattern(10,2):

    1                 1
     2               2 
      3             3  
       4           4   
        5         5    
         6       6     
          7     7      
           8   8       
            9 9        
             0         
            9 9        
           8   8       
          7     7      
         6       6     
        5         5    
       4           4   
      3             3  
     2               2 
    1                 1
     2               2 
      3             3  
       4           4   
        5         5    
         6       6     
          7     7      
           8   8       
            9 9        
             0         
            9 9        
           8   8       
          7     7      
         6       6     
        5         5    
       4           4   
      3             3  
     2               2 
    1                 1

Having Only One Argument:
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
function pattern(n,y){
  if(n < 1) return "";
  if(y <= 1) y = 1; 
  const length = 2 * n - 1;
  const block = [];
  for(let r = 0; r < length; r++) {
    const leftIdx = r < n ? r : length - 1 - r;
    const digit = String((leftIdx + 1) % 10); 
    const line = Array(length).fill(" ");
    line[leftIdx] = digit;
    line[length - 1 - leftIdx] = digit;
    block.push(line.join(""));
  }
  const res = [...block];
  for(let v = 1; v < y; v++) {
    res.push(...block.slice(1));
  }
  return res.join("\n")
}



// Test Codes
const simpleTest = (actual, expected, msg) => {
    if(actual === expected) console.log("Correct!");
    else console.error(`${msg}`)
}

simpleTest(pattern(3,7),"1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1","Something amiss here");

simpleTest(pattern(15,3),"1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1","Something amiss here");

simpleTest(pattern(10,-29),"1                 1\n 2               2 \n  3             3  \n   4           4   \n    5         5    \n     6       6     \n      7     7      \n       8   8       \n        9 9        \n         0         \n        9 9        \n       8   8       \n      7     7      \n     6       6     \n    5         5    \n   4           4   \n  3             3  \n 2               2 \n1                 1","It Should work when x <= 1");

simpleTest(pattern(5),"1       1\n 2     2 \n  3   3  \n   4 4   \n    5    \n   4 4   \n  3   3  \n 2     2 \n1       1","It Should also work when only one argument is passed");

simpleTest(pattern(4,2,3,5,7,-8),"1     1\n 2   2 \n  3 3  \n   4   \n  3 3  \n 2   2 \n1     1\n 2   2 \n  3 3  \n   4   \n  3 3  \n 2   2 \n1     1","It is also supposed to work when extra arguments are passed");
     