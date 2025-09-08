/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/558ac25e552b51dbc60000c3
/* ========== ========== ========== ========== ========== ==========*/
/*
Complete The Pattern #12

Description:
You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, where n is parameter.

    Note:Returning the pattern is not the same as Printing the pattern.

Parameters:

pattern(        n        );
                ^                     
                |                     
         Term upto which   
       Basic Pattern(this)     
            should be         
             created            
                              
                            

Rules/Note:

    If n < 1 then it should return "" i.e. empty string.
    The length of each line is same, and is equal to the length of longest line in the pattern i.e (2n-1).
    Range of Parameters (for the sake of CW Compiler) :
        n ∈ (-∞,100]

Examples:

    pattern(5):

      1       1
       2     2 
        3   3  
         4 4   
          5    
         4 4   
        3   3  
       2     2 
      1       1
     
      

    pattern(10):

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

    pattern(15):

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

*/



// Solution
function pattern(n){
    // Rule 1
    if(n < 1) return "";
    // Rule 2
    const length = 2 * n - 1; 
    let output = [];
    // create each line of string filled with space(" ")  
    // and place `num`
    for (let r = 0; r < length; r++) {
        const i = r < n ? r : length - 1 - r;
        const digit = String((i+1) % 10);
        const line = Array(length).fill(" ");
        line[i] = digit;
        line[length - 1 - i] = digit;
        output.push(line.join(""));
    }
    return output.join("\n");
}



// Test Codes
const assertEquals = (a, b) => {
    if(a === b) console.log("Correct");
    else console.log("Incorrect!");
}

assertEquals(pattern(3),"1   1\n 2 2 \n  3  \n 2 2 \n1   1");
assertEquals(pattern(5),"1       1\n 2     2 \n  3   3  \n   4 4   \n    5    \n   4 4   \n  3   3  \n 2     2 \n1       1");
