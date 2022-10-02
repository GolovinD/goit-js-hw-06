const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.currentTarget.email.value === ''
        || event.currentTarget.password.value === '') {
        alert`Всі поля повинні бути заповнені!`
    }
    const email = formRef.email;
    const password = formRef.password;
    const formData = { email, password }
    console.log(formData)

    event.currentTarget.reset();
});