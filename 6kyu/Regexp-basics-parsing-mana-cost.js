/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5686004a2c7fade6b500002d
/* ========== ========== ========== ========== ========== ==========*/
/* Regexp basics - parsing mana cost

Description:
Implement String#parse_mana_cost, which parses Magic: the Gathering mana(http://mtgsalvation.gamepedia.com/Mana_cost) costs expressed as a string and returns a Hash with keys being kinds of mana, and values being the numbers.

Don't include any mana types equal to zero.

Format is:

    optionally natural number representing total amount of generic mana (use key *)
    optionally followed by any combination of w, u, b, r, g (case insensitive in input, return lower case in output), each representing one mana of specific color.

If case of Strings not following specified format, return nil/null/None.
*/



// Solution
String.prototype.parseManaCost=function(){
    //your code here - remember to put the output with key in order "*wubrg"
    const regex = /^(\d*)([wubrg]*$)/i;
    let match = this.match(regex);
    if(!match) return null;
    [_, num, color] = match;
    let res = {};
    if(num && num !== '0') res['*'] = parseInt(num, 10);
    for(const char of color.toLowerCase()){
      res[char] = (res[char] || 0) + 1;
    }
    return res;
}



// Test Code

console.log("".parseManaCost()); //{}
console.log("0".parseManaCost()); //{}
console.log("1".parseManaCost()); //{"*":1}
console.log("4".parseManaCost()); //{"*":4}
console.log("15".parseManaCost()); //{"*":15}
console.log("2rr".parseManaCost()); //{"*":2; //"r":2}
console.log("1wbg".parseManaCost()); //{"*":1, "w":1, "b":1, "g":1}
console.log("1WWU".parseManaCost()); //{"*":1, "w":2, "u":1}
console.log("0r".parseManaCost()); //{"r":1}
console.log("2x".parseManaCost()); //null
console.log("2R".parseManaCost()); //{"*":2, "r":1}
console.log("2\n".parseManaCost()); //null
console.log("\n2".parseManaCost()); //null
