let playerScore = 0;
let computerScore = 0;

const gameDiv = document.getElementById('game');
const newGameButton = document.createElement('div');
newGameButton.classList.add("button");
newGameButton.textContent = "Play Game";
newGameButton.addEventListener('click', playGame);
gameDiv.appendChild(newGameButton);

function getPlayerChoice() {
    const rock = document.createElement('div');
    rock.textContent = 'ROCK';
    rock.classList.add('button');
    rock.addEventListener('click', () => console.log(playRound('rock')));
    
    const paper = document.createElement('div');
    paper.textContent = 'PAPER';
    paper.classList.add('button');
    paper.addEventListener('click', () => console.log(playRound('paper')));
    
    const scissors = document.createElement('div');
    scissors.textContent = 'SCISSORS';
    scissors.classList.add('button');
    scissors.addEventListener('click', () => console.log(playRound('scissors')));
    
    gameDiv.appendChild(paper);
    gameDiv.appendChild(rock);
    gameDiv.appendChild(scissors);
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

function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    switch (playerSelection) {
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

function playGame(){
    newGameButton.remove();
    playerScore = 0;
    computerScore = 0;

    getPlayerChoice();
}