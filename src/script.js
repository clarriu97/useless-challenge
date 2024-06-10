
function startGame() {
    window.location.href = 'stages/stage1.html';
}

let currentQuestionIndex = 0;
let selectedAnswer = '';

const questions = [
    {
        title: "App Example 1",
        description: "This app claims to translate your pet's sounds into human speech. Is it real or fake?",
        image: "../assets/images/app-example1.png",
        isReal: false
    },
    {
        title: "App Example 2",
        description: "This app helps you find parking spaces in crowded cities. Is it real or fake?",
        image: "../assets/images/app-example2.png",
        isReal: true
    }
    // Add more questions as needed
];

function loadQuestion(index) {
    const question = questions[index];
    document.getElementById('appTitle').innerText = question.title;
    document.getElementById('appDescription').innerText = question.description;
    document.querySelector('.app-image').src = question.image;
    document.getElementById('resultMessage').innerText = '';
    selectedAnswer = '';
    resetButtons();
}

function selectAnswer(answer) {
    selectedAnswer = answer;
    const trueButton = document.getElementById('trueButton');
    const falseButton = document.getElementById('falseButton');

    trueButton.classList.remove('selected');
    falseButton.classList.remove('selected');

    if (answer === 'true') {
        trueButton.classList.add('selected');
    } else {
        falseButton.classList.add('selected');
    }
}

function resetButtons() {
    document.getElementById('trueButton').className = 'true-false-btn';
    document.getElementById('falseButton').className = 'true-false-btn';
}

function checkSolution() {
    if (!selectedAnswer) {
        alert('Please select an answer.');
        return;
    }

    const question = questions[currentQuestionIndex];
    const trueButton = document.getElementById('trueButton');
    const falseButton = document.getElementById('falseButton');

    if (selectedAnswer === 'true' && question.isReal) {
        trueButton.classList.add('correct');
    } else if (selectedAnswer === 'false' && !question.isReal) {
        falseButton.classList.add('correct');
    } else {
        if (selectedAnswer === 'true') {
            trueButton.classList.add('incorrect');
            falseButton.classList.add('correct-answer');
        } else {
            falseButton.classList.add('incorrect');
            trueButton.classList.add('correct-answer');
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        window.location.href = 'stage2.html';
    } else {
        loadQuestion(currentQuestionIndex);
    }
}

// Load the first question when the page loads
window.onload = () => {
    loadQuestion(currentQuestionIndex);
};
