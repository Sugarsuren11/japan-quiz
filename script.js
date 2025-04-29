const questions = [
    {
        hiragana: "わたし",
        romaji: "watashi",
        meaning: "I",
        options: ["watashi", "anata", "sensei", "gakusei"],
        correct: 0
    },
    {
        hiragana: "あなた",
        romaji: "anata",
        meaning: "You",
        options: ["watashi", "anata", "sensei", "gakusei"],
        correct: 1
    },
    {
        hiragana: "せんせい",
        romaji: "sensei",
        meaning: "Teacher",
        options: ["watashi", "anata", "sensei", "gakusei"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector('.question').textContent = question.hiragana;

    const options = document.querySelectorAll('.option');
    options.forEach((btn, index) => {
        btn.textContent = question.options[index];
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('next-button').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert(`Game Over! Your final score is ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = `Score: ${score}`;
    }
    loadQuestion();
    document.getElementById('next-button').style.display = "none";
}

window.onload = () => {
    loadQuestion();
    document.getElementById('next-button').style.display = "none";
};
