//Guess That Number - Jack Massey//

//Variable Declaration//
const enterNumText = `Please enter a number greater than zero: ` //Message to be used throughout file
let restartGame = true //For starting, restarting, and ending the game

let rangeNum; //Sets the upper limit for guessing range
let randomNum; //The number for the user to guess
let attempts; //Stores the number of attempts the user has left
let guess; //Stores the user's guess
let playAgain; //Stores the user's response to play again or not