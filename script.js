//rock paper scissors game

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 1) {
        return "rock"
    }
    else if (randomNum == 2) {
        return "scissors"
    }
    else if (randomNum == 0) {
        return "paper"
    }
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper or Scissors").toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()

    if (computerSelection == "rock") {
        if (humanSelection == "scissors") {
            computerScore += 1
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
        }
        else if (humanSelection == "Paper") {
            humanScore += 1
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you win! Your score: ${humanScore}, Computer score: ${computerScore}`)
        }
    }
    else if (computerSelection == "paper") {
        if (humanSelection == "scissors") {
            humanScore += 1
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you win! Your score: ${humanScore}, Computer score: ${computerScore}`)
        }
        else if (humanSelection == "rock") {
            computerScore += 1
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
        }
    }
    else if (computerSelection == "scissors") {
        if (humanSelection == "rock") {
            humanScore += 1
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you win! Your score: ${humanScore}, Computer score: ${computerScore}`)
        }
        else if (humanSelection == "paper") {
            computerScore += 1
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
        }
    }
    else if (computerSelection == humanSelection)
        console.log(`You've both picked ${computerSelection}, it's a draw! Your score: ${humanScore}, Computer score: ${computerScore}`)

}