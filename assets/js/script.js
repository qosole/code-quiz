var startButton = document.getElementById("start-button");
var quizChoices = document.getElementsByClassName("quiz-choices");
var quizQuestion = document.querySelector("h1");
var quizGuide = document.getElementById("guide");
var topLine = document.getElementById("top-line");
var correct = document.getElementById("correct-incorrect");
var timerDisplay = document.getElementById("timer");
var resetButton = document.querySelector(".reset-score");
var backButton = document.querySelector(".back");
var viewButton = document.querySelector(".view-score");

var choicesNumber = 4; // Quiz will be multiple choice with 4 choices
var delay = 1000; // 1 second delay
var score = 0; // User's quiz score
var timer = 60000; // How much time user has to take the quiz in milliseconds
var timeRemaining = 60; // How much time user has to take the quiz in seconds
var quizTimer; // Used to stop the quiz timer

function showHighScores() {
    // Changing page to display high scores (stored in local storage)
    startButton.style.display = "none";  // Hide start button (needed if this page is reached from home page)
    viewButton.style.display = "none"; // Hide view scores button (needed if this page is reached from home page)
    quizQuestion.textContent = "High Scores";
    quizGuide.style.display = "none";
    topLine.style.width = "0%";
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].style.display = "none";
    }

    // Removing form from page (if statement needed to avoid error if page is reached from home page)
    if (document.querySelector("form") != null) {
        document.querySelector("form").style.display = "none";
    }

    // Grabbing from local storage
    var scoreStorage = localStorage.getItem("score");

    // Creating list elements to display high scores
    var scoresList = document.createElement("ul");
    scoresList.className = "high-score-display";
    var scoresDisplay = document.createElement("li");
    scoresDisplay.className = "display";

    scoresDisplay.innerHTML = scoreStorage;

    scoresList.appendChild(scoresDisplay);
    document.body.appendChild(scoresList);

    // Button to reset score
    resetButton.style.display = "block";
    resetButton.addEventListener("click", function() {
        localStorage.clear();
        scoresDisplay.textContent = "";
    });

    // Button to go back to beginning of quiz
    backButton.style.display = "block";
    backButton.addEventListener("click", function(){
        location.reload();
    });
}

function endQuiz() {
    // Removing the result of the last question after delay
    var resultTimer = setTimeout(function() {
        correct.textContent = "";
    }, delay);

    // Stopping the timer
    clearInterval(quizTimer);
    timerDisplay.style.display = "none";

    // Changing page to display results
    quizQuestion.textContent = "FINISH!";
    quizGuide.style.display = "block";
    score += timeRemaining;
    quizGuide.textContent = "Your score: " + score; 
    topLine.style.width = "0%";
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].style.display = "none";
    }

    // Creating a form for user initials
    var initialForm = document.createElement("form");

    var userInitials = document.createElement("input");
    userInitials.setAttribute('type', "text");
    userInitials.setAttribute('name', "initials");
    userInitials.setAttribute('placeholder', "Your Initials");

    var submitBtn = document.createElement("input");
    submitBtn.setAttribute('type', "submit");
    submitBtn.setAttribute('value', "Submit");

    initialForm.appendChild(userInitials);
    initialForm.appendChild(submitBtn);
    document.body.appendChild(initialForm);

    // Storing user initials and score when submit is clicked
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents page from reloading when submit is clicked

        var scoreStorage = localStorage.getItem("score");
        if (scoreStorage == null) {
            scoreStorage = "";
        }

        scoreStorage += userInitials.value;
        scoreStorage += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        scoreStorage += score;
        scoreStorage += "<br>";
        
        localStorage.setItem("score", scoreStorage);

        showHighScores();
    });

    console.log(localStorage.getItem("score"));
}

