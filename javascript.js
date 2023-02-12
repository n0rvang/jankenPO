


function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomSelection = options[randomIndex];
    return randomSelection
}

let myScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    // rock beats scissors
    // scissors beat paper
    // paper beats rock

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const computerSelectionString =`Computer selection: ${computerSelection}`;
    const playerSelectionString = `Player selection: ${playerSelection}`;
    const resultBaseString = computerSelectionString + 
    "\n" + playerSelectionString;

    
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return resultBaseString + "\nResult: DRAW!"
        }
        if (computerSelection === "paper") {
            computerScore++;
             return resultBaseString
              + "\nResult: LOSE!"
            
        }
        if (computerSelection === "scissors") {
            myScore++;
             return resultBaseString
              + "\nResult: WIN!"
            
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            myScore++;
             return resultBaseString
              + "\nResult: WIN!"
            
        }
        if (computerSelection === "paper") {
             return resultBaseString + "\nResult: DRAW!"
            
        }
        if (computerSelection === "scissors") {
            computerScore++;
             return resultBaseString + "\nResult: LOSE!"
            
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
             return resultBaseString + "\nResult: LOSE!"
            
        }
        if (computerSelection === "paper") {
            myScore++;
             return resultBaseString
              + "\nResult: WIN!"
            
        }
        if (computerSelection === "scissors") {
            return resultBaseString + "\nResult: DRAW!"
            
        }
    }
    return "Error. Something went wrong";

}




function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
   // alert(result)
    document.getElementById("result").innerText = result;
    document.getElementById("myScore").innerText = myScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function resetGame(){
    console.log("before restet myScore: ", myScore)
    console.log("before restet computerScore: ", computerScore)
    if (myScore !== 0 || computerScore !== 0) {
        myScore = 0;
        computerScore = 0;
        document.getElementById("myScore").innerText = myScore; // the element with ID "myScore" 
        document.getElementById("computerScore").innerText = computerScore;
    }
    console.log("after restet myScore: ", myScore)
    console.log("after restet computerScore: ", computerScore)
}