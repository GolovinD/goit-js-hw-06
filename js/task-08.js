const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.currentTarget.email.value === ''
        || event.currentTarget.password.value === '') {
        return alert `Всі поля повинні бути заповнені!`
    };
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const formData = {email, password}

    console.log(formData)

    event.currentTarget.reset();
});