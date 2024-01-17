//Make the computer choose between
//Rock Paper or Scissors
function getComputerChoice() {
//Declare a variable to generate & hold the random number
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
//Use a conditional to return a string when a number is generated 
//This ties the number 1 to the string "Rock"
    if (randomNum === 1) {
        return 'Rock'
    }
//This ties the number 2 to the string "Paper"
    else if (randomNum === 2) {
        return 'Paper'
    }
//This ties the number 3 to the string "Scissors"
    else if (randomNum === 3) {
        return 'Scissors'
    }
} console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;

function play(computerSelection, playerSelection) {
    
    if (computerSelection === playerSelection) {
        console.log( 'Tie');
    } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        console.log( 'You lose... Paper beats rock.');
        ++computerScore;
        return computerScore;
    } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        console.log( 'You lose... Scissors beats Paper.');
        ++computerScore;
        return computerScore;
    } else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
        console.log( 'You lose... Rock beats Scissors.');
        ++computerScore;
        return computerScore;
    }
    
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        console.log( 'You win! Paper beats rock.');
        ++playerScore;
        return playerScore
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log( 'You win! Scissors beats Paper.');
        ++playerScore;
        return playerScore;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('You win! Rock beats Scissors.')
        ++playerScore;
       return playerScore;
    }
} 

 getPlayerChoice = prompt('Enter rock, paper, or scissors').toUpperCase();