const button = document.querySelector('#check-btn');
let input = document.querySelector('#text-input');
const resultDiv = document.querySelector('#result');

button.addEventListener('click', () => {
    let string = input.value;
    resultDiv.textContent = "";
    if (!string) {
        alert ("Please input a value");
        return;
    }
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = newString.split("").reverse().join("");
    if (reversed === newString) {
        resultDiv.textContent = `'${string}' is a palindrome.`;
    } else {
        resultDiv.textContent = `'${string}' is not a palindrome.`
    }
})