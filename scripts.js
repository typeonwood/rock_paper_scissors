function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random() * 3)
    let choice = options[randomIndex]
    return choice
}

function playRound(playerSelection, computerSelection) {
    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'
    playerSelection = prompt('What is your move?')
    computerSelection = getComputerChoice()
    if (playerSelection.toLowerCase() === rock) {
        if (computerSelection === rock) {
            return 'Tie!'
        }
        else if (computerSelection === paper) {
            return 'Paper! You lose!'
        }

        else if (computerSelection === scissors) {
            return 'Scissors! You win!'
        }
    }
    else if (playerSelection.toLowerCase() === paper) {
        if (computerSelection === rock) {
            return 'Rock! You win!'
        }
        
        else if (computerSelection === paper) {
            return 'Tie!'
        }

        else if (computerSelection === scissors) {
            return 'Scissors! You lose!'
        }
    }
    else if (playerSelection.toLowerCase() === scissors) {
        if (computerSelection === rock) {
            return 'Rock! You lose!'
        }

        else if (computerSelection === paper) {
            return 'Paper! You win!'
        }
        
        else if (computerSelection === scissors) {
            return 'Tie!'
        }
    }
    else {
        return 'Oops! Invalid move...'
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    while (playerScore < 3 && computerScore < 3) {
        result = playRound()
        if (result.includes('win')) {
            ++playerScore;
            console.log('You won the round! ' + playerScore + ' - ' + computerScore)
        }
        else if (result.includes('lose')) {
            ++computerScore;
            console.log('You lost the round! ' + playerScore + ' - ' + computerScore)
        }
        else {
            console.log('Tie! Keep going')
        }
    }
    if (playerScore === 3) {
        return console.log(`Congratulations! You win! Final score: ${playerScore} - ${computerScore}`)
    } 
    else {
        return console.log(`Sorry! You lost. Better luck next time! Final score: ${playerScore} - ${computerScore}`)
    }
}

game()