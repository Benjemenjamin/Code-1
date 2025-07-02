let counter: number = 0;
let d4: number = 4
let d6: number = 6
let d8: number = 8
let d10: number = 10
let rolls: number;
let d4n: number;
let d6n: number;
let d8n: number;
let d10n: number;
let i: number;




d4n = Number(prompt("How many d4 dice do you want?"));
d6n = Number(prompt("How many d6 dice do you want?"));
d8n = Number(prompt("How many d8 dice do you want?"));
d10n = Number(prompt("How many d10 dice do you want?"));
rolls = Number(prompt("How many times do you want to roll?"));


for (i = 0; i < rolls; i++){
rollDice
}

const numberOfDice = 3;
const numberOfSides = 6;



function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

interface RollResult {
    rolls: number[];
    total: number;
}

function rollDice(count: number, sides: number): RollResult {
  const rolls: number[] = [];
  for (let i = 0; i < count; i++) {
    rolls.push(rollDie(sides));
  }
  const total = rolls.reduce((sum, roll) => sum + roll, 0);
  return { rolls, total };
}
