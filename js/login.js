document.getElementById('login-btn').addEventListener('click', function () {

    // E-mail------

    const emailField = document.getElementById('user-email');
    const email = emailField.Value;

    // Password-------

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'sakil@gmail.com' || password === 'khan') {

        location.href = 'volt.html';

    }

    else {
        alert('Invalid e-mail or password')
    }
})