function fifthQuestion() {
    console.log(score);
    // Removing the result of the last question after delay
    var resultTimer = setTimeout(function() {
        correct.textContent = "";
    }, delay);

    // Changing page to display fifth question
    quizQuestion.textContent = "Which is correct syntax to access the second element in array myArray?";
    quizGuide.style.display = "none";
    topLine.style.width = "70%";
    quizChoices[0].textContent = "myArray[2]";
    quizChoices[1].textContent = "myArray(2)";
    quizChoices[2].textContent = "myArray[1]";
    quizChoices[3].textContent = "myArray(1)";

     // Removing the previous event listeners
     var new0 = quizChoices[0].cloneNode(true);
     quizChoices[0].parentNode.replaceChild(new0, quizChoices[0]);
     var new1 = quizChoices[1].cloneNode(true);
     quizChoices[1].parentNode.replaceChild(new1, quizChoices[1]);
     var new2 = quizChoices[2].cloneNode(true);
     quizChoices[2].parentNode.replaceChild(new2, quizChoices[2]);
     var new3 = quizChoices[3].cloneNode(true);
     quizChoices[3].parentNode.replaceChild(new3, quizChoices[3]);

    // Adding functionality to quiz choices buttons (myArray[1] is correct)
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].addEventListener("click", function clickListener(event) {
            var userChoice = event.target;
            if (userChoice.textContent == "myArray[1]") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
                score += 10;
                clearTimeout(resultTimer); // Need to clear timer so that the first result timer does not bleed into second result timer
                endQuiz(); // Proceeding to end of quiz
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                timeRemaining -= 10; // Subtracting 10 seconds from timer
                clearTimeout(resultTimer);
                endQuiz();
            }
        });
    }
}

function fourthQuestion() {
    console.log(score);
    // Removing the result of the last question after delay
    var resultTimer = setTimeout(function() {
        correct.textContent = "";
    }, delay);

    // Changing page to display fourth question
    quizQuestion.textContent = "Which keyword indicates a loop?";
    quizGuide.style.display = "none";
    topLine.style.width = "38%";
    quizChoices[0].textContent = "for";
    quizChoices[1].textContent = "why";
    quizChoices[2].textContent = "how";
    quizChoices[3].textContent = "which";

     // Removing the previous event listeners
     var new0 = quizChoices[0].cloneNode(true);
     quizChoices[0].parentNode.replaceChild(new0, quizChoices[0]);
     var new1 = quizChoices[1].cloneNode(true);
     quizChoices[1].parentNode.replaceChild(new1, quizChoices[1]);
     var new2 = quizChoices[2].cloneNode(true);
     quizChoices[2].parentNode.replaceChild(new2, quizChoices[2]);
     var new3 = quizChoices[3].cloneNode(true);
     quizChoices[3].parentNode.replaceChild(new3, quizChoices[3]);

    // Adding functionality to quiz choices buttons (for is correct)
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].addEventListener("click", function clickListener(event) {
            var userChoice = event.target;
            if (userChoice.textContent == "for") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
                score += 10;
                clearTimeout(resultTimer); // Need to clear timer so that the first result timer does not bleed into second result timer
                fifthQuestion(); // Proceeding to next question
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                timeRemaining -= 10; // Subtracting 10 seconds from timer
                clearTimeout(resultTimer);
                fifthQuestion();
            }
        });
    }
}

