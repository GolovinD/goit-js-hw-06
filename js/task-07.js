const textOutputRef = document.querySelector('#text');
const textSizeControlRef = document.querySelector('#font-size-control');

textOutputRef.style.fontSize = `${textSizeControlRef.value}px`;

textSizeControlRef.addEventListener('input', (event) => {
   textOutputRef.style.fontSize = `${event.currentTarget.value}px`;
});