/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57e8f757085f7c7d6300009a
/* ========== ========== ========== ========== ========== ==========*/
/*

Holiday II - Plane Seating

Description:

Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 41-60 = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/



// Solution
function planeSeat(code) {
    const code = code.match(/^([1-9]\d?)([A-HK])$/);
    if (!code) return 'No Seat!!';

    let row = Number(code[1]);
    const letter = code[2];

    // 2) Row must be 1–60
    if (row < 1 || row > 60) return 'No Seat!!';

    // 3) Section
    let section;
    if (row <= 20) section = 'Front';
    else if (row <= 40) section = 'Middle';
    else              section = 'Back';

    // 4) Cluster
    let cluster;
    if    (letter >= 'A' && letter <= 'C') cluster = 'Left';
    else if (letter >= 'D' && letter <= 'F') cluster = 'Middle';
    else                                     cluster = 'Right';

    return `${section}-${cluster}`;
}


// Test Codes
console.log(planeSeat('20B'), 'Front-Left');
console.log(planeSeat('2B'), 'Front-Left');
console.log(planeSeat('58I'), 'No Seat!!');
