//Guess That Number - Jack Massey//

//Variable Declaration//
const enterNumText = `Please enter a whole number greater than one: ` //Message to be used throughout file
let restartGame = true //For starting, restarting, and ending the game

let rangeNum; //Sets the upper limit for guessing range
let randomNum; //The number for the user to guess
let attempts; //Stores the number of attempts the user has left
let guess; //Stores the user's guess
let playAgain; //Stores the user's response to play again or not

//Starting Alert message
alert (`Welcome to "Guess That Number!" Press "OK" to begin!`)

//Game Loops as long as restartGame is true
while (restartGame) {
    rangeNum = prompt("Please enter a maximum number for the range: ")
    //Loop checks to see if user input a whole number greater than one
    while (parseInt(rangeNum) != rangeNum || rangeNum < 2) {
        rangeNum = prompt(enterNumText)
    }
    rangeNum = parseInt(rangeNum) // Using Parse Int to convert user's response to a number value
    
    randomNum = Math.floor((Math.random() * rangeNum)) + 1 //Creates a random number from 1 to rangeNum, inclusive
    
    attempts = prompt("Please enter the number of attempts allowed: ")
    //Loop checks to see if user input a whole number greater than zero and less than the maximum of the range
    while (parseInt(attempts) != attempts || attempts < 1 || attempts >= rangeNum) {
        attempts = prompt(`Enter a whole number from 1 to ${rangeNum - 1}:`)
    }
    attempts = parseInt(attempts) 

    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} guess(es) remaining: `);
    //Continues looping until the user is out of guesses, or until they guess the correct number
    while (attempts > 0 && guess != randomNum) {
        while (parseInt(guess) != guess || guess < 1 || guess > rangeNum) {
            guess = prompt(`Enter a whole number from 1 to ${rangeNum}:`)
        }
        guess = parseInt(guess)
        if (guess > randomNum) { //If the guess is too high, tells them and has them guess again
            guess = prompt(`Too high, guess again. You have ${attempts} guess(es) remaining: `)
        } else if (guess < randomNum) { //If the guess is too low, tells them and has them guess again
            guess = prompt(`Too low, guess again. You have ${attempts} guess(es) remaining: `)
        }
        attempts--;
    }
    if (guess == randomNum) { //If they guessed correctly, congratulates them
        alert(`Correct, you win! The number was: ${randomNum}`);
    } else { //If they didn't, tells them they lost
        alert(`Sorry, you ran out of attempts. The number was: ${randomNum}`)
    } //In both cases, tells them the correct answer

    //Asks the player if they'd like to play again
    playAgain = prompt(`Would you like to play again?\nEnter "Y" for yes, or "N" for no:`).toUpperCase().trim()
    //Loops until the player enters "Y" or "N" (case insensitive)
    while (playAgain != `Y` && playAgain != `N`) {
        playAgain = prompt(`Invalid response.\nEnter "Y" for yes, or "N" for no:`).toUpperCase().trim()
    }
    //If the player enters "N", ends the game. If they entered "Y", the game will run again.
    if (playAgain == "N") {
        restartGame = false;
    }
}