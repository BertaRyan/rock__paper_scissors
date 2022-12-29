let playerScore = 0
let computerScore = 0
let winningScore = 3
let gameOver = false


let playerScoreSpan = document.querySelector('.playerScore');
let computerScoreSpan = document.querySelector('.computerScore');

const updateScore= (playerScore,computerScore) => {
    playerScoreSpan.innerText= `${playerScore}`;
    computerScoreSpan.innerText= `${computerScore}`;
}



const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorsbtn = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome')

rockbtn.addEventListener('click', e =>{
   const computerSelection = getComputerChoice();
   const playerSelection = 'rock'
   playRound(playerSelection,computerSelection);
   updateScore(playerScore,computerScore);
   checkForWinner(playerScore,computerScore);
});

paperbtn.addEventListener("click", e => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper'
    playRound(playerSelection,computerSelection);
    updateScore(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
});

scissorsbtn.addEventListener('click',e => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors'
    playRound(playerSelection,computerSelection);
    updateScore(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
})

const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText=`Tie game you both picked ${playerSelection}`;
        outcome.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p');
        p.innerText='You win! paper covers rock'
        outcome.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p')
        p.innerText ='You win! Rock smashes Scissors'
        outcome.appendChild(p);
        
    } else if (playerSelection === 'Scissors' && computerSelection === 'paper') {
        playerScore++
        const p = document.createElement('p');
        p.innerText='You win! Scissors cuts Paper'
        outcome.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        const p = document.createElement('p');
        p.innerText = 'You lose, Paper covers Rock'
        outcome.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        const p = document.createElement('p');
        p.innerText='You lose! Scissors cuts Paper'
        outcome.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        const p = document.createElement('p');
        p.innerText='You lose! Rock smashes Scissors'
        outcome.appendChild(p);
    }
}

function checkForWinner(playerScore,computerScore){
    if(playerScore === winningScore) {
    const h2 = document.createElement('h2');
    h2.classList.add('player-won')
    
    h2.innerText='Good job! You are the victor';
    outcome.append(h2);
    gameOver = true;
    rockbtn.disabled = true
    paperbtn.disabled = true 
    scissorsbtn.disabled = true
    reset()

    } else if(computerScore === winningScore) {
        const h2 = document.createElement('h2');
        h2.classList.add('comp-won')
       
        h2.innerText='You lost this time. Keep practicing'
        gameOver = true;
        outcome.append(h2);
        rockbtn.disabled = true
        paperbtn.disabled = true
        scissorsbtn.disabled = true
        reset()
    }
}

 

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', (e) =>{
   playerScoreSpan.innerText = 0;
   computerScoreSpan.innerText = 0;
   playerScore = 0;
   computerScore = 0;
   outcome.innerText = "";
   gameOver = false;
   rockbtn.disabled = false;
   paperbtn.disabled = false;
   scissorsbtn.disabled = false;
   reset();

})

// const game = () => {
   
//     for (let i = 1; i < 5; i++) {
//         const playerSelection = prompt('Pick rock paper or scissors').toLowerCase()
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection)
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore === computerScore) {
//         console.log('you tied')
//         return 'You tied the computer, which pretty much makes you an adriod!'
//     } else if (playerScore > computerScore) {
//         console.log('you win')
//         return 'Congratz you beat the computer!'
//     } else if (playerScore < computerScore) {
//         console.log('you lost')
//         return 'You lost, Try again. If you dare!'
//     }
//     console.log(playerScore, computerScore)


// }




// game();
// console.log(playerScore, computerScore)












