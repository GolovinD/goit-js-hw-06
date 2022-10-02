const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length < inputRef.dataset.length) {
        return inputRef.classList.add('invalid')
    }
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
}
);
