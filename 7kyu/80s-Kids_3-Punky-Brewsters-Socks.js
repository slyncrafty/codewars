/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/80-s-kids-number-3-punky-brewsters-socks
/* ========== ========== ========== ========== ========== ==========*/
/*
80's Kids #3: Punky Brewster's Socks

Description:

Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']

Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.
*/



// Solution
function getSocks(name, socks) {
    if(name === 'Henry') {
        const count = {};
        for(sock of socks) {
            count[sock] = (count[sock] || 0) + 1;
            if(count[sock] === 2) return [sock, sock];
        }
    }
    else if(name === 'Punky') {
        const count = new Set();
        for (sock of socks) {
            if(!count.has(sock)) count.add(sock);
            if(count.size === 2) return Array.from(count);
        }
    }
    return [];
}


// Test Codes
console.log(getSocks('Henry', ['red','blue','blue','green']), [ "blue", "blue" ]);
console.log(getSocks('Punky', ['red','blue','blue','green']), [ "red", "blue" ]);