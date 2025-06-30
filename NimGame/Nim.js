"use strict";
let row1;
let row2;
let row3;
let row4;
let _row;
let _amount;
let win = false;
let activePlayer = true;
console.log("Welcome");
fillRows();
function fillRows() {
    row1 = Number(prompt("select amount of row1"));
    row2 = Number(prompt("select amount of row2"));
    row3 = Number(prompt("select amount of row3"));
    row4 = Number(prompt("select amount of row4"));
}
game();
function game() {
    //displayState()
    //function displayState() {
    if (activePlayer == true) {
        alert("Player 1 turn");
    }
    else {
        alert("Player 2 turn");
    }
    alert(Number(row1));
    alert(Number(row2));
    alert(Number(row3));
    alert(Number(row4));
    //}
    _row = Number(prompt("select row"));
    _amount = Number(prompt("select amount"));
    switch (_row) {
        case 1:
            row1 = row1 - _amount;
            break;
        case 2:
            row2 = row2 - _amount;
            break;
        case 3:
            row3 = row3 - _amount;
            break;
        case 4:
            row4 = row4 - _amount;
            break;
    }
    console.log(row1);
    console.log(row2);
    console.log(row3);
    console.log(row4);
    if (row1 + row2 + row3 + row4 == 0) {
        win = true;
    }
    if (win == true) {
        console.log("game over");
        if (activePlayer == false) {
            console.log("Player one won");
        }
        else {
            console.log("Player two won");
        }
    }
    else {
        activePlayer = !activePlayer;
        game();
    }
}
