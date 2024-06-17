const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("scoreDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreValue = 0;
let computerScoreValue = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
  }
  
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result="";
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "sissors") ? "You win!" : "You lose!";
                break;
        
        case "paper":
            result = (computerChoice === "rock") ? "You win!" : "You lose!";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "You win!" : "You lose!";
            break;
        }
    }
    document.getElementById("playerDisplay").textContent= `Player: ${playerChoice}`;
    document.getElementById("computerDisplay").textContent= `Computer: ${computerChoice}`;
    document.getElementById("result").textContent= result;
    
    switch (result) {
        case "You win!":
            document.getElementById("result").classList.add("greentext");
            document.getElementById("result").classList.remove("redtext");
            playerScoreValue++;
            playerScore.textContent = playerScoreValue;
            break;
        case "You lose!":
            document.getElementById("result").classList.add("redtext");
            document.getElementById("result").classList.remove("greentext");
            computerScoreValue++;
            computerScore.textContent = computerScoreValue;
            break;
        case "It's a draw!":
            document.getElementById("result").classList.remove("greentext", "redtext");
            break;
    }
    
}

