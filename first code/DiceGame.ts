//let counter: number = 0;
//let d4: number = 4
//let d6: number = 6
//let d8: number = 8
//let d10: number = 10
//let rolls: number;
//let d4n: number;
//let d6n: number;
//let d8n: number;
//let d10n: number;
//let i: number;




//d4n = Number(prompt("How many d4 dice do you want?"));
//d6n = Number(prompt("How many d6 dice do you want?"));
//d8n = Number(prompt("How many d8 dice do you want?"));
//d10n = Number(prompt("How many d10 dice do you want?"));
//rolls = Number(prompt("How many times do you want to roll?"));


//for (i = 0; i < rolls; i++){
//rollDice(3,3)
//}

//const numberOfDice = 3;
//const numberOfSides = 6;



//function rollDie(sides: number): number {
  //return Math.floor(Math.random() * sides) + 1;
//}

//interface RollResult {
  //  rolls: number[];
    //total: number;
//}

//function rollDice(count: number, sides: number): RollResult {
  //const rolls: number[] = [];
  //for (let i = 0; i < count; i++) {
   // rolls.push(rollDie(sides));
  //}
  //const total = rolls.reduce((sum, roll) => sum + roll, 0);
  //return { rolls, total };
//}



let currentDieData: any = {"d4": 0, "d6": 0, "d8": 0, "d10": 0,"d12": 0, "d20": 0};
     let maxDieData: any = {"d4": 4, "d6": 6, "d8": 8, "d10": 10,"d12": 12, "d20": 20};
     let numberStash: any = {"d4": [], "d6": [], "d8": [], "d10": [],"d12": [], "d20": []};

    //Initialization Values
     let currentDieType: string;
     let currentDieAmount: number;


    //Roll Output Variables
     let rollSum: number = 0;
     let rollAverage: number = 0;
     let minimal: number = Infinity; 
     let maximal: number = -Infinity;
     let Median: number = 0;

const userDiceDecition = selectDieType();
function selectDieType(): string{

        let userInput: number = parseInt(prompt("What Die to choose: (1):D4, (2):D6, (3):D8, (4):D10, (5):D12, (6): D20, (0): Start Simulation") || "-1");
        let userDiceDecition: string = "0";

        switch(userInput){
            case -1: {
                selectDieType();
                break;
            }
            case 1: {
                userDiceDecition = "d4";
                break;
            }
            case 2:{
                userDiceDecition = "d6";
                break;
            }
            case 3:{
                userDiceDecition = "d8";
                break;
            }
            case 4:{
                userDiceDecition = "d10";
                break;
            }
            case 5:{
                userDiceDecition = "d12";
                break;
            }
            case 6:{
                userDiceDecition = "d20";
                break;
            }
        }

        return userDiceDecition;
      }
      selectionDieAmount(userDiceDecition)
       function selectionDieAmount(_dieType: string): number{
        let userAmountInput: number = parseInt(prompt("How many " + _dieType + " do you want? ") || "-1");
        return userAmountInput;
    }
