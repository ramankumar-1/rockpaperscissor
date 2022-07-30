const computerChoiceDisplay = document.getElementById('cc')
const playerChoiceDisplay = document.getElementById('pc')
const resultDisplay = document.getElementById('res')
var playerChoice,computerChoice,result

const possibleChoices=document.querySelectorAll('button')

possibleChoices.forEach(choice=>choice.addEventListener('click',(e)=>{
    playerChoice=e.target.id
    playerChoiceDisplay.innerHTML=playerChoice
    generateComputerChoice()
    checkResults()
}))

function generateComputerChoice() {
    const choices=["Rock","Paper","Scissors"]
    const randomNum=Math.floor(Math.random()*3);
    computerChoice=choices[randomNum]
    computerChoiceDisplay.innerHTML=computerChoice
}

function checkResults(){
    userWinSituations={
        "Rock" : "Scissors",
        "Scissors" : "Paper",
        "Paper" : "Rock"
    }
    if(computerChoice===playerChoice){
        result="    It's a Draw"
    }
    else{
        if(userWinSituations[playerChoice]===computerChoice){
            result="    You Won !!!"
        }
        else{
            result="    You Lose"
        }
    }
    resultDisplay.innerHTML=result
}
