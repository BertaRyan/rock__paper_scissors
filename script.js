

const rock = "rock";
const paper = "paper";
const scissors = "scissors";




function computerSelection() {
    const num = Math.floor(Math.random() * 3) + 1
    if (num === 1) {
        console.log(`Computer picked ${rock}`);
    } else if (num === 2) {
        console.log(`Computer picked ${paper}`);
    } else if (num === 3) {
        console.log(`Computer picked ${scissors}`);
    }
}


    if ( player1 === rock && computerChoice === scissors) {
        console.log("You Win! Rock beats Scissors!");
    }  if(player1 === paper , computerChoice === rock) {
        console.log('You Win! Paper beats Rock!');
    }  if(player1 === scissors , computerChoice === paper) {
        console.log('You Win! Scissors Beats Paper');
    }  if(computerChoice === rock , player1 === scissors) {
        console.log("You Lose! Rock beats Scissors! Better Luck Next Time");
    }  if(computerChoice === paper , player1 === rock) {
        console.log('You Lose! Paper beats Rock! Better Luck Next Time');
    } if(computerChoice === scissors , player1 === paper) {
        console.log('You Lose! Scissors Beats Paper Better Luck Next Time');
    } 
     if(player1 === computerChoice){
        console.log('STAAALLLLEEEE-MMAAAATTTEEE')
    }


function game(){
    playRound(player1, computerChoice);
    for(let i=0;i<5;i++){

    }
}

game()


const player1 = prompt("Pick Rock-Paper-Scissors".toLowerCase());
const computerChoice = computerSelection();

console.log(player1)

playRound()





