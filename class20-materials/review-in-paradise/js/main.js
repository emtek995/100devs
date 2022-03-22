// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let yummy = 'pizza'; alert(yummy);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let yummy2 = 'pizza'; alert(yummy2[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const nums = (a, b, c) => alert(a / b * c);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cube = (a) => console.log(Math.cbrt(a));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const month = (month) => {
    switch (month.toLowerCase()) {
        case 'june':
        case 'july':
        case 'august':
        case 'september': alert('YAY'); break;
        default: alert('Booo'); break;
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const looper = (a) => {
    for (let i = 0; i <= a; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        }
    }
}