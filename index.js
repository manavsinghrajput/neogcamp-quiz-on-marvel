var readlineSync = require("readline-sync");

var score = 0;

var arr = [
    {
        question: "what is name of Thor's hammer? ",
        answer: "Mjolnir"
    },
    {
        question: "who played the role of Dr. Strange? ",
        answer: "Benedict Cumberbatch"
    },
    {
        question: "what is the name of iron man suit, which he wears in 'infinity war'? ",
        answer: "mark fifty"
    },
    {
        question: "what is full name of Thor? ",
        answer: "Thor Odinson"
    },
    {
        question: "what is name of Nat - black widow? ",
        answer: "Natalia Alianova"
    }
];

var highScore = [
    {
        name: "manav",
        score: 1,
    },
    {
        name: "vikash",
        score: 2,
    }
]

function welcome() {
    var userName = readlineSync.question("please enter your name: ");
    console.log("welcome", userName, ", to manav's - DO YOU KNOW ME?");
    console.log("------------------");
}

function play() {
    for (var i = 0; i < arr.length; i++) {
        quiz(arr[i].question, arr[i].answer)
    }
}

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("yaay! you're right.");
        score += 1;
    }
    else {
        console.log("Oops! you missed");
    }
    console.log("current score:", score);
    console.log("--------------");
}

function showScore() {
    console.log("yaay! you scored:", score);
    console.log("-----------------");
    for (var j = 0; j < highScore.length; j++) {
        console.log("High Scores:", highScore[j].name, "scored", highScore[j].score);
    }
    console.log("------------");
    if (score > highScore[1].score) {
        console.log("Yaaay! you scored a high score, send me the screen shot and I will update it here.");
    }
}