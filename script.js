// Variables

var quizLanding = document.getElementById("quiz-landing");
var startButton = document.getElementById("start-quiz");
var questions = document.getElementById("questions");
var startOver = document.getElementById("start-over");
var correct = document.getElementById("correct");
var timeRemaining = 75;
var interval;


// Function definitions

function startTime(){
    interval = setInterval(function(){
        timeRemaining--;
        if(timeRemaining <= 0){
            timeRemaining = 0;
            finalScreen();
        }
        document.getElementById("timeEl").textContent = "Time: " + timeRemaining;
    }, 1000)
}

startButton.addEventListener("click", function(){
    quizLanding.style.display = "none";
    questionOne();
    startTime();
})

function correctAnswer(){
    correct.style.display = "block";
}

function questionOne(){
    var oneAnswers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];

    // Question Display
    var firstQuestion = document.createElement("h1");
    firstQuestion.textContent = "Commonly used data types DO NOT include: ";
    questions.append(firstQuestion);

    // Button Display 
    for(var i = 0; i < oneAnswers.length; i++){
       var buttons = document.createElement("button");
       var lineBreak = document.createElement("br");

        buttons.textContent = oneAnswers[i];
        buttons.setAttribute("class", "btn btn-primary");
        buttons.setAttribute("data-value", oneAnswers[i]);
        buttons.style.marginTop = "10px";

        questions.append(buttons);
        questions.append(lineBreak);
    };

    // Correct or Incorrect event listener
    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userAnswer = event.target.getAttribute("data-value");

            if(userAnswer === oneAnswers[2]){
                questionTwo();
            }
            else if(userAnswer === oneAnswers[0] || userAnswer === oneAnswers[1] || userAnswer === oneAnswers[3]){
                timeRemaining = timeRemaining - 15;
                questionTwo();
            }
        
        }
    })
}

function questionTwo(){
    questions.innerHTML = "";
    var twoAnswers = ["1. quotes", "2. curly Brackets", "3. parentheses", "4. square Brackets"];
    var secondQuestion = document.createElement("h1");

    secondQuestion.textContent = "The condition in an if/else statement is enclosed within _____.";
    questions.append(secondQuestion);

    for(var i = 0; i < twoAnswers.length; i++){
       var buttons = document.createElement("button");
       var lineBreak = document.createElement("br");

        buttons.textContent = twoAnswers[i];
        buttons.setAttribute("class", "btn btn-primary");
        buttons.setAttribute("data-value", twoAnswers[i]);
        buttons.style.marginTop = "10px";

        questions.append(buttons);
        questions.append(lineBreak);
    };

    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userAnswer = event.target.getAttribute("data-value");

            if(userAnswer === twoAnswers[2]){
                questionThree();

            }
            else if(userAnswer === twoAnswers[0] || userAnswer === twoAnswers[1] || userAnswer === twoAnswers[3]){
                timeRemaining = timeRemaining - 15;
                questionThree();
            }
        }
    })
}

function questionThree(){
    questions.innerHTML = "";
    var threeAnswers = ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"];
    var thirdQuestion = document.createElement("h1");

    thirdQuestion.textContent = "Arrays in JavaScript can be used to store _____.";
    questions.append(thirdQuestion);

    for(var i = 0; i < threeAnswers.length; i++){
       var buttons = document.createElement("button");
       var lineBreak = document.createElement("br");

        buttons.textContent = threeAnswers[i];
        buttons.setAttribute("class", "btn btn-primary");
        buttons.setAttribute("data-value", threeAnswers[i]);
        buttons.style.marginTop = "10px";

        questions.append(buttons);
        questions.append(lineBreak);
    };

    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userAnswer = event.target.getAttribute("data-value");

            if(userAnswer === threeAnswers[3]){
                questionFour();

            }
            else if(userAnswer === threeAnswers[0] || userAnswer === threeAnswers[1] || userAnswer === threeAnswers[2]){
                timeRemaining = timeRemaining - 15;
                questionFour();
            }
        }
    })
}

function questionFour(){
    questions.innerHTML = "";
    var fourAnswers = ["1. commas", "2. curly braces", "3. quotes", "4. parantheses"];
    var fourthQuestion = document.createElement("h1");

    fourthQuestion.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    questions.append(fourthQuestion);

    for(var i = 0; i < fourAnswers.length; i++){
       var buttons = document.createElement("button");
       var lineBreak = document.createElement("br");

        buttons.textContent = fourAnswers[i];
        buttons.setAttribute("class", "btn btn-primary");
        buttons.setAttribute("data-value", fourAnswers[i]);
        buttons.style.marginTop = "10px";

        questions.append(buttons);
        questions.append(lineBreak);
    };

    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userAnswer = event.target.getAttribute("data-value");

            if(userAnswer === fourAnswers[2]){
                questionFive();

            }
            else if(userAnswer === fourAnswers[0] || userAnswer === fourAnswers[1] || userAnswer === fourAnswers[3]){

                timeRemaining = timeRemaining - 15;
                questionFive();
            }
        }
    })
}

function questionFive(){
    questions.innerHTML = "";
    var fiveAnswers = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
    var fifthQuestion = document.createElement("h1");

    fifthQuestion.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    questions.append(fifthQuestion);

    for(var i = 0; i < fiveAnswers.length; i++){
       var buttons = document.createElement("button");
       var lineBreak = document.createElement("br");

        buttons.textContent = fiveAnswers[i];
        buttons.setAttribute("class", "btn btn-primary");
        buttons.setAttribute("data-value", fiveAnswers[i]);
        buttons.style.marginTop = "10px";

        questions.append(buttons);
        questions.append(lineBreak);
    };

    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userAnswer = event.target.getAttribute("data-value");

            if(userAnswer === fiveAnswers[3]){
                finalScreen();

            }
            else if(userAnswer === fiveAnswers[0] || userAnswer === fiveAnswers[1] || userAnswer === fiveAnswers[2]){
                timeRemaining = timeRemaining - 15;
                finalScreen()
                ;
            }
        }
    })
}

function finalScreen(){
    var allDone = document.createElement("h1");
    var finalScore = document.createElement("p");
    var initials = document.createElement("input");
    var submitButton = document.createElement("button");
    var highScoreTable = document.getElementById("highscore");

    clearInterval(interval);

    if(timeRemaining <= 0){
        timeRemaining = 0;
    };

    questions.innerHTML = "";
    // clearInterval(interval);
    allDone.textContent = "All Done!";
    finalScore.textContent = "Your final score is " + timeRemaining + "!";
    initials.setAttribute("class", "form-control");
    initials.setAttribute("type", "text");
    submitButton.setAttribute("class", "btn btn-primary");
    submitButton.setAttribute("id", "submit");
    submitButton.textContent = "Submit";

    questions.append(allDone);
    questions.append(finalScore);
    questions.append(initials);
    questions.append(submitButton);

    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userInitials = document.getElementById('submit').value;
            location.href = "highscores.html";
            highScoreTable.textContent = userInitials;
        } 
    })
}

