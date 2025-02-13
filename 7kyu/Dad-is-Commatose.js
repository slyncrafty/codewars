/*
Dad is Commatose

Description:

Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!

Write a function that takes a string as an argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or have any trailing whitespace.

*/



// Solution

function dadFilter(str){
    let res = str.replace(/,+/g, ",");   // collapse multiple comma to a single comma
    res = res.replace(/,\s*$/, "");      // remove trailing comma and space. Remove comma at the end of sentence
    return res;
}