function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random() * 3)
    let choice = options[randomIndex]
    return choice
}

function playRound(e, playerSelection, computerSelection='rock') {
    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'
    playerSelection = e.target.id
    computerSelection = getComputerChoice()
    results = document.querySelector('.text')
    if (playerSelection.toLowerCase() === rock) {
        if (computerSelection === rock) {
            results.textContent += 'Tie!\n'
            return 't'
        }
        else if (computerSelection === paper) {
            results.textContent += 'Paper! You lose!\n'
            return 'cw'
        }

        else if (computerSelection === scissors) {
            results.textContent += 'Scissors! You win!\n'
            return 'pw'
        }
    }
    else if (playerSelection.toLowerCase() === paper) {
        if (computerSelection === rock) {
            results.textContent += 'Rock! You win!\n'
            return 'pw'
        }
        
        else if (computerSelection === paper) {
            results.textContent += 'Tie!\n'
            return 't'
        }

        else if (computerSelection === scissors) {
            results.textContent += 'Scissors! You lose!\n'
            return 'cw'
        }
    }
    else if (playerSelection.toLowerCase() === scissors) {
        if (computerSelection === rock) {
            results.textContent += 'Rock! You lose!\n'
            return 'cw'
        }

        else if (computerSelection === paper) {
            results.textContent += 'Paper! You win!\n'
            return 'pw'
        }
        
        else if (computerSelection === scissors) {
            results.textContent += 'Tie!\n'
            return 't'
        }
    }
    else {
        results.textContent += 'Oops! Invalid move...\n'
    }
}

let playerScore = 0
let computerScore = 0

function game(e) {
    round = playRound(e)
    if (round == 'pw') {
        ++playerScore
    }
    else if (round == 'cw') {
        ++computerScore
    }
    const score = document.querySelector('.score');
    score.textContent = `${playerScore} - ${computerScore}`;
    if (playerScore == 3 || computerScore == 3) {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.removeEventListener('click', game)
        })
        const h2 = document.querySelector('div > h2');
        playerScore > computerScore ? h2.textContent = 'wow yay you did it!! :3' : h2.textContent = 'oh u lost. cringe :/';
    }
}

function newGame() {
    playerScore = 0
    computerScore = 0
    const text = document.querySelector('.text');
    text.textContent = ''
    const container = document.querySelector('.container');
    if (document.querySelector('.container > h2') !== null) {
        message = document.querySelector('.container > h2');
        container.removeChild(message)
    }
    const h2 = document.createElement('h2')
    container.appendChild(h2)
    const score = document.querySelector('.score');
    score.textContent = `${playerScore} - ${computerScore}`;
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
        button.addEventListener('click', game)
    })
}

const startGame = document.querySelector('#start')
startGame.addEventListener('click', newGame)