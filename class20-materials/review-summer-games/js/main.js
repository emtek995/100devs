//Create a function that takes in an array of numbers.
// Multiply each number together and alert the product. 
const mult = (arr) => {
    let result = 1;
    arr.forEach(num => result *= num);
    return result;
}
