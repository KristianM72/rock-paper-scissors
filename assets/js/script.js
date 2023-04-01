// Wait for the DOM to finish loading before running the game

// CODE CREDIT: Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game by whatsdev -  https://www.freecodecamp.org - https://www.youtube.com/watch?v=jaVNP3nIAv0&t=2010s
const yourScore = 0;
const computerScore = 0;
const yourScore_span = document.getElementById("your-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");