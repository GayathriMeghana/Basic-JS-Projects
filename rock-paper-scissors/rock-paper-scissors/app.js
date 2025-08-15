// let userScore = 0;
// let comScore = 0;
// const choices = Array.from(document.querySelectorAll(".choice")); // Use querySelectorAll instead of querySelector to select all elements with class "choice"

// const genCompChoice=()=>{
//     //rock paper scisscors
//     const options=["rock","paper","scissors"];
//     //use random fun for random value
//     const randidx=Math.floor(Math.random()*3);
//     return options[randidx]

// }
// const drawGame=()=>{
//     console.log("Game Was Draw")
// }

// const showWinner=(userwin)=>{
//     if(userwin){
//         console.log("you win")
//     }
//     else{
//         console.log("you loss")

//     }
// }

// const playGame=(userchoice)=>{
//     console.log("user choice =",userchoice)
//     //generate computer choice->modular way of programming
//     const compchoice=genCompChoice();
//     console.log("coumpter choice =",compchoice)
//     if(userchoice === compchoice){
//         //draw game
//         drawGame();
//     }
//     else{
//         let userwin=true;
//         if(userchoice == "rock"){
//             //scissors,paper
//             userwin=compchoice === "paper"?false:true;
//         }
//         else if(userchoice === "paper"){
//             userwin=compchoice === "scissors"?false:true;
//         }
//         else{
//             //rock,paper
//            userwin= compchoice === "rock"?false:true
//         }
//         showWinner();
// }

// }

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => { // Corrected typo here
//         const userchoice=choice.getAttribute("id")
//         playGame(userchoice);
//     });
// });



let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});