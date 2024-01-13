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