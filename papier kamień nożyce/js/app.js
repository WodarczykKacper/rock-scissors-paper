let scoreUser = 0;
let scoreComp = 0;
const scoreUserSpan = document.getElementById('scoreUser');
const scoreCompSpan = document.getElementById('scoreComp');
const choices = document.getElementById('choices');
//const userChoice = document.querySelector('.choice');
const paper = document.getElementById('p');
const rock = document.getElementById('r');
const scissors = document.getElementById('s');
let result = document.getElementById('result')

function getCompChoice() {
    const choices = ['p', 'r', 's'];
    let randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
};

function win(userChoice, compChoice) {
    scoreUser++;
    scoreUserSpan.innerHTML = scoreUser;
    document.getElementById(userChoice).classList.add('win');
    result.innerHTML = `You Win!`;

    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('win');
        result.innerHTML = `Make your choice!`;

    }, 750)

}

function lose(userChoice, computerChoice) {
    scoreComp++;
    scoreCompSpan.innerHTML = scoreComp;
    document.getElementById(userChoice).classList.add('lose');
    result.innerHTML = `You lose`
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('lose');
        result.innerHTML = `Make your choice!`
    }, 750)
    //    result.innerHTML = `haha frajer`
}

function draw(userChoice, computerChoice) {

    document.getElementById(userChoice).classList.add('draw');
    result.innerHTML = `It's draw`
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('draw');
        result.innerHTML = `Make your choice!`

    }, 750)

}

function eventListeners() {
    paper.addEventListener('click', () => game("p"));

    rock.addEventListener('click', () => game("r"));
    
    scissors.addEventListener('click', () => game("s"));
       
    }


document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
    getCompChoice();
})
