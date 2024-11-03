//rock paper scissors game

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 1) {
        return "rock";
    }
    else if (randomNum == 2) {
        return "scissors";
    }
    else if (randomNum == 0) {
        return "paper";
    }
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper or Scissors (see console for results)").toLowerCase();
}


function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection == computerSelection) {
        console.log(`You've both picked ${humanSelection}, its a draw!`);
        return "draw";
    }
    if (humanSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log(`You've picked ${humanSelection} against ${computerSelection}, you WIN!`);
            return "win";
        }
        else if (computerSelection == "paper") {
            console.log(`You've picked ${humanSelection} against ${computerSelection}, you LOSE!`);
            return "loss";
        }
    }
    if (humanSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log(`You've picked ${humanSelection} against ${computerSelection}, you WIN!`);
            return "win";
        }
        else if (computerSelection == "paper") {
            console.log(`You've picked ${humanSelection} against ${computerSelection}, you LOSE!`);
            return "loss";
        }
    }
    if (humanSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log(`You've picked ${humanSelection} against ${computerSelection}, you WIN!`);
            return "win";
        }
        else if (computerSelection == "rock") {
            console.log(`You've picked ${humanSelection} against ${computerSelection}, you LOSE!`);
            return "loss";
        }
    }
    if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissors") {
        console.log("Invalid input! Try again.");
        return "draw";
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