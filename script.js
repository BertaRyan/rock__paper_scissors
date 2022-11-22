

const choice = ['rock', 'paper', 'scissors']


function game() {
    for(let i = 0; i <= 5; i++) {
        playRound();
    }

}



function playRound() {
    const playerChoice = playerSelection();
    const computerChoice = computerSelection();
    const winner = checkWinner(playerChoice, computerChoice);
    console.log(computerChoice)
    console.log(playerChoice)
    console.log(winner)
}




function playerSelection() {
    let playerInput = prompt("Type Rock, Paper, or Scissors").toLowerCase();
    return playerInput;

}

function computerSelection() {
    return choice[Math.floor(Math.random() * choice.length)]
}

function validateUser(choice) {
    while (choice.includes(choice));
}

function checkWinner(person, computer) {
    if (person === computer) {
        return 'Tie';
    } else if
        ((person === "rock" && computer === "scissors") ||
        (person === "paper" && computer === "rock") ||
        (person === "scissors" && computer === "paper")) {
        return 'You Win';
    } else {
        return "Computer wins";
    }
}

function logWins(playerIn,computerIn){
    if(player== winner){
        return 'Player win'
    }else {
        return 'computer wins'
    }
   
}


game();
























