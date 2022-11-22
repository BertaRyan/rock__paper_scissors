

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

  
function playRound(player, computer) {
    winner = 
    if(player === computer){
    console.log(`You both picked ${player}. So it's a Tie.`)
    } 
    if(player === rock){
    if(computer===scissors){
        console.log("You win! Rock smashes Scissors")
        }
    }
    if(player===paper){
    if(computer===rock){
        console.log('You win! Paper covers rock!')
        }else{
            console.log('Computer wins.')
        }
    }
    if(player===scissors){
    if(computer===paper){
        console.log('You win! Scissors cuts paper!')
        }
        else{
            console.log('Computer wins.')
        }
    }
}
const player = prompt('Pick Rock-Paper-Scissors to play!').toLowerCase();
const computer = computerSelection();
console.log(player)
console.log(playRound(player,computer));


















