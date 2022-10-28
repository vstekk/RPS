const gameDiv = document.getElementById('game');
const newGameButton = document.createElement('div');
newGameButton.classList.add("button");
newGameButton.textContent = "Play Game";
newGameButton.addEventListener('click', playGame);
gameDiv.appendChild(newGameButton);


function getPlayerChoice() {
    //const input = prompt("Write rock, paper or scissors.");
    const input = 'rock';
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

function playGame(){
    newGameButton.remove();
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);

        switch (playerSelection) {
            case "Clicked the stupid button!":
                return "Don't do that.";
            case computerSelection:
                return "It's a DRAW!";
            case "rock":
                computerSelection === "scissors" ? playerScore++ : computerScore++;
                return computerSelection === "scissors" ? "You WON!" : "You LOST!";
            case "paper":
                computerSelection === "rock" ? playerScore++ : computerScore++;
                return computerSelection === "rock" ? "You WON!" : "You LOST!";
            case "scissors":
                computerSelection === "paper" ? playerScore++ : computerScore++;
                return computerSelection === "paper" ? "You WON!" : "You LOST!";
            default:
                return "You need to focus.";
        }
    }

    for (let i = 1; i <= 5; i++){
        console.log(playRound(playerSelection, computerSelection));
        console.log("PLAYER " + playerScore + "  :  " + "COMPUTER" + computerScore)
    }

    console.log("GAME ENDED")
}
