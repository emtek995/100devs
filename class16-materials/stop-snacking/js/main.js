//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', () => {
    document.querySelector('#stops').innerText = '';
    const number = Number(document.querySelector('input').value);
    for (let i = 0; i < number; i++) {
        document.querySelector('#stops').innerText += ' STOP';
    }
})