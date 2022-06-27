var startButton = document.getElementById("start-button");
var quizChoices = document.getElementsByClassName("quiz-choices");

function startQuiz() {
    for (var i = 0; i < 4; i++) {
        quizChoices[i].style.display = "block";
    }
}

startButton.addEventListener("click", startQuiz);