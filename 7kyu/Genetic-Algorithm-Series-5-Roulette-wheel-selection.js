/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Genetic Algorithm Series - #5 Roulette wheel selection

Description:
The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

Your task is to implement it.

roulette

You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

Given the population and fitnesses, your task is to run the roulette to return one element.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

// Solution
// o(n) time complexity
const select = (population, fitnesses) => {
	// calculate the total fitness
	const totalFitness = fitnesses.reduce((sum, fitness) => sum + fitness, 0);
	// random number between [0, totalFitness]
	const randomVal = Math.random() * totalFitness;

	// find the selected individual using cumulative probability
	let cumulativeFitness = 0;
	for (let i = 0; i < population.length; i++) {
		cumulativeFitness += fitnesses[i];
		if (cumulativeFitness >= randomVal) return population[i];
	}
	// fallback to return last one
	return population[population.length - 1];
};

// Test Codes
const population = [1, 2, 3];
const fitnesses = [0.05, 0.05, 0.9];

for (let n = 0; n < 10; ++n) {
	let results = [];
	for (let i = 0; i < 10; ++i) {
		results.push(select(population, fitnesses));
	}
	let threes = results.filter((x) => x == 3).length;
	if (threes <= 6)
		`3 should be the most returned element, got ${results} returns`;
}
