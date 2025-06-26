/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/536e9a7973130a06eb000e9f
/* ========== ========== ========== ========== ========== ==========*/
/*
Pokemon Damage Calculator

Description:
It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

damage = 50 * (attack / defense) * effectiveness

Where:

    attack = your attack power
    defense = the opponent's defense
    effectiveness = the effectiveness of the attack based on the matchup (see explanation below)

Effectiveness:

Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

    Super effective: 2x damage
    Neutral: 1x damage
    Not very effective: 0.5x damage

To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

    fire > grass

    fire < water

    fire = electric

    water < grass

    water < electric

    grass = electric

For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).

The function you must implement takes in:

    your type
    the opponent's type
    your attack power
    the opponent's defense

*/



// Solution
function calculateDamage(yourType, opponentType, attack, defense){
  const matchUp = {
    fire: { grass: 2, electric: 1 },
    water: { fire: 2 },
    grass: { water: 2, electric: 1 },
    electric: { water: 2, grass: 1, fire: 1},
  }
  const effectiveness = 
        matchUp[yourType]?.[opponentType] ?? 0.5;

  // return damage
  return 50 * (attack / defense) * effectiveness;
}



/** Lessons Learned 
 *  
 *  Safe nested access: combine ?. with bracket[] 
 *      obj?.[variable]
 *    static:   obj?.fire?.grass
 *    dynamic:  obj?.[variable]?.[anotherVariable]
 */



// Test Codes
console.log(calculateDamage("fire", "water", 100, 100), 25);
console.log(calculateDamage("grass", "water", 100, 100), 100);
console.log(calculateDamage("electric", "fire", 100, 100), 50);
console.log(calculateDamage("grass", "electric", 57, 19), 150);
console.log(calculateDamage("grass", "water", 40, 40), 100);
console.log(calculateDamage("grass", "fire", 35, 5), 175);
console.log(calculateDamage("fire", "electric", 10, 2), 250);
