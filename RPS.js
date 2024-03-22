// rock paper scissors project
// input rock paper scissors, generate random of 3 and decide winner
const userInput = 'PAPER'
console.log(`You chose ${userInput}`)
const randomNum = Math.floor(Math.random() *3)
let OpponentInput = ''
 switch (randomNum) {
    case 0:
        OpponentInput = 'ROCK';
        break;
    case 1:
        OpponentInput = 'SCISSORS';
        break;
    case 2:
        OpponentInput = 'PAPER';
        break;
}
console.log(`Your opponent chose ${OpponentInput}!`)
function whoWins() {
    if(userInput == OpponentInput){
        return 'Draw';
    } else if(OpponentInput == 'PAPER') {
        return(userInput == 'SCISSORS') ? 'You Win' : 'You Lose'
    } else if(OpponentInput == 'ROCK') {
        return(userInput == 'PAPER') ? 'You Win' : 'You Lose'
    } else if(OpponentInput == 'SCISSORS') {
        return(userInput == 'ROCK') ? 'You Win' : 'You Lose'
    }   
}
console.log(whoWins())
