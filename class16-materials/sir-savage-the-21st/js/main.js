//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
const looper = () => {
    let i = 21;
    while (i > 0) {
        document.querySelector('#savageSays').innerText += " 21";
        i--;
    }
}
looper();
