//Make the computer choose between
//Rock Paper or Scissors
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
    if (randomNum === 1) {
        compVis.textContent = '✊'
        return 'ROCK'
    } else if (randomNum === 2) {
        compVis.textContent = '🤚'
        return 'PAPER'
    } else if (randomNum === 3) {
        compVis.textContent = '✌️'
        return 'SCISSORS'
    }
} 
//Declares and sets the scores to zero at the start.
let playerScore = 0;
let computerScore = 0;
const outcome = document.querySelector('.outcome');
const roundResult = document.querySelector('.round-result')
const result = document.querySelector('.result');
const para = document.querySelector('.para');
para.textContent = 'Who Will Win?';
const score = document.querySelector('.score');
score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
const h4 = document.createElement('h4');
h4.textContent = 'First to 5'
outcome.appendChild(h4);
reset = document.querySelector('.reset');
reset.addEventListener('click', function (){
    window.location.reload();
});

const playerVis = document.querySelector('.playerVis');
playerVis.textContent = '?';
const compVis = document.querySelector('.compVis');
compVis.textContent = '?';

//This function plays 1 round of the game and updates the score accordingly.
function play(computerSelection, playerSelection) {
//Logs any tie
    
    if (computerSelection === playerSelection) {
        console.log( 'Tie');
        para.textContent = `It\'s a tie! You both chose ${playerSelection}`
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
//If statements to update and return computer's score when it wins. 
    } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        console.log( 'You lose... Paper beats rock.');
        para.textContent = 'Aww... Paper beats rock.'
        ++computerScore;
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
        gameOver(playerScore, computerScore);
        return computerScore;
    } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        console.log( 'You lose... Scissors beats Paper.');
        para.textContent = 'Aww... Scissors beats Paper.'
        ++computerScore;
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
        gameOver(playerScore, computerScore);
        return computerScore;
    } else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
        console.log( 'You lose... Rock beats Scissors.');
        para.textContent = 'Aww... Rock beats Scissors.'
        ++computerScore;
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
        gameOver(playerScore, computerScore);
        return computerScore;
    }
//If statements to update and return Player's score when they win.
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        console.log( 'You win! Paper beats rock.');
        para.textContent = 'Nice! Paper beats rock.'
        ++playerScore;
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
        gameOver(playerScore, computerScore);
        return playerScore
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log( 'You win! Scissors beats Paper.');
        para.textContent = 'Nice! Scissors beats Paper.'
        ++playerScore;
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
        gameOver(playerScore, computerScore);
        return playerScore;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('You win! Rock beats Scissors.');
        para.textContent = 'Nice! Rock beats Scissors.'
        ++playerScore;
        score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
        gameOver(playerScore, computerScore);
       return playerScore;
    }  
} 

function gameOver(playerScore, computerScore) {
    reset.disabled = true;
        if (playerScore === 5){
            h4.textContent = `Winner!`;
            rockBtn.disabled = true;    paperBtn.disabled = true;   scissorsBtn.disabled = true;
            reset.disabled = false;
        } else if (computerScore === 5) {
            h4.textContent = `Loser!`;
            rockBtn.disabled = true;    paperBtn.disabled = true;   scissorsBtn.disabled = true;
            reset.disabled = false;
        }  
    };

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function rockClick() {
    playerSelection = 'ROCK';
    computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
    playerVis.textContent = '✊'
    gameOver(playerScore, computerScore);
});
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function paperClick() {
    playerSelection = 'PAPER';
    computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
    playerVis.textContent = '🤚'
    gameOver(playerScore, computerScore);
});
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function scissorsClick() {
    playerSelection = 'SCISSORS';
    computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
    playerVis.textContent = '✌️'
});