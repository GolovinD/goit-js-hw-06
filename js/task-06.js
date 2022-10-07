const inputRef = document.querySelector('#validation-input');



inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inputRef.dataset.length ) {
           inputRef.classList.remove('invalid')
        return event.currentTarget.classList.add('valid') 
    }
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid')
   }
);
