// Wait for the DOM to finish loading before running the game
// Caching the DOM
// CODE CREDIT: Game idea based on: Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game by whatsdev -  https://www.freecodecamp.org - https://www.youtube.com/watch?v=jaVNP3nIAv0&t=2010s
let yourScore = 0;
let computerScore = 0;
const yourScore_span = document.getElementById("your-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Main game functions - user choice and winner calculation
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  yourScore++;
  yourScore_span.innerHTML = yourScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(computer). You win!"`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  yourScore_span.innerHTML = yourScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(computer). You lost!"`;

}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToWord(userChoice)}(user) equals ${convertToWord(computerChoice)}(computer). It´s a draw!"`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })

  paper_div.addEventListener('click', function () {
    game("p");
  })

  scissors_div.addEventListener('click', function () {
    game("s");
  })
}

main();