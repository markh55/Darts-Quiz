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
        question: "How many world titles does Michael van Gerwen have?",
        answers: [
            { text: "5", correct: false },
            { text: "1", correct: false },
            { text: "0", correct: false },
            { text: "3", correct: true },
        ]
    },
    {
        question: "What is the highest possible checkout in darts?",
        answers: [
            { text: "180", correct: false },
            { text: "170", correct: true },
            { text: "160", correct: false },
            { text: "150", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    nextButton.onclick = nextQuestion;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; 
    } else {
        selectedBtn.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz Finished! Your score: ${score}/${questions.length}`;
        answerButtons.innerHTML = "";
        nextButton.innerHTML = "Restart";
        nextButton.style.display = "block";
        nextButton.addEventListener("click", () => {
            window.location.reload();
        } );
    }
}

nextButton.onclick = startQuiz;

startQuiz();
