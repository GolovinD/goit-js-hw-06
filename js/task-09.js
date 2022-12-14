function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyRef = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  let color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorName.textContent = color;
});