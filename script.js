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


function playRound(humanScore, computerScore) {
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()

    if (computerSelection == "rock") {
        if (humanSelection == "scissors") {
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
            return "loss"
        }
        else if (humanSelection == "Paper") {
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you win! Your score: ${humanScore}, Computer score: ${computerScore}`)
            return "win"
        }
    }
    else if (computerSelection == "paper") {
        if (humanSelection == "scissors") {
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you win! Your score: ${humanScore}, Computer score: ${computerScore}`)
            return "win"
        }
        else if (humanSelection == "rock") {
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
            return "loss"
        }
    }
    else if (computerSelection == "scissors") {
        if (humanSelection == "rock") {
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you win! Your score: ${humanScore}, Computer score: ${computerScore}`)
            return "win"
        }
        else if (humanSelection == "paper") {
            console.log(`You picked ${humanSelection} vs ${computerSelection}, you lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
            return "loss"
        }
    }
    else if (computerSelection == humanSelection) {
        console.log(`You've both picked ${computerSelection}, it's a draw!`)
        return "draw"
    }
    else {
        console.log("Invalid choice, please try again (Rock, Paper or Scissors)")
        return "draw"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result == "win") {
            humanScore += 1
        }
        else if (result == "loss") {
            computerScore += 1
        }
        else if (result == "draw") {
            i -= 1
        }
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
    }
    if (humanScore > computerScore){
        console.log(`You win with a score of ${humanScore} to ${computerScore}`)
    }
    else {
        console.log(`You lose with a score of ${humanScore} to ${computerScore}`)
    }
}

playGame()