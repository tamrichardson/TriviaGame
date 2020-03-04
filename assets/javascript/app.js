
function startGame() {
    document.getElementById("trivia").style.visibility = "visible";
    document.getElementById("time").style.visibility = "visible";
    myTimer
    reset()
}

function checkAnswers() {
    var correct = 0;

    //if correct answer is selected add 1 to correct answers
    if (document.getElementById("inlineRadio4").checked) {
        correct++;
        console.log("Barry");
    }
    if (document.getElementById("inlineRadio7").checked) {
        correct++;
        console.log("Carol");
    }
    if (document.getElementById("inlineRadio10").checked) {
        correct++;
        console.log("Days of Our Lives");
    }

    if (document.getElementById("inlineRadio14").checked) {
        correct++;
        console.log("Emma");

    }
    if (document.getElementById("inlineRadio18").checked) {
        correct++;
        console.log("Gunther");
    }
    if (document.getElementById("inlineRadio21").checked) {
        correct++;
        console.log("Seven");
    }
    if (document.getElementById("inlineRadio27").checked) {
        correct++;
        console.log("Masseuse");
    }
    if (document.getElementById("inlineRadio32").checked) {
        correct++;
        console.log("Paris");
    }

    if (document.getElementById("inlineRadio34").checked) {
        correct++;
        console.log("Ugly Naked Guy");
    }

    if (document.getElementById("inlineRadio38").checked) {
        correct++;
        console.log("Alcohol");
    }
    document.getElementById("after-submit").style.visibility = "visible";
    document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
    endGame()
    reset()

}
function endGame() {
    clearInterval(myTimer)
    $("#trivia").hide();
}

function playAgain() {
    startGame()
}
//timer
var counter = 45

var myTimer = setInterval(function () {
    //we want to count down from 30 to 0 each second 
    //use counter variable which decrements every second used to update the html
    counter--
    console.log(counter)
    //use jQuery to update HTML
    //grab location from HTML and the use .text to diplay counter variable
    $("#time").text(counter)
    //to get the interval to start over again
    if (counter == 0) {
        reset()
        clearInterval(myTimer)
        $("#time").text("Time is up!")
        $("#trivia").hide();
    }
}, 1000);

function reset() {
    //calling myTimer to reset the interval and the counter
    myTimer
    counter = 45

}








