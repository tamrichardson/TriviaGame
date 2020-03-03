var question = [
    {   //1
        prompt: "What is the name of the man Rachel almost marries?",
        answers: {
            a: "Alan",
            b: "Chris",
            c: "Billy",
            d: "Barry"
        },
        correctAnswer: "d"
    },
    {   //2
        prompt: "What is Ross' first wife's name?",
        answers: {
            a: "Emily",
            b: "Susan",
            c: "Carol",
            d: "Heather"
        },
        correctAnswer: "c"
    },
    {   //3
        prompt: "Which soap opera is Joey on?",
        answers: {
            a: "Days of Our Lives",
            b: "All My Children",
            c: "General Hospital",
            d: "As the World Turns"
        },
        correctAnswer: "a"
    },
    {   //4
        prompt: "What is the name of Ross and Rachel's daughter?",
        answers: {
            a: "Julie",
            b: "Emma",
            c: "Katie",
            d: "Sarah"
        },
        correctAnswer: "b"
    },
    {   //5
        prompt: "What is the name of the Central Perk employee who's in love with Rachel?",
        answers: {
            a: "George",
            b: "Gunther",
            c: "Gary",
            d: "Geoffry"
        },
        correctAnswer: "b"
    },
    {   //6
        prompt: "how many sisters does Joey have?",
        answers: {
            a: "Seven",
            b: "Five",
            c: "Six",
            d: "Eight"
        },
        correctAnswer: "a"
    },
    {   //7
        prompt: "What doe Phoebe do for a living?",
        answers: {
            a: "Chef",
            b: "Teacher",
            c: "Massuuse",
            d: "Nurse"
        },
        correctAnswer: "c"
    },
    {   //8
        prompt: "Where does Rachel almost move to at the end of the series?",
        answers: {
            a: "Milan",
            b: "London",
            c: "Rome",
            d: "Paris"
        },
        correctAnswer: "d"
    },
    {   //9
        prompt: "What do they call the neighbor across the street?",
        answers: {
            a: "The Nudist",
            b: "Ugly Naked Guy",
            c: "Naked Guy",
            d: "Ugly Guy"
        },
        correctAnswer: "b"
    },
    {   //10
        prompt: "Where does Chandler transfer to for his job?",
        answers: {
            a: "Tulsa",
            b: "Topeka",
            c: "Des Moines",
            d: "Boise"
        },
        correctAnswer: "a"
    },
    {   //11
        prompt: "Who finds out about Monica and Chandler first?",
        answers: {
            a: "Pheobe",
            b: "Ross",
            c: "Joey",
            d: "Rachel"
        },
        correctAnswer: "c"
    },
    {   //12
        prompt: "What is the name of the eye doctor Monica dates?",
        answers: {
            a: "Ben",
            b: "William",
            c: "Richard",
            d: "Robert"
        },
        correctAnswer: "c"
    }
];

var correctAnswers = 0;
var incorrectAnswers = 0;
//assigns question to html id
var questionElement = $("#question")
//assigns answers to html button id
var answerElement = $("#choice-buttons")

//start the game
var startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startQuiz)
//when a selection is made
var userChoice = document.getElementById("#choice-buttons")
userChoice.addEventListener("click", selection)


var questionContainer = document.getElementById
    ("question-container")

function startQuiz() {
    //loop through questions array
    for (var i = 0; i < question.length; i++) {
        //displays question in question div on card
        $("#question").text(question[i].prompt);
        //this will display the answer choices on buttons
        $(".btnA").html(question[i].answers.a)
        $(".btnB").html(question[i].answers.b)
        $(".btnC").html(question[i].answers.c)
        $(".btnD").html(question[i].answers.d)
        reset()
    }

}
function selection() {
    //if the button clicked = the correct answer generate new question and update correct answer tally
    //$(".btn").click(function () {
    //console.log("You clicked on: " + $(this).val());
    //console.log("The correct answer was: " + question[i].correctAnswer);
    if (userChoice == question[i].correctAnswer) {
        rightAnswer();
        question[i]++
        //if the button clicked = any other answer generate new question and update wrong answer tally  
    } else {
        wrongAnswer()
        question[i]++
    }
}


//if answered correctly
function rightAnswer() {
    if (selected === correctAnswer) {
        alert("correct")
        $("#correct").text(correctAnswers);
        reset()
        correctAnswers++;
    }
    //if answred incorrectly
    function wrongAnswer() {
        if (selected == answer) {
            alert("incorrect")
            $("#incorrect").text(incorrectAnswers);
            reset()
            incorrectAnswers++;
        }


        //timer
        var counter = 30

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
                //reset()
                clearInterval(myTimer)
            }
        }, 1000);

        function reset() {
            //calling myTimer to reset the interval and the counter
            myTimer
            counter = 30

        }
    }


}




