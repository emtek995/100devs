//Write your pseduo code first! 
// input
// compute
// output
const convert = (c) => c * 9 / 5 + 32;

document.querySelector('#button').addEventListener('click', () =>
    {document.querySelector('#out').innerHTML = convert(Number(document.querySelector('#in').value));}
);