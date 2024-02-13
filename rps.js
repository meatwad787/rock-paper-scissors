//Make the computer choose between
//Rock Paper or Scissors
function getComputerChoice() {
//Declare a variable to generate & hold the random number
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
//Use a conditional to return a string when a number is generated 
//This ties the number 1 to the string "Rock"
    if (randomNum === 1) {
        return 'ROCK'
    }
//This ties the number 2 to the string "Paper"
    else if (randomNum === 2) {
        return 'PAPER'
    }
//This ties the number 3 to the string "Scissors"
    else if (randomNum === 3) {
        return 'SCISSORS'
    }
} 

//Declares and sets the scores to zero at the start.
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.result');
const para = document.querySelector('.para');
const score = document.querySelector('.score')

//This function houses the play() function and some variables.
//It allows the code to run without errors. 
// function game() {
// //A prompt to receive the Player's choice to be used in the round.
// //This also converts the string to upper case.
// //Had to put it here because of the order that variables get evaluated/ read.
//     getPlayerChoice = prompt('Enter Rock, Paper or Scissors').toUpperCase();
// //Declares the player and computer Selection variables.
// //Assigns the values of the respective Choices to them.     
//     const playerSelection = getPlayerChoice;
//     const computerSelection = getComputerChoice();
    
//     play(computerSelection, playerSelection);

// //Logs the values of the variables in the console.   
//        console.log(playerSelection);
//        console.log(computerSelection);
//        console.log(playerScore, computerScore);

//        alert('Player: ' + playerSelection + ' ' 
//        + '| ' + 'Computer: ' + computerSelection + '\n'
//        + 'Player Score: ' + playerScore + ' | ' + 'Computer Score: '
//        + computerScore); 
//         }
//This function plays 1 round of the game and updates the score accordingly.
//The parameters are variables that get declared later
function play(computerSelection, playerSelection) {
//Logs any tie
score.textContent = `Scores: Player ${playerScore} | Computer ${computerScore}`
    if (computerSelection === playerSelection) {
        console.log( 'Tie');
        para.textContent = `It\'s a tie! You both chose ${playerSelection}`
//If statements to update and return computer's score when it wins. 
    } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        console.log( 'You lose... Paper beats rock.');
       // const result = document.querySelector('.result');
       // const para = document.querySelector('p');
        para.textContent = 'You lose... Paper beats rock.'
        ++computerScore;
        return computerScore;
    } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        console.log( 'You lose... Scissors beats Paper.');
        para.textContent = 'You lose... Scissors beats Paper.'
        ++computerScore;
        return computerScore;
    } else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
        console.log( 'You lose... Rock beats Scissors.');
        para.textContent = 'You lose... Rock beats Scissors.'
        ++computerScore;
        return computerScore;
    }
//If statements to update and return Player's score when they win.
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        console.log( 'You win! Paper beats rock.');
        para.textContent = 'You win! Paper beats rock.'
        ++playerScore;
        return playerScore
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log( 'You win! Scissors beats Paper.');
        para.textContent = 'You win! Scissors beats Paper.'
        ++playerScore;
        return playerScore;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('You win! Rock beats Scissors.');
        para.textContent = 'You win! Rock beats Scissors.'
        ++playerScore;
       return playerScore;
    } 
} 
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function () {
    playerSelection = 'ROCK';
    computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
});
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function () {
    playerSelection = 'PAPER';
    computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
});
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function () {
    playerSelection = 'SCISSORS';
    computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
});
// This "for" loop runs the game() function one thousand times.
// for (i = 0; i <= 1000; i++){
//     game();
// //This if conditional stops the function from running if either of the scores reach 5.
//     if (playerScore === 5){
// //An alert to display an "end of game" message and the final scores. Breaks the loop if condition is true.
// alert('You Won! ' + 'Final Scores: ' 
// + 'Player ' + playerScore + ' ' + '|' 
// + ' '
// + 'Computer ' + computerScore 
// + '\n' + 'Refresh the page to play again.');
// break;
// } else if (computerScore === 5) {
// alert('Game Over! ' + 'Final Scores: ' 
// + 'Player ' + playerScore + ' ' + '|' 
// + ' '
// + 'Computer ' + computerScore 
// + '\n' + 'Refresh the page to play again.' );
// break;
//      }
//     }