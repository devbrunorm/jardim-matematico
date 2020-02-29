var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`Answer: ${answer}, Previsão: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correto! Pontuação: ${score}`);
        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Muito bom! Seu jardim matemático está completamente florido! Quer começar novamente?');
            score = 0;
            backgroundImages = [];

        }
    } else {
        if (score != 0) { score--; }
        console.log(`Errado! Pontuação: ${score}`);
        alert('Oops! Confira seus dados e tente escrever o número de uma forma mais clara desta vez...')
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }

};
