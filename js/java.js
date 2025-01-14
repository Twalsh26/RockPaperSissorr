const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('Players-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('.card')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener ('click' , (e)=>{
    userChoice = e.target.id  
    userChoiceDisplay.innerHTML = userChoice
    gemerateComputerChoice()
    getResult()
} ))

function gemerateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3 ) + 1
    console.log(randomNumber)

    if (randomNumber == 1 ) {
       computerChoice = 'rock' 
    }
    if (randomNumber == 2 ) {
        computerChoice = 'scissors' 
     }
     if (randomNumber == 3 ) {
        computerChoice = 'paper' 
     }
     computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'Its a draw'
    }
    else if(computerChoice === 'rock' && userChoice === "paper"){
        result = 'You win!'
    }
    else if (computerChoice === 'rock' && userChoice === "scissors"){
        result = 'You lose'
    }
    else if (computerChoice === 'paper' && userChoice === "scissors"){
        result = 'You win!'
    }
    else if (computerChoice === 'paper' && userChoice === "rock"){
        result = 'You lose!'
    }
    else if (computerChoice === 'scissors' && userChoice === "rock"){
        result = 'You win!'
    }
    else if (computerChoice === 'scissors' && userChoice === "paper"){
        result = 'You lose!'
    }
resultDisplay.innerHTML = result
}
    
switch (new Date().)

