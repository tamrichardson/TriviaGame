var questionsAnswers = [
    {   //1
        question: "What is the name of the man Rachel almost marries?",
        answers: {
            a: "Alan",
            b: "Chris",
            c: "Billy",
            d: "Barry"
        },
        correctAnswer: "d"
    },
    {   //2
        question: "What is Ross' first wife's name?",
        answers: {
            a: "Emily",
            b: "Susan",
            c: "Carol",
            d: "Heather"
        },
        correctAnswer: "c"
    },
    {   //3
        question: "Which soap opera is Joey on?",
        answers: {
            a: "Days of Our Lives",
            b: "All My Children",
            c: "General Hospital",
            d: "As the World Turns"
        },
        correctAnswer: "a"
    },
    {   //4
        question: "What is the name of Ross and Rachel's daughter?",
        answers: {
            a: "Julie",
            b: "Emma",
            c: "Katie",
            d: "Sarah"
        },
        correctAnswer: "b"
    },
    {   //5
        question: "What is the name of the Central Perk employee who's in love with Rachel?",
        answers: {
            a: "George",
            b: "Gunther",
            c: "Gary",
            d: "Geoffry"
        },
        correctAnswer: "b"
    },
    {   //6
        question: "how many sisters does Joey have?",
        answers: {
            a: "Seven",
            b: "Five",
            c: "Six",
            d: "Eight"
        },
        correctAnswer: "a"
    },
    {   //7
        question: "What doe Phoebe do for a living?",
        answers: {
            a: "Chef",
            b: "Teacher",
            c: "Massuuse",
            d: "Nurse"
        },
        correctAnswer: "c"
    },
    {   //8
        question: "Where does Rachel almost move to at the end of the series?",
        answers: {
            a: "Milan",
            b: "London",
            c: "Rome",
            d: "Paris"
        },
        correctAnswer: "d"
    },
    {   //9
        question: "What do they call the neighbor across the street?",
        answers: {
            a: "The Nudist",
            b: "Ugly Naked Guy",
            c: "Naked Guy",
            d: "Ugly Guy"
        },
        correctAnswer: "b"
    },
    {   //10
        question: "Where does Chandler transfer to for his job?",
        answers: {
            a: "Tulsa",
            b: "Topeka",
            c: "Des Moines",
            d: "Boise"
        },
        correctAnswer: "a"
    },
    {   //11
        question: "Who finds out about Monica and Chandler first?",
        answers: {
            a: "Pheobe",
            b: "Ross",
            c: "Joey",
            d: "Rachel"
        },
        correctAnswer: "c"
    },
    {   //12
        question: "What is the name of the eye doctor Monica dates?",
        answers: {
            a: "Ben",
            b: "William",
            c: "Richard",
            d: "Robert"
        },
        correctAnswer: "c"
    }
];

//timer
var counter = 30

var myTimer = setInterval(function () {

    //we want to count down from 10 to 0 each second 
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
