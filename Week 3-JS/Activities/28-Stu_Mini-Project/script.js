var rock = 'R'
var paper = 'P'
var scissors = 'S'

var game = ["R", "P", "S"]

var playerchoice;
var compchoice;
var goodanswer;

var wins = 0;
var losses = 0;
var tie = 0;


var play = confirm("Do you want to play a game?")

if (play) {
    start()
} else {
}

function start() {

    playerchoice = prompt("Pick R, P, or S!")

    // while (!goodanswer) {
    //     if (playerchoice.toUpperCase() === "R") {
    //         playerchoice = 0;
    //         goodanswer = true;
    //     } else if (playerchoice.toUpperCase() === "P") {
    //         playerchoice = 1;
    //         goodanswer = true;
    //     } else if (playerchoice.toUpperCase() === "S") {
    //         playerchoice = 2;
    //         goodanswer = true;
    //     } else {
    //         playerchoice = prompt()
    //     }
    // }

    compchoice = game[Math.floor(Math.random() * game.length)]

    if (playerchoice == "R" && compchoice == "R") {
        alert("Tie!");
        tie++;
    } else if (playerchoice == "R" && compchoice == "P") {
        alert("You lose!")
        losses++;
    } else if (playerchoice == "R" && compchoice == "S") {
        alert("You Win!")
        wins++;
    } else if (playerchoice == "P" && compchoice == "R") {
        alert("You Win!")
        wins++;
    } else if (playerchoice == "P" && compchoice == "P") {
        alert("Tie!")
        tie++;
    } else if (playerchoice == "P" && compchoice == "S") {
        alert("You lose!")
        losses++;
    } else if (playerchoice == "S" && compchoice == "R") {
        alert("You lose!")
        losses++;
    } else if (playerchoice == "S" && compchoice == "P") {
        alert("You Win!")
        wins++;
    } else if (playerchoice == "S" && compchoice == "S") {
        alert("Tie!")
        tie++;
    } else {
        console.log("Dead")
    }

    alert("The computer chose " + compchoice)

    alert("Wins " + wins + " Losses " + losses + " Ties " + tie)

    var playagain = confirm("Do you want to play again?")

    if (playagain) {
        start()
    } else {
        return
    }

}