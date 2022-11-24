let compoint = 0;
let yourpoint = 0;


const choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];

};

/*
function playerSelection(){

};

function computerSelection(){

};
*/




function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if ((computerSelection === "paper" && playerSelection === "scissor") || (computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissor" && playerSelection === "rock")) {
        yourpoint++;
        return "you win ";

    } else if (computerSelection === playerSelection) {
        return "tie"
    } else {
        compoint++;
        return "you lose";

    };

};




function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("enter ur choice");
        console.log(playRound(playerSelection, computerSelection));
    }
    if (compoint > yourpoint) {
        return "compuer wins game";
    } else if (yourpoint > compoint) {
        return "you win game";
    } else {
        return "game tied";
    };

};

console.log(game());

