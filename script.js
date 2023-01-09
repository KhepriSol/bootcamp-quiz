const form = document.getElementById("Pokemon");


const startButton = document.getElementById("start-button");

function updateTimer(timeLeft) {
  // update the timer display
  const timer = document.getElementById("timer");
  timer.textContent = timeLeft;
}

startButton.addEventListener("click", function() {
  // start quiz and timer
  let timeLeft = 60; // time in seconds
  let timerInterval = setInterval(function() {
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
}

function endQuiz() {
  // end the quiz and show the form for saving the score
}

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Preventing the form from submitting

  // selected options for each question
  const question1 = form.elements.question1;
  const question2 = form.elements.question2;
  // add more pokemon questions etc

  // check if the selected options are correct
  if (question1.value === "A") {
    // correct answer
  } else {
    // incorrect answer
  }
  if (question2.value === "A") {
    // correct answer
  } else {
    // incorrect answer
  }
  // more questions
});


