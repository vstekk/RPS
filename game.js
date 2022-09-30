function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    switch (playerSelection) {
        case "Clicked the stupid button!":
            return "Don't do that.";
        case computerSelection:
            return "It's a DRAW!";
        case "rock":
            return computerSelection === "scissors" ? "You WON!" : "You LOST!";
        case "paper":
            return computerSelection === "rock" ? "You WON!" : "You LOST!";
        case "scissors":
            return computerSelection === "paper" ? "You WON!" : "You LOST!";
        default :
            return "You need to focus.";
    }
}

function getPlayerChoice() {
    const input = prompt("Write rock, paper or scissors.");
    if (input === null) {
        return "Clicked the stupid button!";
    } else return input.toLowerCase();
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));