console.log("Hello world.");

var quizLanding = document.getElementById("quiz-landing");
var startButton = document.getElementById("start-quiz");

startButton.addEventListener("click", function(){
    quizLanding.style.display = "none";
    console.log("hello?")
})

/**
 * On start click, hide landing page and create next question
 * 
 */