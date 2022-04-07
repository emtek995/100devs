//Arrays

//Create and array of tv shows. Loop through and print each show to the
// console
let shows = ['star trek', 'star wars'];
shows.forEach(show => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number
// from the previous Arrays
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(n => n % 2 === 0);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const nums = (a) => {
    a.sort((a, b) => a - b);
    alert(a[1] + a[-2]);
}