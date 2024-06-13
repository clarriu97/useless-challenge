
window.onload = () => {
    loadQuestion(currentQuestionIndex);
};

function startGame() {
    window.location.href = 'stages/stage1.html';
}

let currentQuestionIndex = 0;

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
        title: "BarkTranslator",
        description: "¿Alguna vez te has preguntado qué está diciendo tu perro? BarkTranslator te permite grabar el ladrido de tu perro y lo traduce a lenguaje humano, diciéndote si tu perro tiene hambre, está feliz o simplemente quiere jugar.",
        image: "../assets/images/bark_translator.png",
        isReal: false
    },
    {
        title: "Rumblr",
        description: "Rumblr permite a los usuarios encontrar personas en su área dispuestas a pelear físicamente. La idea es que los usuarios se encuentren y se enfrenten en una pelea.",
        image: "../assets/images/rumblr.png",
        isReal: true
    },
    {
        title: "Ghost Detector Pro",
        description: "Esta app te ayuda a detectar y comunicarte con fantasmas a través de la cámara y el micrófono de tu teléfono, pudiendo identificar presencias paranormales y traducir sus mensajes.",
        image: "../assets/images/ghost_detector.png",
        isReal: false
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
    {
        title: "Mind Workout",
        description: "Esta aplicación ofrece ejercicios mentales que desarrollan tu capacidad para mover objetos con la mente, entrenándote para usar telequinesis en la vida real.",
        image: "../assets/images/mind_workout.png",
        isReal: false
    },
    {
        title: "Gravity Control",
        description: "Esta app puede alterar la gravedad alrededor de tu teléfono. Puedes hacer que los objetos ligeros floten o que tu teléfono se vuelva más pesado con solo deslizar un control en la app.",
        image: "../assets/images/gravity_control.png",
        isReal: false
    },
];

function loadQuestion(index) {
    const question = questionsStage1[index];
    document.getElementById('appTitle').innerText = question.title;
    document.getElementById('appDescription').innerText = question.description;
    document.querySelector('.app-image').src = question.image;
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('answerContainer').innerText = '';
}

function checkSolution() {
    const question = questionsStage1[currentQuestionIndex];
    const isReal = question.isReal;
    const answerContainer = document.getElementById('answerContainer');
    answerContainer.innerText = isReal ? 'REAL' : 'FAKE';
    answerContainer.style.color = isReal ? 'green' : 'red';
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
        title: "¿Cuál es el patrón de Internet?",
        options: {
            A: "San José",
            B: "San Francisco de Asís",
            C: "San Nicolás",
            D: "San Isidoro de Sevilla"
        },
        correctAnswer: 'D'
    },
    {
        title: "¿Qué se regalaba con la primera impresora comercial?",
        options: {
            A: "Un extintor",
            B: "Un paquete de folios",
            C: "Un cartucho de tinta de color",
            D: "Un abrebotellas"
        },
        correctAnswer: 'A'
    },
    {
        title: "¿Cuál fue el primer videojuego comercializado?",
        options: {
            A: "Computer Space",
            B: "Pong",
            C: "Space Invaders",
            D: "Pac-Man"
        },
        correctAnswer: 'A'
    },    
    {
        title: "¿Cuál fue el primer sistema operativo desarrollado por Microsoft?",
        options: {
            A: "MS-DOS",
            B: "Windows 95",
            C: "Windows 3.1",
            D: "Xenix"
        },
        correctAnswer: 'A'
    },    
    {
        title: "¿Cuál fue el primer dominio registrado?",
        options: {
            A: "symbolics.com",
            B: "google.com",
            C: "example.com",
            D: "microsoft.com"
        },
        correctAnswer: 'A'
    },    
    {
        title: "¿Quién fue la primera persona en programar un algoritmo para una máquina?",
        options: {
            A: "Ada Lovelace",
            B: "Charles Babbage",
            C: "Alan Turing",
            D: "Grace Hopper"
        },
        correctAnswer: 'A'
    },
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
