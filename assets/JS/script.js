const questions = [
    {
    question: "What is a checkout score for 158?",
    answers: [
        {text: "T19-T19-D10", correct: false},
        {text: "T20-T20-D19", correct: true},
        {text: "T20-T14-D16", correct: false},
        {text: "T20-T20-D20", correct: false},

    ]
    },
    {
        question: "What is a checkout score for 158?",
        answers: [
            {text: "T19-T19-D10", correct: false},
            {text: "T20-T20-D19", correct: true},
            {text: "T20-T14-D16", correct: false},
            {text: "T20-T20-D20", correct: false},
    
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answerButtons.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


startQuiz();