//Create a button that adds 1 to a botScore stored in localStorage 

let btn = document.querySelector('#btn').addEventListener('click', () => {
    let ls = parseInt(localStorage.getItem('thing'));
    isNaN(ls) ? ls = 1 : ls += 1;
    document.querySelector('#num').innerText = ls;
    localStorage.setItem('thing', ls);
})
