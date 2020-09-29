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
    var oneAnswers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
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
    };

    questions.addEventListener("click", function(event){
        if(event.target.matches("button")) {
            var userAnswer = event.target.getAttribute("data-value");

            if(userAnswer === oneAnswers[2]){
                console.log("Correct!")
                questionTwo();

            }
            else if(userAnswer === oneAnswers[0] || userAnswer === oneAnswers[1] || userAnswer === oneAnswers[3]){
                console.log("Wrong!");
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
                console.log("Correct!");
                questionThree();

            }
            else if(userAnswer === twoAnswers[0] || userAnswer === twoAnswers[1] || userAnswer === twoAnswers[3]){
                console.log("Wrong!");
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
                console.log("Correct!");
                questionFour();

            }
            else if(userAnswer === threeAnswers[0] || userAnswer === threeAnswers[1] || userAnswer === threeAnswers[2]){
                console.log("Wrong!");
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
                console.log("Correct!");
                questionFive();

            }
            else if(userAnswer === fourAnswers[0] || userAnswer === fourAnswers[1] || userAnswer === fourAnswers[3]){
                console.log("Wrong!");
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
                console.log("Correct!");
                finalScreen();

            }
            else if(userAnswer === fiveAnswers[0] || userAnswer === fiveAnswers[1] || userAnswer === fiveAnswers[2]){
                console.log("Wrong!");
                finalScreen()
                ;
            }
        }
    })
}

function finalScreen(){
    questions.innerHTML = "";
    var allDone = document.createElement("h1");
    var finalScore = document.createElement("p");
    // var initials = document.createElement("");

    allDone.textContent = "All Done!";
    // finalScore.textContent = "Your final score is " + timeRemaining + "!";

    questions.append(allDone);
    // questions.append(finalScore);


}