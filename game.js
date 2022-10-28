let playerScore = 0;
let computerScore = 0;

const gameDiv = document.getElementById('game');
const newGameButton = document.createElement('div');
newGameButton.classList.add("button");
newGameButton.textContent = "Play Game";
newGameButton.addEventListener('click', playGame);
gameDiv.appendChild(newGameButton);

const score = document.createElement('div');
score.setAttribute('id', 'score')

const playerChoice = document.createElement('div');
playerChoice.classList.add('choices');
const rock = document.createElement('div');
rock.textContent = 'ROCK';
rock.classList.add('button');
rock.addEventListener('click', () => playRound('rock'));
const paper = document.createElement('div');
paper.textContent = 'PAPER';
paper.classList.add('button');
paper.addEventListener('click', () => playRound('paper'));
const scissors = document.createElement('div');
scissors.textContent = 'SCISSORS';
scissors.classList.add('button');
scissors.addEventListener('click', () => playRound('scissors'));

playerChoice.appendChild(rock);
playerChoice.appendChild(paper);
playerChoice.appendChild(scissors)

const result = document.createElement('div');
result.setAttribute('id', 'result');

function getPlayerChoice() {
    gameDiv.appendChild(playerChoice);
    gameDiv.appendChild(result);
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

    switch (playerSelection) {
        case computerSelection:
            break;
        case "rock":
            computerSelection === "scissors" ? playerScore++ : computerScore++;
            break;
        case "paper":
            computerSelection === "rock" ? playerScore++ : computerScore++;
            break;
        case "scissors":
            computerSelection === "paper" ? playerScore++ : computerScore++;
            break;
    }
    score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
    result.textContent = "Player: " + playerSelection + " Computer: " + computerSelection;
    if (playerScore + computerScore === 5) {
        endGame();
    }
}

function playGame(){
    newGameButton.remove();
    playerScore = 0;
    computerScore = 0;
    gameDiv.appendChild(score);
    getPlayerChoice();
}

function endGame(){
    playerChoice.remove();
    score.remove();
    result.textContent = playerScore > computerScore ? 'You WON!' : 'You LOST!';
    gameDiv.appendChild(newGameButton);
}