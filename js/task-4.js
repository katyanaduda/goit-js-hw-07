function handleSubmit() {
    const $form = document.querySelector('.login-form');

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = e.target.elements;
        const $email = formData.email.value.trim();
        const $password = formData.password.value.trim();
        if ($email === '' || $password === '') {
            alert('Please fill in all fields');
        } else {
            console.log({login: $email, password: $password});
            e.target.reset();
        }
    })
}


handleSubmit();