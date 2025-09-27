/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58b57ae2724e3c63df000006
/* ========== ========== ========== ========== ========== ==========*/
/*
Parse HTML/CSS Colors

Description:
In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).
Input:

The input string represents one of the following:

    6-digit hexadecimal - "#RRGGBB"
    e.g. "#012345", "#789abc", "#FFA077"
    Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

    3-digit hexadecimal - "#RGB"
    e.g. "#012", "#aaa", "#F5A"
    Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

    Preset color name
    e.g. "red", "BLUE", "LimeGreen"
    You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), PresetColors (Go) or preset-colors (Clojure). The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

Examples:

parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }

*/



// Solution
function parseHTMLColor(color) {
  let hexCode;
  if(color[0] === '#') {
    if(color.length === 4) {
      const r = color[1], g = color[2], b = color[3];
      hexCode = `#${r}${r}${g}${g}${b}${b}`;
    } else if (color.length === 7) {
      hexCode = color;
    }
  } else {
    hexCode = PRESET_COLORS && PRESET_COLORS[color.toLowerCase()];
  }
  const r = parseInt(hexCode.slice(1,3), 16);
  const g = parseInt(hexCode.slice(3,5), 16);
  const b = parseInt(hexCode.slice(5,7), 16);
  return {r,g,b};
}



// Test Codes
const deepEqualObj = (a, b) => {
    if(a === b) return true;
    if(a && b && typeof a === 'object' && typeof b === 'object'){
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return keysA.every((k) => deepEqualObj(keysA[k], keysB[k]));
    }
    return false;
}
deepEqualObj(parseHTMLColor('#3B7'),      { r: 51, g: 187, b: 119 });
deepEqualObj(parseHTMLColor('#80FFA0'),   { r: 128, g: 255, b: 160 });
// deepEqualObj(parseHTMLColor('LimeGreen'),   { r: 50, g: 205, b: 50 });
