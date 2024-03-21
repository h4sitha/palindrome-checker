const button = document.querySelector('#check-btn');
let input = document.querySelector('#text-input');
const resultDiv = document.querySelector('#result');

button.addEventListener('click', () => {
    let string = input.value;
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = newString.split("").reverse().join("");
    console.log(string);
    console.log(newString);
    console.log(reversed);
})