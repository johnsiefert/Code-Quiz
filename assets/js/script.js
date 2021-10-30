let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "braces", "parentheses", "brackets"],
        answer: "parentheses"
    },
    {
        title: "What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
        choices: ["<head></head>", "<body></body>", "<title></title>", "<br>"],
        answer: "<body></body>"
    },
    {
        title: "What tag is used to define a hyperlink, or link to another page?",
        choices: ["<strong>", "<blockquote>", "<em>", "<a>"],
        answer: "<a>"
    },
    {
        title: "CSS stands for ____ Style Sheets.",
        choices: ["Curious", "Concept", "Cascading", "Concave"],
        answer: "Cascading"
    }
];

let totalTime = 59;
let start =  document.querySelector("#StartQuiz");
let count = 0;
let totalPoints = 0;
let scoreH1 = document.querySelector("#score");
let lastQ = false;
let submitBtn = document.querySelector("#submit");
let highscore;
let highscoreBtn = document.querySelector("#highscores");
let scoreDiv = document.querySelector("#scoreDiv");

