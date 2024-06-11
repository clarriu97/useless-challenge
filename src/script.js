
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
        title: "Hold the Button",
        description: "Esta aplicación es simple pero desafiante: debes mantener pulsado un botón durante el mayor tiempo posible. Compite contra otros usuarios para ver quién puede aguantar más tiempo.",
        image: "../assets/images/hold_the_button.png",
        isReal: true
    },
    {
        title: "Poop Map",
        description: "Poop Map te permite registrar los lugares donde haces tus necesidades y compartirlo con tus amigos. Una aplicación perfecta para los que quieren documentar hasta sus momentos más íntimos.",
        image: "../assets/images/poop_map.png",
        isReal: true
    },
    {
        title: "Send Me To Heaven (S.M.T.H)",
        description: "Esta aplicación te desafía a lanzar tu teléfono tan alto como puedas y registra la altura alcanzada.",
        image: "../assets/images/smth.png",
        isReal: true
    },
    {
        title: "Rumblr",
        description: "Rumblr permite a los usuarios encontrar personas en su área dispuestas a pelear físicamente. La idea es que los usuarios se encuentren y se enfrenten en una pelea.",
        image: "../assets/images/rumblr.png",
        isReal: true
    },
    {
        title: "Blower",
        description: "Blower es una aplicación que simula un ventilador. Usa las ondas de sonido para crear una pequeña corriente de aire desde los altavoces de tu teléfono, lo suficiente como para apagar una vela.",
        image: "../assets/images/blower.png",
        isReal: true
    },
    {
        title: "iFrenchKiss",
        description: "Esta aplicación te permite practicar besos franceses en la pantalla de tu teléfono y te califica la calidad de tus besos.",
        image: "../assets/images/ifk.png",
        isReal: true
    },
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
let isFiftyFiftyUsed = false;
let isPublicOpinionUsed = false;

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
        window.location.href = '../index.html';
    } else {
        loadQuestionStage2(currentQuestionIndexStage2);
    }
}

function useFiftyFifty() {
    if (isFiftyFiftyUsed) return;
    isFiftyFiftyUsed = true;
    document.getElementById('fiftyFifty').classList.add('used');
    const question = questionsStage2[currentQuestionIndexStage2];
    const incorrectOptions = Object.keys(question.options).filter(option => option !== question.correctAnswer);

    // Remove two random incorrect options
    const optionsToRemove = incorrectOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    optionsToRemove.forEach(option => {
        document.getElementById(`option${option}`).innerText = '';
    });
}

function usePublicOpinion() {
    if (isPublicOpinionUsed) return;
    isPublicOpinionUsed = true;
    document.getElementById('publicOpinion').classList.add('used');
}

function resetWildcards() {
    isFiftyFiftyUsed = false;
    isPublicOpinionUsed = false;
    document.getElementById('fiftyFifty').className = 'wildcard-btn';
    document.getElementById('publicOpinion').className = 'wildcard-btn';
}

// Load the first question for stage 2 when the page loads
if (window.location.pathname.includes('stage2.html')) {
    window.onload = () => {
        loadQuestionStage2(currentQuestionIndexStage2);
        resetWildcards();
    };
}
