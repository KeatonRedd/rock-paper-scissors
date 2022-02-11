function computerPlay() {
    let choice = Math.floor(Math.random() * 3);

    return choiceTranslator(choice);
}

function choiceTranslator(choice) {
    switch (choice) {
        case 0:
        case 'rock':
            return 'Rock';
            break;

        case 1:
        case 'paper':
            return 'Paper';
            break;

        case 2:
        case 'scissors':
            return 'Scissors';
            break;

        default:
            return 'Error';
            break;
    }
}

function playerPlay() {
    let playerChoice = prompt('Type Rock, Paper, or Scissors').toLowerCase();

    return choiceTranslator(playerChoice);
}

function RPS(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Rock')
            return 'Draw';
        else if (computerSelection == 'Paper')
            return 'Lose';
        else if (computerSelection == 'Scissors')
            return 'Win';
    }

    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock')
            return 'Win';
        else if (computerSelection == 'Paper')
            return 'Draw';
        else if (computerSelection == 'Scissors')
            return 'Lose';
    }

    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock')
            return 'Lose';
        else if (computerSelection == 'Paper')
            return 'Win';
        else if (computerSelection == 'Scissors')
            return 'Draw';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        switch (RPS(playerPlay(), computerPlay())) {
            case 'Win':
                playerScore++;
                break;
            
            case 'Lose':
                computerScore++;
                break;

            default: 
                i--;
                break;
        }

        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
    }

    if (playerScore > computerScore){
        console.log('Player wins!');
    }

    else
        console.log('Player lost.');
}

game();