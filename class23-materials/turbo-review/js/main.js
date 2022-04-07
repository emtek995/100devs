// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sent = 'is this a question?';
//sent.endsWith('?') ? alert('it\'s a question') : {};

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let dev = 'this is a sweet thing for a jr. dev';
dev = dev.replaceAll('jr. dev', 'software engineer');
console.log(dev);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = () => {
    const r = Math.random();
    if (r < 0.333) {
        return 'rock';
    } else if (r < 0.666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRps = (choice) => {
    const bot = rps();
    let result = '';
    switch (choice) {
        case 'rock': bot === 'scissors' ? result = 'win' : bot === 'paper' ? result = 'loose' : result = 'tie';break;
        case 'paper': bot === 'rock' ? result = 'win' : bot === 'scissors' ? result = 'loose' : result = 'tie';break;
        case 'scissors': bot === 'paper' ? result = 'win' : bot === 'rock' ? result = 'loose' : result = 'tie';break;
    }
    return result;
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const autoRps = (choices) => {
    choices.forEach(choice => {
        console.log(playRps(choice));
    });
}

autoRps(['rock', 'rock', 'rock']);