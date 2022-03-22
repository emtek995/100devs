//--- Easy
//create a variable and assign it a number
let number = 10;
//minus 10 from that number
number -= 10;
//print that number to the console
console.log(number);
//--- Medium
//create a variable that holds a value from the input
let input = Number(document.querySelector('#danceDanceRevolution').value);
//add 25 to that number
input += 25;
//alert that number
alert(input);
//--- Hard
//create a variable that holds the h1
const h = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h.addEventListener('click', () => {
    console.log(number + input);
})