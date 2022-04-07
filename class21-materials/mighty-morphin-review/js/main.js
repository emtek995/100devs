// *Variables*
// Declare a variable, reassign it to your fav holiday,
// make sure it is in all caps, and print the value to the console
let hol = 0;
hol = 'anniversery'.toUpperCase();
console.log(hol);

//Declare a variable, assign it a string, alert the last three
// characters in the string (Use your google-fu and the MDN)
let doof = 'omg this is a string';
alert(doof.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100.
// Alert the absolute value of the difference. Call the function.
const fives = (a, b, c, d, e) => alert(Math.abs(100 - a - b - c - d -e));
fives(1, 2, 3, 4, 5);

// Create a function that takes in 3 numbers. Console log lowest
// and highest values. Call the function.
const threes = (a, b, c) => {
    let t = [a, b, c];
    t.sort((a, b) => a - b);
    console.log(t[0], t[2]);
}

threes(234, 12, 123412);

// *Conditionals*
//Create a function that returns heads or tails randomly and as
// fairly as possible. Call the function.
const ht = _ => (Math.random() > .5) ? 'heads' : 'tails';

//*Loops*
//Create a function that takes in a number. Console log the
// result of heads or tails using the previous function x times where
// x is the number passed into the function. Call the function.
const looper = (a) => {
    while (a-- > 0) {
        console.log(ht());
    }
}

looper(32);