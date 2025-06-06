const questions = [
    {
        question: "Qual o principal objetivo da solução tecnológica proposta pela FloodShield para as enchentes no Brasil?",
        options: [
            "a) Aumentar a capacidade de armazenamento de água em represas.",
            "b) Oferecer entretenimento digital para a população afetada.",
            "c) Monitorar e alertar em tempo real sobre riscos de enchentes, mitigando impactos.",
            "d) Construir novas casas em áreas de risco."
        ],
        correctAnswer: "c) Monitorar e alertar em tempo real sobre riscos de enchentes, mitigando impactos."
    },
    {
        question: "A solução da FloodShield integra diversas tecnologias. Quais das seguintes são componentes-chave mencionados?",
        options: [
            "a) Apenas câmeras de segurança e redes sociais.",
            "b) Sensores IoT, Inteligência Artificial Preditiva, Satélites e Aplicativo Móvel.",
            "c) Drones para entrega de suprimentos e impressoras 3D.",
            "d) Telefones fixos e televisões analógicas."
        ],
        correctAnswer: "b) Sensores IoT, Inteligência Artificial Preditiva, Satélites e Aplicativo Móvel."
    },
    {
        question: "O que a sigla IoT significa e qual sua relevância para o sistema FloodShield?",
        options: [
            "a) Internet of Televisions; para assistir a notícias sobre enchentes.",
            "b) Internet of Things (Internet das Coisas); permite que sensores coletem e transmitam dados em tempo real.",
            "c) Incredible Old Technology; sistemas antigos que ainda funcionam.",
            "d) International Online Trading; para negociação de seguros."
        ],
        correctAnswer: "b) Internet of Things (Internet das Coisas); permite que sensores coletem e transmitam dados em tempo real."
    },
    {
        question: "Como a Inteligência Artificial Preditiva (IA) auxilia no sistema da FloodShield?",
        options: [
            "a) Ela apenas exibe imagens de satélite.",
            "b) Analisa grandes volumes de dados para prever com maior precisão o risco e a severidade de enchentes.",
            "c) Gera automaticamente alertas de enchentes sem base em dados.",
            "d) Controla o tráfego de veículos durante as enchentes."
        ],
        correctAnswer: "b) Analisa grandes volumes de dados para prever com maior precisão o risco e a severidade de enchentes."
    },
    {
        question: "Qual o papel do aplicativo móvel da FloodShield na comunicação com a população?",
        options: [
            "a) Funciona apenas como um jogo.",
            "b) É uma plataforma para postar fotos de enchentes.",
            "c) Receber alertas personalizados, acessar rotas de evacuação e informações de abrigos.",
            "d) Permite agendar encontros com vizinhos."
        ],
        correctAnswer: "c) Receber alertas personalizados, acessar rotas de evacuação e informações de abrigos."
    },
    {
        question: "Além de salvar vidas, quais outros benefícios a FloodShield busca mitigar com sua solução tecnológica?",
        options: [
            "a) Apenas a diminuição da quantidade de chuva.",
            "b) Danos materiais, interrupção de serviços essenciais e impactos econômicos.",
            "c) Aumento da temperatura global.",
            "d) Criação de novos tipos de peixes."
        ],
        correctAnswer: "b) Danos materiais, interrupção de serviços essenciais e impactos econômicos."
    },
    {
        question: "Por que o monitoramento em tempo real é crucial para a eficácia do sistema da FloodShield?",
        options: [
            "a) Para enviar mensagens de texto aleatórias.",
            "b) Permite a tomada de decisões rápidas e a emissão de alertas antecipados, dando tempo para a população se preparar.",
            "c) Apenas para registrar o nível da água uma vez por dia.",
            "d) Para exibir a previsão do tempo de amanhã."
        ],
        correctAnswer: "b) Permite a tomada de decisões rápidas e a emissão de alertas antecipados, dando tempo para a população se preparar."
    },
    {
        question: "Qual a importância dos satélites no monitoramento de enchentes pela FloodShield?",
        options: [
            "a) São usados para assistir a filmes durante as enchentes.",
            "b) Fornecem dados de grande escala sobre o nível dos rios, áreas de inundação e condições climáticas.",
            "c) Servem apenas para a comunicação entre os funcionários da empresa.",
            "d) Geram imagens artísticas para a galeria do aplicativo."
        ],
        correctAnswer: "b) Fornecem dados de grande escala sobre o nível dos rios, áreas de inundação e condições climáticas."
    },
    {
        question: "A solução da FloodShield se encaixa no conceito de 'tragédias anunciadas' por quê?",
        options: [
            "a) Porque as enchentes são eventos imprevisíveis.",
            "b) Porque as enchentes no Brasil são recorrentes e seus impactos podem ser minimizados com prevenção e alerta.",
            "c) Porque as pessoas não se importam com os avisos.",
            "d) Porque o sistema não funciona em dias de sol."
        ],
        correctAnswer: "b) Porque as enchentes no Brasil são recorrentes e seus impactos podem ser minimizados com prevenção e alerta."
    },
    {
        question: "Como o sistema FloodShield contribui para a resiliência das comunidades frente às enchentes?",
        options: [
            "a) Aumentando a dependência de ajuda externa.",
            "b) Fortalecendo a capacidade de resposta e adaptação das comunidades, permitindo que elas se preparem e se recuperem mais rapidamente.",
            "c) Ignorando os riscos e esperando o pior.",
            "d) Impedindo totalmente a ocorrência de chuvas."
        ],
        correctAnswer: "b) Fortalecendo a capacidade de resposta e adaptação das comunidades, permitindo que elas se preparem e se recuperem mais rapidamente."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.querySelector('.quiz-container');

function startQuiz() {
    quizStarted = true;
    nextButton.textContent = 'Próxima Pergunta';
    resultContainer.textContent = '';
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
    quizContainer.style.display = 'block';
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        questionElement.textContent = questionData.question;
        optionsContainer.innerHTML = '';
        selectedOptionElement = null; 

        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.onclick = () => selectOption(button, option, questionData.correctAnswer);
            optionsContainer.appendChild(button);
        });

        nextButton.disabled = true; 
    } else {
        showResult();
    }
}

