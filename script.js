const option = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function compChoice() {
    let choice = option[Math.floor(Math.random() * 3)];
    return choice
}

function playerChoice() {
    let player = prompt('Pick Rock, Paper, Scissors').toLowerCase();
    return player
}

function findWinner(player, computer) {

    if (player === computer) {
        return 'Tie'
    } else if ((player === option[0] && computer === option[2]) ||
        (player === option[1] && computer === option[0]) ||
        (player === option[2] && computer === option[1])) {
            playerScore++
        return 'Player Wins!'
       
    } else {
        computerScore++
        return 'You Lose'
    }
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = compChoice();
    findWinner(playerSelection, computerSelection);


    console.log(playerSelection)
    console.log(computerSelection)
    console.log(findWinner(playerSelection, computerSelection));
    return findWinner(playerSelection, computerSelection);
   

}


function game() {

    for (let i = 1; i <= 5; i++) {
        playRound()
    }

if(playerScore>computerScore){
    console.log("You beat the computer! you are the best!")
    return "You beat the computer! you are the best!"
} else if (playerScore<computerScore){
    console.log( "You got beat by a computer! better practice up!")
    return "You got beat by a computer! better practice up!"
} else {
    console.log("You tied with a computer..basically a robot yourself.") 
    return "You tied with a computer..basically a robot yourself."
}

}

// if(playerScore > computerScore){

//     return "You beat the computer!!";

// } else {
//     return "You lost to the computer, Try again!";
// }












game()