function thirdQuestion() {
    console.log(score);
    // Removing the result of the last question after delay
    var resultTimer = setTimeout(function() {
        correct.textContent = "";
    }, delay);

    // Changing page to display third question
    quizQuestion.textContent = "What file extension does JavaScript use?";
    quizGuide.style.display = "none";
    topLine.style.width = "42%";
    quizChoices[0].textContent = ".scpt";
    quizChoices[1].textContent = ".js";
    quizChoices[2].textContent = ".java";
    quizChoices[3].textContent = ".html";
    
    // Removing the previous event listeners
    var new0 = quizChoices[0].cloneNode(true);
    quizChoices[0].parentNode.replaceChild(new0, quizChoices[0]);
    var new1 = quizChoices[1].cloneNode(true);
    quizChoices[1].parentNode.replaceChild(new1, quizChoices[1]);
    var new2 = quizChoices[2].cloneNode(true);
    quizChoices[2].parentNode.replaceChild(new2, quizChoices[2]);
    var new3 = quizChoices[3].cloneNode(true);
    quizChoices[3].parentNode.replaceChild(new3, quizChoices[3]);

    // Adding functionality to quiz choices buttons (.js is correct)
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].addEventListener("click", function clickListener(event) {
            var userChoice = event.target;
            if (userChoice.textContent == ".js") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
                score += 10;
                clearTimeout(resultTimer); // Need to clear timer so that the first result timer does not bleed into second result timer
                fourthQuestion(); // Proceeding to next question
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                timeRemaining -= 10; // Subtracting 10 seconds from timer
                clearTimeout(resultTimer);
                fourthQuestion();
            }
        });
    }
}

function secondQuestion() {
    console.log(score);
    // Removing the result of the last question after delay
    var resultTimer = setTimeout(function() {
        correct.textContent = "";
    }, delay);

    // Changing page to display second question
    quizQuestion.textContent = "Which is NOT a data type?";
    quizGuide.style.display = "none";
    topLine.style.width = "38%";
    quizChoices[0].textContent = "string";
    quizChoices[1].textContent = "number";
    quizChoices[2].textContent = "array";
    quizChoices[3].textContent = "farley";

    // Removing the previous event listeners
    var new0 = quizChoices[0].cloneNode(true);
    quizChoices[0].parentNode.replaceChild(new0, quizChoices[0]);
    var new1 = quizChoices[1].cloneNode(true);
    quizChoices[1].parentNode.replaceChild(new1, quizChoices[1]);
    var new2 = quizChoices[2].cloneNode(true);
    quizChoices[2].parentNode.replaceChild(new2, quizChoices[2]);
    var new3 = quizChoices[3].cloneNode(true);
    quizChoices[3].parentNode.replaceChild(new3, quizChoices[3]);

    // Adding functionality to quiz choices buttons (farley is correct)
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].addEventListener("click", function clickListener(event) {
            var userChoice = event.target;
            if (userChoice.textContent == "farley") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
                score += 10;
                clearTimeout(resultTimer); // Need to clear timer so that the first result timer does not bleed into second result timer
                thirdQuestion(); // Proceeding to next question
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                timeRemaining -= 10; // Subtracting 10 seconds from timer
                clearTimeout(resultTimer);
                thirdQuestion();
            }
        });
    }
}

function firstQuestion() {
    console.log(score);
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
        quizChoices[i].addEventListener("click", function clickListener(event) {
            var userChoice = event.target;
            if (userChoice.textContent == "var") {
                correct.textContent = "Correct! :D";
                correct.style.color = "green";
                score += 10; 
                secondQuestion(); // Proceeding to next question
            } else {
                correct.textContent = "Incorrect :(";
                correct.style.color = "red";
                timeRemaining -= 10; // Subtracting 10 seconds from timer
                secondQuestion(); 
            }
        });
    }
}

function startTimer() {
    // Setting the timer on screen to the delay in seconds
    timerDisplay.textContent = timeRemaining;

    // Ending the quiz when time reaches 0
    if (timeRemaining <= 0) {
        correct.textContent = "Out of time?!";
        correct.style.color = "cyan";
        endQuiz();
    }
    timeRemaining--;
}

// Hiding "START!" button and revealing quiz choices when user presses "START!" button
function startQuiz() {
    // Reveal quiz choices 
    for (var i = 0; i < choicesNumber; i++) {
        quizChoices[i].style.display = "block";
    }
    viewButton.style.display = "none";  // Hide view scores button
    startButton.style.display = "none";  // Hide start button
    quizTimer = setInterval(startTimer, delay); // Start the timer
    firstQuestion(); // Proceeding to first question
}

startButton.addEventListener("click", startQuiz);

viewButton.style.display = "block";
viewButton.addEventListener("click", showHighScores);