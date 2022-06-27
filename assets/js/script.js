var startButton = document.getElementById("start-button");
var quizChoices = document.getElementsByClassName("quiz-choices");
var quizQuestion = document.querySelector("h1");
var quizGuide = document.getElementById("guide");
var topLine = document.getElementById("top-line");
var correct = document.getElementById("correct-incorrect");

var choicesNumber = 4; // Quiz will be multiple choice with 4 choices

function firstQuestion() {
    // Changing page to display first question
    quizQuestion.textContent = "What keyword do you use to initialize a variable with a value of 55.2?";
    quizGuide.style.display = "none";
    topLine.style.width = "70%";
    quizChoices[0].textContent = "string";
    quizChoices[1].textContent = "double";
    quizChoices[2].textContent = "float";
    quizChoices[3].textContent = "var";

    // Adding functionality to quiz choices buttons (var is correct)
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].addEventListener("click", function(event) {
            var userChoice = event.target;
            if (userChoice.textContent == "var") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
            }
        });
    }
}

// Hiding "START!" button and revealing quiz choices when user presses "START!" button
function startQuiz() {
    // Reveal quiz choices 
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].style.display = "block";
    }
    startButton.style.display = "none";  // Hide start button
    firstQuestion(); // Proceeding to the first question
}

startButton.addEventListener("click", startQuiz);