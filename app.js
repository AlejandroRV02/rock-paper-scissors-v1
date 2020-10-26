var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const socreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function main() {
    rock_div.addEventListener('click', () => {
        game('r');

    });

    scissors_div.addEventListener('click', () => {
        game('s');
        // console.log('s');
    });

    paper_div.addEventListener('click', () => {
        game('p');
        // console.log('p');
    });
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    var rand = Math.floor(Math.random() * 3);

    return choices[rand];
}

function convertToWord(userChoice) {
    var word = '';

    switch (userChoice) {
        case 'r':
            word = 'Rock';
            break;
        case 's':
            word = 'Scissors';
            break;
        case 'p':
            word = 'Paper';
            break;
    }

    return word;
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userWord = convertToWord(userChoice);
    const computerWord = convertToWord(computerChoice);
    result_p.innerHTML = `
        You picked: <span class="win">${userWord}</span><br>
        Computer picked: <span class="lose">${computerWord}</span><br>
        <span class="win">YOU WIN...!</span>
    `;
}

function draw(userChoice, computerChoice) {
    
    const userWord = convertToWord(userChoice);
    const computerWord = convertToWord(computerChoice);
    result_p.innerHTML = `
        You picked: <span class="draw">${userWord}</span><br>
        Computer picked: <span class="draw">${computerWord}</span><br>
        <span class="draw">It's a DRAW</span>
    `;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const userWord = convertToWord(userChoice);
    const computerWord = convertToWord(computerChoice);
    result_p.innerHTML = `
        You picked: <span class="lose">${userWord}</span><br>
        Computer picked: <span class="win">${computerWord}</span><br>
        <span class="lose">YOU LOSE :(</span>
    `;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        //User wins
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        //Tie
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        //Computer wins
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
    }
}

main();
