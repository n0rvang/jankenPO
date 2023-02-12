


function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomSelection = options[randomIndex];
    return randomSelection
}

    const winnerString = "You win!";
    const loserString = "You a bitch boy!";
    const drawString = "It's a draw!";

function playRound(playerSelection, computerSelection) {
    // rock beats scissors
    // scissors beat paper
    // paper beats rock
    console.log("playerSelection =", playerSelection)
    console.log("computerSelection =", computerSelection)

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let resultString ="No result";

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return drawString;
        }
        if (computerSelection === "paper") {
            return loserString;
        }
        if (computerSelection === "scissors") {
            return winnerString;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return winnerString;
        }
        if (computerSelection === "paper") {
            return drawString;
        }
        if (computerSelection === "scissors") {
            return loserString;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return loserString;
        }
        if (computerSelection === "paper") {
            return winnerString;
        }
        if (computerSelection === "scissors") {
            return drawString;
        }
    }

    

    return resultString;

}



function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log("RESULT FROM GAME: ", result);
    
    
}