const btnDecrEl = document.querySelector('button[data-action=decrement]');
const btnIncrEL = document.querySelector('button[data-action=increment]');

const counterValueDisplay = document.querySelector("#value")
let counterValue = 0;

btnIncrEL.addEventListener('click', () => {
    counterValue += 1;
    counterValueDisplay.textContent = counterValue;
})

btnDecrEl.addEventListener('click', () => {
    counterValue -= 1;
    counterValueDisplay.textContent = counterValue;
})