function selectOption(button, selectedOption, correctAnswer) {
    if (selectedOptionElement) {
        selectedOptionElement.classList.remove('selected');
        selectedOptionElement.classList.remove('correct');
        selectedOptionElement.classList.remove('incorrect');
    }

    button.classList.add('selected');
    selectedOptionElement = button;

    nextButton.disabled = false;
}

function checkAnswer() {
    if (!selectedOptionElement) {
        alert('Por favor, selecione uma opção antes de continuar.');
        return;
    }

    const selectedOption = selectedOptionElement.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    Array.from(optionsContainer.children).forEach(button => {
        button.classList.remove('correct');
        button.classList.remove('incorrect');
        button.classList.remove('selected');
        button.disabled = true;
    });


    if (selectedOption === correctAnswer) {
        score++;
        selectedOptionElement.classList.add('correct');
    } else {
        selectedOptionElement.classList.add('incorrect');
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    nextButton.disabled = false;
    nextButton.textContent = (currentQuestionIndex === questions.length - 1) ? 'Ver Resultado' : 'Próxima Pergunta';
}

function showResult() {
    questionElement.textContent = 'Quiz Concluído!';
    optionsContainer.innerHTML = '';
    resultContainer.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    nextButton.textContent = 'Recomeçar Quiz';
    nextButton.onclick = startQuiz; 
    nextButton.disabled = false;
    quizStarted = false; 
}

nextButton.addEventListener('click', () => {
    if (!quizStarted) {
        startQuiz();
    } else if (selectedOptionElement) { 
        checkAnswer();
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 500);
    } else {
        alert('Por favor, selecione uma opção antes de continuar.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    questionElement.textContent = 'Clique em "Começar Quiz" para testar seus conhecimentos sobre a FloodShield!';
    optionsContainer.innerHTML = '';
    nextButton.textContent = 'Começar Quiz';
    nextButton.disabled = false;
    resultContainer.textContent = '';
});