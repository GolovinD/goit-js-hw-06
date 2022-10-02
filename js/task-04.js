const decrementRef = document.querySelectorAll('button')[0];
const incrementRef = document.querySelectorAll('button')[1];
const counterRef = document.querySelector('#value');

let counterValue = 0;

decrementRef.addEventListener('click', () => {
    counterRef.textContent = counterValue += -1;
});

incrementRef.addEventListener('click', () => {
    counterRef.textContent = counterValue += 1;
});