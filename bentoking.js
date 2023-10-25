const questions = [
    {
        image: './img/01.jpg',
        options: ['1', '1.5', '2', '2.5'],
        correct: 2,
    },
    {
        image: './img/02.jpg',
        options: ['1', '2', '3', '4'],
        correct: 3,
    },
    {
        image: './img/03.jpg',
        options: ['1', '2', '2.5', '3'],
        correct: 3,
    },
    {
        image: './img/04.jpg',
        options: ['1', '2', '3', '3.5'],
        correct: 3,
    },
    {
        image: './img/05.jpg',
        options: ['1', '2', '2.5', '3'],
        correct: 1,
    },
    {
        image: './img/06.jpg',
        options: ['0', '1', '1.5', '2'],
        correct: 3,
    },
    {
        image: './img/07.jpg',
        options: ['1', '2', '2.5', '3'],
        correct: 2,
    },
    {
        image: './img/08.jpg',
        options: ['0', '1', '1.5', '2'],
        correct: 3,
    },
    {
        image: './img/09.jpg',
        options: ['3', '4', '5', '6'],
        correct: 3,
    },
    {
        image: './img/10.jpg',
        options: ['0', '1', '2', '2.5'],
        correct: 3,
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    if (currentQuestion < questions.length) {
        document.getElementById('question-image').src = question.image;
        document.getElementById('question-number').textContent = currentQuestion + 1;
        document.getElementById('score').textContent = score;
        const options = document.querySelectorAll('.option');
        for (let i = 0; i < options.length; i++) {
            options[i].textContent = question.options[i];
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.correct) {
        score += 10;
    }
    currentQuestion++;
    loadQuestion();
}

function endQuiz() {
    document.getElementById('quiz-container').innerHTML = `<h1 id='quiz_result'>測驗結束</h1><h3>得分: ${score}/100</h3>`;
    if(score == 100){
        alert("恭喜！你是便當知識王！請聯絡作者請你吃一個大便當");
        // document.getElementById('quiz_result').innerText = "恭喜！你是便當知識王！請聯絡作者請你吃一個大便當";
    }else if(score >= 80){
        alert("懂吃喔！請聯絡作者請你吃一個大便當");
        // document.getElementById('quiz_result').innerText = "懂吃喔！請聯絡作者請你吃一個大便當";
    }else if(score >= 60){
        alert("這就是你的水平嗎？請聯絡作者請你吃一個大便當");
        // document.getElementById('quiz_result').innerText = "這就是你的水平嗎？請聯絡作者請你吃一個大便當";
    }else{
        alert("你便當都白吃了，請聯絡作者請你吃一個大便當");
        // document.getElementById('quiz_result').innerText = "你便當都白吃了，請聯絡作者請你吃一個大便當";
    }
}

loadQuestion();