let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie game you both picked ${playerSelection} `
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win! paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win! Rock smashes Scissors'
    } else if (playerSelection === 'Scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win! Scissors cuts Paper'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lose, Paper covers Rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lose! Scissors cuts Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You lose! Rock smashes Scissors'
    }
}

const game = () => {

    for (let i = 1; i < 5; i++) {
        const playerSelection = prompt('Pick rock paper or scissors').toLowerCase()
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === computerScore) {
        console.log('you tied')
        return 'You tied the computer, which pretty much makes you an adriod!'
    } else if (playerScore > computerScore) {
        console.log('you win')
        return 'Congratz you beat the computer!'
    } else if (playerScore < computerScore) {
        console.log('you lost')
        return 'You lost, Try again. If you dare!'
    }
    console.log(playerScore, computerScore)


}




game();
console.log(playerScore, computerScore)












