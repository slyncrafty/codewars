/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5672f4e3404d0609ec00000a
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************

Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

    Always keep a space between the input string and the left and right borders.
    The biggest string inside the array should always fit in the frame.
    The input array is never empty.

Example

frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++

*/



// Solution
const frame = (text, char) => {
  let lengthMap = [];
  let maxLength = 0;
  // Find longest string out of the given array + horizontalOffset : width
  for(let str of text) {
    const length = str.length;
    if (maxLength < length) maxLength = length;
  }
  // vertical offset(\n) and horizontal padding
  const boundary = (char).repeat(maxLength + 4);
  const lines = [boundary];
  for(let str of text) {
    // for each element, add space to match the width to the longest string.
    const padding = ' '.repeat(maxLength - str.length + 1);
    // format the string
    const line = `${char} ${str}${padding}${char}`
    lines.push(line);
  }
  lines.push(boundary);
  return lines.join('\n');
};




/* ## Lessons Learned:
** Solved the problem by setting boundaries and offset/paddings per instruction for each string/line and push them to an array and later join them with a newline.
** 
** Improved string handling -- initially implemented concatenating but updated the method using Array.join() to improve readability 
*/




// Test Codes
let tests = [
    { 
      array: ['Small','frame'],
      character: '~',
      output: '~~~~~~~~~\n~ Small ~\n~ frame ~\n~~~~~~~~~'
    },
    {
      array: ['Create','this','kata'],
      character: '+',
      output: '++++++++++\n+ Create +\n+ this   +\n+ kata   +\n++++++++++'
    },
    {
      array: ['This is a very long single frame'],
      character: '-',
      output: '------------------------------------\n- This is a very long single frame -\n------------------------------------'
    },
    {
    array: [" Create a frame!","          __     __","         /  \\~~~/  \\","   ,----(     ..    )","  /      \\__     __/"," /|         (\\  |(","^  \\  /___\\  /\\ |","   |__|   |__|-.."], 
    character: '*',
    output: '*************************\n*  Create a frame!      *\n*           __     __   *\n*          /  \\~~~/  \\  *\n*    ,----(     ..    ) *\n*   /      \\__     __/  *\n*  /|         (\\  |(    *\n* ^  \\  /___\\  /\\ |     *\n*    |__|   |__|-..     *\n*************************'
}
  ];
for (let test of tests) {
    let result = frame(test.array, test.character);
    console.log(`Expected:\n${test.output}`);
    console.log(`Output:\n${result}`);
}

