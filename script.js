const button = document.querySelector('#check-btn');
let input = document.querySelector('#text-input');
const resultDiv = document.querySelector('#result');

button.addEventListener('click', () => {
    let string = input.value;
    console.log(string);
})