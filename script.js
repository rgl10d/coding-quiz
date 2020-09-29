console.log("Hello world.");

var quizLanding = document.getElementById("quiz-landing");
var startButton = document.getElementById("start-quiz");
var questions = document.getElementById("questions");


startButton.addEventListener("click", function(){
    quizLanding.style.display = "none";
    questionOne();
})


// function timer(){

// }

function questionOne(){
    var oneAnswers = ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"];
    var firstQuestion = document.createElement("h1");

    firstQuestion.textContent = "Commonly used data types DO NOT include: ";
    questions.append(firstQuestion);

    for(var i = 0; i < oneAnswers.length; i++){
       var buttons = document.createElement("button");
       var lineBreak = document.createElement("br");
        buttons.textContent = oneAnswers[i];
        buttons.setAttribute("class", "btn btn-primary");
        buttons.setAttribute("data-value", oneAnswers[i]);
        buttons.style.marginTop = "10px";
        questions.append(buttons);
        questions.append(lineBreak);
    }
}