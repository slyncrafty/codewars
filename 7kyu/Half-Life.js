/*
Half Life

Description:

The half-life of a radioactive substance is the time it takes (on average) for one-half of its atoms to undergo radioactive decay.
Task Overview

Given the initial quantity of a radioactive substance, the quantity remaining after a given period of time, and the period of time, return the half life of that substance.
Usage Examples

Initial quantity: 10
Remaining quantity: 5
Period of time: 1
Half life --> 1.0
(if quantity halves in 1 time period, half-life = 1)

Initial quantity: 8
Remaining quantity: 4
Period of time: 2
Half life --> 2.0
(if quantity halves in 2 time periods, half-life = 2)

Initial quantity: 12
Remaining quantity: 3
Period of time: 2
Half life --> 1.0
(if quantity is one-quarter after 2 time periods, half-life = 1)

*/



// Solution

function halfLife(quantityInitial, quantityRemaining, time) {
    return time * Math.log(2) / Math.log(quantityInitial / quantityRemaining);
}