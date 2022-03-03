// *Variables*
// Create a variable and console log the value
let a = 1;
console.log(a);
// Create a variable, add 10 to it, and alert the value
let b = 1;
b += 10;
alert(b);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let subs = (a, b, c, d) => alert(a - b - c- d);
// Create a function that divides one number by another and returns the remainder
let divs = (a, b) => a % b;
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let adds = (a, b) => {
    if (a + b > 50) alert ('jumanji')
};
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let mults = (a, b, c) => {
    if ((a * b * c) % 3 === 0) alert('zebra');
}