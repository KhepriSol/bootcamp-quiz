const form = document.getElementById("Pokemon");
const startButton = document.getElementById("start-button");
const questionsContainer = document.getElementById("questions");
const gameOverForm = document.getElementById("game-over");

let timer;
let timerInterval;
let questions = [
  {
    text: "How many Evolutions does Eevee have?",
    choices: ["three", "five", "eight"],
    correctChoice: "eight",
  },
  {
    text: "who was pokemons original mascot",
    choices: ["pichu", "claifary", "charmander"],
    correctChoice: "claifary",
  },
  //gonna add more questions
];
let currentQuestionIndex;

startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);

function startGame() {
  timer = 60;
  currentQuestionIndex = 0;

    // Start timer and display first question
    startTimer();
    displayQuestion();
  }

  function startTimer() {
    // Update timer every second
    timerInterval = setInterval(() => {
      timer--;
      timerValue.textContent = timer;
  
      // End game when or if the timer reaches 0
      if (timer <= 0) {
        endGame();
      }
    }, 1000);
  }
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
  
    // Clear any existing content in the questions container
    questionsContainer.innerHTML = "";
  
    // Add the question text
    const questionElement = document.createElement("p");
    questionElement.textContent = question.text;
    questionsContainer.appendChild(questionElement);
  
    // Add the answer choices
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", selectAnswer);
      questionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(event) {
    const selectedChoice = event.target.textContent;
    const correct = questions[currentQuestionIndex].correctChoice === selectedChoice;
  }