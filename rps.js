let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let randomNum = Math.floor((Math.random()*100)) % 3;
    console.log(randomNum);
    if (randomNum == 0)
    {
        return "rock";
    }
    else if (randomNum == 1)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice()
{
    let validInputs = ['rock', 'paper', 'scissor'];
    let input = prompt("Enter rock, paper or scissor");
    while (!validInputs.includes(input.toLowerCase()))
    {
        input = prompt("Enter rock, paper or scissor");
    }
    return input.toLowerCase();
}

function determineWinner(humanChoice, computerChoice)
{
    if (humanChoice == computerChoice)
    {
        return "It's a tie!";
    }
    else if (humanChoice == 'rock')
    {
        if (computerChoice == 'paper')
        {
            return "Computer wins!";
        }
        else
        {
            return "Human wins!";
        }
    }
    else if (humanChoice == 'paper')
    {
        if (computerChoice == 'scissor')
        {
            return "Computer wins!";
        }
        else
        {
            return "Human wins!";
        }
    }
    else
    {
        if (computerChoice == 'rock')
        {
            return "Computer wins!";
        }
        else
        {
            return "Human wins!";
        }
    }
}

function playRound()
{
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(humanChoice, computerChoice));
    if (determineWinner(humanChoice, computerChoice).includes("Human"))
    {
        humanScore++;
    }
    else
    {
        computerScore++;
    }
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        playRound();
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
}

playGame();
