
window.onload = () => {
    loadQuestion(currentQuestionIndex);
};

function startGame() {
    window.location.href = 'stages/stage1.html';
}

let currentQuestionIndex = 0;
let selectedAnswer = '';

const questionsStage1 = [
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
    const question = questionsStage1[index];
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

    const question = questionsStage1[currentQuestionIndex];
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
    if (currentQuestionIndex >= questionsStage1.length) {
        document.getElementById('stage1Container').style.display = 'none';
        document.getElementById('startStage2Container').style.display = 'flex';
    } else {
        loadQuestion(currentQuestionIndex);
    }
}

function startStage2() {
    window.location.href = 'stage2.html';
}

let currentQuestionIndexStage2 = 0;
let selectedOption = '';

const questionsStage2 = [
    {
        title: "Question 1",
        options: {
            A: "Option A is the correct answer.",
            B: "Option B is incorrect.",
            C: "Option C is incorrect.",
            D: "Option D is incorrect."
        },
        correctAnswer: 'A'
    },
    {
        title: "Question 2",
        options: {
            A: "Option A is incorrect.",
            B: "Option B is the correct answer.",
            C: "Option C is incorrect.",
            D: "Option D is incorrect."
        },
        correctAnswer: 'B'
    }
    // Add more questions as needed
];

function loadQuestionStage2(index) {
    const question = questionsStage2[index];
    document.getElementById('questionTitle').innerText = question.title;
    document.getElementById('optionA').innerText = `A. ${question.options.A}`;
    document.getElementById('optionB').innerText = `B. ${question.options.B}`;
    document.getElementById('optionC').innerText = `C. ${question.options.C}`;
    document.getElementById('optionD').innerText = `D. ${question.options.D}`;
    document.getElementById('resultMessageStage2').innerText = '';
    selectedOption = '';
    resetOptions();
}

function selectOption(option) {
    selectedOption = option;
    resetOptions();

    document.getElementById(`option${option}`).classList.add('selected');
}

function resetOptions() {
    document.getElementById('optionA').className = 'option-btn';
    document.getElementById('optionB').className = 'option-btn';
    document.getElementById('optionC').className = 'option-btn';
    document.getElementById('optionD').className = 'option-btn';
}

function checkAnswer() {
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    const question = questionsStage2[currentQuestionIndexStage2];
    const correctOption = `option${question.correctAnswer}`;

    if (selectedOption === question.correctAnswer) {
        document.getElementById(correctOption).classList.add('correct');
    } else {
        document.getElementById(`option${selectedOption}`).classList.add('incorrect');
        document.getElementById(correctOption).classList.add('correct-answer');
    }
}

function nextQuestionStage2() {
    currentQuestionIndexStage2++;
    if (currentQuestionIndexStage2 >= questionsStage2.length) {
        alert("You've completed the challenge!");
        // Optionally redirect to a "game over" or "congratulations" page
    } else {
        loadQuestionStage2(currentQuestionIndexStage2);
    }
}

// Load the first question for stage 2 when the page loads
if (window.location.pathname.includes('stage2.html')) {
    window.onload = () => {
        loadQuestionStage2(currentQuestionIndexStage2);
    };
}
