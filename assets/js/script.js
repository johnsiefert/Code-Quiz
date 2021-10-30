// questions for the quiz
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

//setting up variables for quiz
let totalTime = 59;
let start =  document.querySelector("#StartQuiz");
let count = 0;
let totalPoints = 0;
let scoreH1 = document.querySelector("#score");
let lastQ = false;
let submitBtn = document.querySelector("#submit");
let highscore;
let highscoreBtn = document.querySelector("#highscores");
let scoresDiv = document.querySelector("#scoreDiv");

//High score and display scores
highscoreBtn.addEventListener("click", function(){
    document.getElementById("highscoreDisp").innerHTML = "";
    let hsList = JSON.parse(localStorage.getItem("Highscore")).highscoreArr || [];
    if (scoresDiv.style.display === "none"){
        scoresDiv.style.display === "flex";
        hsList.map(a => {
            let ele = document.createElement ("h3");
            let node = document.createTextNode(a);
            ele.appendChild(node);
            document.getElementById("highscoreDisp").appendChild(ele);
        });
    } else{
        scoresDiv.style.display = "none";

    }
    console.log("Hello are you working?");
});

//submit button for the High Score
submitBtn.addEventListener("click", function(){
    if (localStorage.getItem("Highscore")=== null){
        localStorage.setItem("Highscore", JSON.stringify({
            highscore: 0,
            highscoreArr: []
        }));
    }

    let input = document.querySelector("#initials").ariaValueMax;
    let score = totalPoints + totalTime;
    highscore = JSON.parse(localStorage.getItem("Highscore")).highscore;
    let allscores = JSON.parse(localStorage.getItem("Highscore")).highscoreArr;

    if (score > highscore) {
            highscore = score;
    }
    allscores.push(input + score);
    localStorage.setItem('Highscore', JSON.stringify({
        highscore,
        highscoreArr: allscores
    }));
    startAgain();
});

let startOverScreen = document.querySelector("#startOver");
let restartBtn = document.querySelector("#restart");

// function to restart the game
function startAgain(){
    endQuiz.style.display = "none";
    startOverScreen.style.display = "flex";
}

//Restart Event
restartBtn.addEventListener("click", function(){
    totalTime = 75;
    count = 0;
    totalPoints = 0;
    lastQ = false;
    startDiv.style.display = "block"
    quizDiv.style.display = "none"
    startOverScreen.style.display = "none";
});

endGame = () => {
        lastQ = true;
        quizDiv.style.display ="none"
        endQuiz.style.display = "block";
        let score = totalPoints = totalTime;
        scoreH1.textContent = score;
};

answeredRight = () => {
    alert("YOU GOT IT RIGHT!");
    totalPoints += 10;
    console.log(highscore);
    count++;
    if (count === questions.length){
                endgame();
        }else{
            generateQuestions();
        }
};

answeredWrong = () => {
	alert("YOU GOT IT WRONG!");
	totalPoints -= 5;
	count++;
	totalTime -= 10;
	if (count === questions.length) {
		endGame();
	} else {
		generateQuestions();
	}
};

generateQuestions = () => {
    document.getElementById("quizQ").innerHTML = questions[count].title;
    document.getElementById("choiceBtns").innerHTML = "";

    questions [count].choices.map((choice, i) => {
        let btn = document.createElement("button");
        let textnode = document.createTextNode(choice);
        btn.appendChild(textnode);
        document.getElementById("choiceBtns").appendChild(btn);
        btn.setAttribute("data", choice);
        btn.setAttribute("id", 'btn${i}');
        btn.setAttribute("anwser", questions[count].answer);

        document.querySelector('btn${i}').addEventListener("click", function (e){
            console.log(e.target.getAttribute( "data"));
            if (e.target.getAttribute("data") === e.target.getAttribute("anwser")){
                answeredRight ();
             }else{
                 answeredWrong ();
             }
        });
    });
};

let timerSpan = document.querySelector("#timer");
let startDiv = document.querySelector("#startDiv");
let quizDiv = document.querySelector("#quizDiv");
let endQuiz = document.querySelector("#endQuiz");

start.addEventListener("click", function () {
	console.log(totalTime);
	startDiv.style.display = "none";
	quizDiv.style.display = "block";
	generateQuestions();

	let interval = setInterval(function () {
		totalTime--;
		timerSpan.innerHTML = totalTime;
		console.log("tick .. " + totalTime);
		if (totalTime === 0 || lastQ) {
			clearInterval(interval);
			console.log("Time's out");
			endGame();
		}
	}, 1000);

});