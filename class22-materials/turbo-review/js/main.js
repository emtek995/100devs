// *Variables*
// Declare a variable and assign it to your fav drink as a string.
// Make sure there is no whitespace on either side of the string,
// and print the value to the console
let drink = 'coffee';
console.log(drink);

//Declare a variable, assign it a string of multiple words, and check
// to see if one of the words is "apple".
let words = 'apple banana pear';
console.log(words.includes('apple')?'yeah':'nah');
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly
// as possible
const rps = () => {
    let r = Math.random();
    if (r < 0.3333) {
        return 'rock';
    } else if (r < 0.6666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors)
// and determines if they won a game of rock paper scissors against a
// bot using the above function
const playRps = (choice) => {
    let bot = rps();
    switch (choice) {
        case 'rock': return bot == 'scissors'? 'win' : bot == 'paper'? 'lose' : 'tie';break;
        case 'paper': return bot == 'rock'? 'win' : bot == 'scissors'? 'lose' : 'tie';break;
        case 'scissors': return bot == 'paper'? 'win' : bot == 'rock'? 'lose' : 'tie';break;
        default:  return 'error'
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game
// x times where x is the number of choices in the array. Print the
// results of each game to the console.
const autoRps = (choices) => {
    choices.forEach(choice => {
        console.log(playRps(choice));
    });
}

autoRps(['rock', 'rock', 'rock'])