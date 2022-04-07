//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.reduce((a, c) => a + c));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squared = (arr) => arr.map(n => n * n);
console.log(squared(arr));
//Create a function that takes string
//Print the reverse of that string to the console
const rev = (str) => console.log(str.split('').reverse().join(''));
rev('cool')
//Create a function that takes in a string
//Alert if the string is a palindrome or not
