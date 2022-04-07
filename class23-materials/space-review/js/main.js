//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((sum, num) => sum + num, 1));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
console.log(numbers.map(n => n * n));
//Create a function that takes string
//Print the reverse of that string to the console
const rev = (str) => str.split('').reverse().join('');
console.log(rev('derp'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const pal = (str) => str === rev(str) ? true : false;
console.log(pal('poop'));
console.log(pal('derp'));