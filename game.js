let playerScore = 0;
let computerScore = 0;

const newGameButton = document.getElementById('start');
const playerDiv = document.getElementById('player');
const computerDiv = document.getElementById('computer');
const scoreDiv = document.getElementById('score');
const resultDiv = document.getElementById('result');
const choicesDiv = document.getElementById('choices');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerSelectionDiv = document.getElementById('computerSelection');
const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');

newGameButton.addEventListener('click', playGame);
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

function playGame(){
    newGameButton.classList.add('hidden');
    resultDiv.classList.add('hidden');
    removeLatest();

    playerScore = 0;
    computerScore = 0;
    updateScoreDiv();

    playerDiv.classList.remove('hidden')
    computerDiv.classList.remove('hidden')
    scoreDiv.classList.remove('hidden');
    choicesDiv.classList.remove('hidden');
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

function updateScoreDiv(){
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function resolvePlayerWon(){
    playerScore++
    resultDiv.textContent = "You WON!";
}
function resolveComputerWon(){
    computerScore++;
    resultDiv.textContent = "You LOST!";
}

function removeLatest(){
    const allLatest = [...(choicesDiv.getElementsByClassName('latest'))];
    allLatest.forEach(latest => {
        latest.classList.remove('latest');
    });
}

function playRound(playerSelection) {

    removeLatest();
    document.getElementById(playerSelection).classList.add('latest');

    const computerSelection = getComputerChoice();
    computerSelectionDiv.textContent = computerSelection;
    computerSelectionDiv.classList.remove('hidden');

    switch (playerSelection) {
        case computerSelection:
            resultDiv.textContent = "It's a DRAW";
            break;
        case "rock": 
            computerSelection === "scissors" ? resolvePlayerWon() : resolveComputerWon();
            break;
        case "paper":
            computerSelection === "rock" ? resolvePlayerWon() : resolveComputerWon();
            break;
        case "scissors":
            computerSelection === "paper" ? resolvePlayerWon() : resolveComputerWon();
            break;
    }
    updateScoreDiv();

    resultDiv.classList.remove('hidden');
    if (playerScore === 3 || computerScore === 3) {
        endGame();
    }
}

function endGame(){
    choicesDiv.classList.add('hidden');
    resultDiv.textContent = playerScore > computerScore ? 'You WON!' : 'You LOST!';
    newGameButton.classList.remove('hidden');
}