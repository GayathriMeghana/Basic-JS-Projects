var pname = prompt("enter your name");

document.querySelector(".h1text").textContent = pname + " !! Guess the Number";

const secNum = Number(Math.trunc(Math.random() * 25) + 1); // 1 - 25  //string-number
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered..";
  } else if (guess === secNum) {
    document.querySelector(".message").textContent = "correct number..";
    document.querySelector(".number").textContent = secNum;
    // document.querySelector(".body").classList.add("modal");
    // document.querySelector(".modal").textContent =
    //   pname + "!!" + "won the game";
    document.querySelector(".h1text").textContent =
      pname + "!!" + "Won the Game";
    document.querySelector(".number").style.width = "8rem";
    thread.sleep(1000)
     window.open("project2.html");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high..";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".body").classList.add("lose");
      document.querySelector(".h1text").textContent =
        pname + "!!" + "lost the game";
      document.querySelector(".number").textContent = secNum;
    }
  } else if (guess < secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low..";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".body").classList.add("lose");
      document.querySelector(".h1text").textContent =
        pname + "!!" + "lost the game";
      document.querySelector(".number").textContent = secNum;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "Enter..";
  document.querySelector(".number").style.width = "5rem";
  secNum = Number(Math.trunc(Math.random() * 25) + 1);
});