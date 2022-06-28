var startButton = document.getElementById("start-button");
var quizChoices = document.getElementsByClassName("quiz-choices");
var quizQuestion = document.querySelector("h1");
var quizGuide = document.getElementById("guide");
var topLine = document.getElementById("top-line");
var correct = document.getElementById("correct-incorrect");

var choicesNumber = 4; // Quiz will be multiple choice with 4 choices
var delay = 1000; // 1 second delay

function secondQuestion() {
    // Removing the result of the last question after delay (1 second)
    var resultTimer = setTimeout(function() {
        correct.textContent = "";
    }, delay);

    // Changing page to display second question
    quizQuestion.textContent = "Which is NOT a data type?";
    quizGuide.style.display = "none";
    topLine.style.width = "70%";
    quizChoices[0].textContent = "string";
    quizChoices[1].textContent = "number";
    quizChoices[2].textContent = "array";
    quizChoices[3].textContent = "farley";

    // Adding functionality to quiz choices buttons (farley is correct)
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].addEventListener("click", function(event) {
            var userChoice = event.target;
            if (userChoice.textContent == "farley") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
                clearTimeout(resultTimer); // Need to clear timer so that the first result timer does not bleed into second result timer
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                clearTimeout(resultTimer);
            }
        });
    }
}

function firstQuestion() {
    // Changing page to display first question
    quizQuestion.textContent = "What keyword would you use to initialize a variable with a value of 55.2?";
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
                secondQuestion(); // Proceeding to next question
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                secondQuestion(); 
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
    firstQuestion(); // Proceeding to first question
}

startButton.addEventListener("click", startQuiz);