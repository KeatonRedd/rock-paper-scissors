const buttonsArray = document.querySelectorAll('button');
let playerWins = 0, computerWins = 0;

buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
        buttonsArray.forEach((b) => {
            b.classList.remove('clickedButton');
        });

        let computerChoice = computerPlay();
        let gameResult = RPS(playerPlay(button.id), computerChoice);
        button.classList.toggle('clickedButton');

        if (gameResult == 'Win') {
            playerWins++;
        }

        else if (gameResult == 'Loss') {
            computerWins++;
        }
 
        document.querySelector('#computerSays').textContent = `Computer chose ${computerChoice}`;
        document.querySelector('#currentGame').textContent = `Game resulted in a ${gameResult}`;
        document.querySelector('#results').textContent = `Player Wins: ${playerWins} Computer Wins: ${computerWins}`;

        if (playerWins == 5 || computerWins == 5) {
            if (playerWins == 5) {
                document.querySelector('#results').textContent = 'Player WINS THE GAME!!!';
            }

            else if (computerWins == 5) {
                document.querySelector('#results').textContent = 'Computer WINS THE GAME!!!';
            }

            playerWins = 0, computerWins = 0;
        }
    });
});

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

function playerPlay(id) {
    return choiceTranslator(id);
}

function RPS(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Rock')
            return 'Draw';
        else if (computerSelection == 'Paper')
            return 'Loss';
        else if (computerSelection == 'Scissors')
            return 'Win';
    }

    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock')
            return 'Win';
        else if (computerSelection == 'Paper')
            return 'Draw';
        else if (computerSelection == 'Scissors')
            return 'Loss';
    }

    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock')
            return 'Loss';
        else if (computerSelection == 'Paper')
            return 'Win';
        else if (computerSelection == 'Scissors')
            return 'Draw';
    }
}

/* function game() {
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

    if (playerScore > computerScore) {
        console.log('Player wins!');
    }

    else
        console.log('Player lost.');
}  */