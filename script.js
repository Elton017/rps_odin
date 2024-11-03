//rock paper scissors game

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 1) {
        return "Rock"
    }
    else if (randomNum == 2) {
        return "Scissors"
    }
    else if (randomNum == 0) {
        return "Paper"
    }
}

let userChoice = prompt("Enter 1 for Rock, 2 for Paper or 3 for Scissors")

