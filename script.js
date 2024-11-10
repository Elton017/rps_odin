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
    console.log(playerChoice)
}

const rockButton = document.querySelector(".rock");
const scissorButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

rockButton.addEventListener("click", () => playGame("rock"));
scissorButton.addEventListener("click", () => playGame("scissors"));
paperButton.addEventListener("click", () => playGame("paper"))