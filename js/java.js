const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('Players-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('.card')
let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener ('click' , (e)=>{
    userChoice = e.target.id  
    userChoiceDisplay.innerHTML = userChoice
} ))
