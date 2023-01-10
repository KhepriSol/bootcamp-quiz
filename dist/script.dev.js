"use strict";

var form = document.getElementById("Pokemon");
var startButton = document.getElementById("start-button");
var questionsContainer = document.getElementById("questions");
var gameOverForm = document.getElementById("game-over");
var timeLeft = 60; // time in seconds

var timerInterval;

function updateTimer(timeLeft) {
  // update the timer display
  var timer = document.getElementById("timer");
  timer.textContent = timeLeft;
}

startButton.addEventListener("click", function () {
  // start quiz and timer
  timerInterval = setInterval(function () {
    timeLeft--;
    updateTimer(timeLeft); // update the timer display

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000); // update timer every second
  // show the first question

  showQuestion(1);
});

function showQuestion(questionNumber) {
  // show the question and options
  currentQuestion = questionNumber;
}

function endQuiz() {
  // end the quiz and show the form for saving the score
  form.style.display = "block";
}

var currentQuestion = 1;
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Preventing the form from submitting
  // selected options for each question

  var question1 = form.elements.question1;
  var question2 = form.elements.question2; // add more pokemon questions etc
  // check if the selected options are correct

  if (question1.value === "A") {
    // correct answer
    showQuestion(2);
  } else {
    // incorrect answer
    timeLeft -= 10;
  }

  if (question2.value === "A") {
    // correct answer
    showQuestion(3);
  } else {
    // incorrect answer
    timeLeft -= 10;
  } // more questions

});
//# sourceMappingURL=script.dev.js.map
