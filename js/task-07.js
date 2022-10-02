const textOutputRef = document.querySelector('#text');
const textSizeControlRef = document.querySelector('#font-size-control');

textSizeControlRef.addEventListener('input', (event) => {
   textOutputRef.style.fontSize = `${event.currentTarget.value}px`;
});