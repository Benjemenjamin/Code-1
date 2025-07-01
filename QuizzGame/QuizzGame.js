"use strict";
var Quizz;
(function (Quizz) {
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    let answer5;
    console.log(Quizz.data[0].Question1);
    answer1 = (prompt(Quizz.data[0].Question1));
    if (answer1 == "2") {
        alert("Correct!");
    }
    else {
        alert("incorrect!");
        alert(Quizz.data[0].Answer);
    }
    answer2 = (prompt(Quizz.data[1].Question2));
    if (answer2 == "4") {
        alert("Correct!");
    }
    else {
        alert("incorrect!");
        alert(Quizz.data[1].Answer);
    }
    (alert(Quizz.data[2].Question3));
    answer3 = (prompt(Quizz.data[2].options));
    if (answer3 == "b") {
        alert("Correct!");
    }
    else {
        alert("incorrect!");
        alert(Quizz.data[2].Answer);
    }
    answer4 = (prompt(Quizz.data[3].Question4));
    if (answer4 == "4") {
        alert("Correct!");
    }
    else {
        alert("incorrect!");
        alert(Quizz.data[3].Answer);
    }
    answer5 = (prompt(Quizz.data[4].Question5));
    if (answer5 == 122) {
        alert("Correct!");
    }
    else {
        if (answer5)
            ;
    }
})(Quizz || (Quizz = {}));
