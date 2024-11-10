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

function playGame(choice) {
    const computerChoice = getComputerChoice();
    let playerChoice = choice;
    let pvc = document.querySelector(".pvc");
    let result = document.querySelector(".result");
    
    if (playerChoice == computerChoice) {
        pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
        result.textContent = "It's a Draw."
    }
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
            result.textContent = "You Win! :D";
            playerScore+=1;
        }
        else if (computerChoice == "paper") {
            pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
            result.textContent = "You Lose. :(";
            computerScore+=1;
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
            result.textContent = "You Win! :D";
            playerScore+=1;
        }
        else if (computerChoice == "paper") {
            pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
            result.textContent = "You Lose. :(";
            computerScore+=1;
        }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
            result.textContent = "You Win! :D";
            playerScore+=1;
        }
        else if (computerChoice == "rock") {
            pvc.textContent = `You've picked ${playerChoice} vs ${computerChoice}!`;
            result.textContent = "You Lose. :(";
            computerScore+=1;
        }
    }
}

function updateScore() {
    if (playerScore == 5){
        final.textContent = `The Final score is ${playerScore} vs ${computerScore}. You Win!!! :D`;
        setTimeout(() =>{
            computerScore = 0;
            playerScore = 0;
            updateScore()
        }, 2000)
    }
    else if (computerScore == 5){
        final.textContent = `The Final score is ${playerScore} vs ${computerScore}. You Lose. :(`;
        setTimeout(() =>{
            computerScore = 0;
            playerScore = 0;
            updateScore()
        }, 2000)
    }
    else if (playerScore > computerScore){
        final.textContent = `The score is ${playerScore} vs ${computerScore}. You're in the lead!`;
    }
    else if (computerScore > playerScore){
        final.textContent = `The score is ${playerScore} vs ${computerScore}. The computer is in the lead.`;
    }
    else if (playerScore == computerScore){
        final.textContent = `The score is ${playerScore} vs ${computerScore}.`;
    }
}

let computerScore = 0;
let playerScore = 0;
let final = document.querySelector(".final");

const rockButton = document.querySelector(".rock");
const scissorButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

rockButton.addEventListener("click", () => {
    playGame("rock");
    updateScore();
});
scissorButton.addEventListener("click", () => {
    playGame("scissors")
    updateScore();
});
paperButton.addEventListener("click", () => {
    playGame("paper");
    updateScore();
})

const reset = document.querySelector(".reset")

reset.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    final.textContent = `The score is ${playerScore} vs ${computerScore}`;
})