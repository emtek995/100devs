// *Variables*
// Create a variable and console log the value
const f = 0;
console.log(f);
// Create a variable, add 10 to it, and alert the value
let t = 10;
t += 10;
alert(t);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subs = (a, b, c, d) => alert(a - b - c - d);
// Create a function that divides one number by another and returns the remainder
const divs = (a, b) => a % b;
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const adds = (a, b) => {
    if ((a + b) > 50) alert('Jumanji');
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const mults = (a, b, c) => {
    if (((a * b * c) % 3) === 0) alert('ZEBRA');
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
const looper = (word, times) => {
    while (times--) {
        console.log(word);
    }
}

