//Create a function that takes in an array of numbers.
// Return a new array containing every even number from the original array (do not use map or filter)

const winter = (arr) => {
    let result = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            result.push(num);
        }
    })
    return result;
}

console.log(winter([1, 3, 4, 2, 3, 8, 3]));