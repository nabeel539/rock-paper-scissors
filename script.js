let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");
const msg      = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generate random Choices
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}



const drawGame = () => {
    //console.log("Game was draw.");
    msg.textContent = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //console.log("You win");
        userScore++;
        userScorePara.textContent = userScore;
        msg.textContent = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";

    } else {
        //console.log("You lose");
        compScore++;
        compScorePara.textContent = compScore;
        msg.textContent = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    // console.log("User choice = ", userChoice);

    // Generate Computer Choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice);

    if (userChoice === compChoice) {
        // Draw
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice)
    }
}


choices.forEach((choice)=>{
    choice.addEventListener('click', () => {
        // console.log("Choices was clicked...");
       const userChoice = choice.getAttribute("id");
        // console.log("choices is", choiceId);
        playGame(userChoice)

    })
})