"use strict";
let counter = 0;
let d4 = 4;
let d6 = 6;
let d8 = 8;
let d10 = 10;
let rolls;
let d4n;
let d6n;
let d8n;
let d10n;
let i;
d4n = Number(prompt("How many d4 dice do you want?"));
d6n = Number(prompt("How many d6 dice do you want?"));
d8n = Number(prompt("How many d8 dice do you want?"));
d10n = Number(prompt("How many d10 dice do you want?"));
rolls = Number(prompt("How many times do you want to roll?"));
for (i = 0; i < rolls; i++) {
    rollDice;
}
const numberOfDice = 3;
const numberOfSides = 6;
function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
function rollDice(count, sides) {
    const rolls = [];
    for (let i = 0; i < count; i++) {
        rolls.push(rollDie(sides));
    }
    const total = rolls.reduce((sum, roll) => sum + roll, 0);
    return { rolls, total };
}
