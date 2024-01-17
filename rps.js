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

//Declares and sets the scores to zero at the start.
let playerScore = 0;
let computerScore = 0;

//This function plays 1 round of the game and updates the score accordingly.
//The parameters are variables that get declared later
function play(computerSelection, playerSelection) {
//Logs any tie
    if (computerSelection === playerSelection) {
        console.log( 'Tie');
//If statements to update and return computer's score when it wins. 
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
//If statements to update and return Player's score when they win.
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
//A prompt to receive the Player's choice to be used in the round.
//This also converts the string to upper case.
 getPlayerChoice = prompt('Enter rock, paper, or scissors').toUpperCase();

//Declares the player and computer Selection variables.
//Assigns the values of the respective Choices to them.
const playerSelection = getPlayerChoice;
const computerSelection = getComputerChoice();
//Logs the values of the variables in the console.
console.log(playerSelection);
console.log(computerSelection);
//Logs the results of the play() function in the console.
console.log(play(computerSelection, playerSelection));
