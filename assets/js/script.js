var startButton = document.getElementById("start-button");
var quizChoices = document.getElementsByClassName("quiz-choices");

// Changing the page when user presses "START!" button
function startQuiz() {
    for (var i = 0; i < 4; i++) {
        quizChoices[i].style.display = "block";
    }
}

startButton.addEventListener("click", startQuiz);