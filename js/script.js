
let form = document.querySelector('#join-crew');
let message = document.querySelector('.message');
let greeting = document.querySelector('.greeting');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { firstName, lastName, age } = e.target.elements;

    if (age.value >= 18) {
        message.textContent = `${firstName.value} ${lastName.value} your registration is complete. Welcome to the crew.`;
        form.classList.add('hidden');
        greeting.classList.add('hidden');
    } else {
        message.textContent = 'We currently do not accept crew under the age of 18.';
    }
});

form.addEventListener('input', (e) => {
    let password = document.querySelector('input[name="password"]');  
    let passwordRepeat = document.querySelector('input[name="passwordRepeat"]'); 
    let passCheck = document.querySelector('.pass-check');

    if (e.target.name === 'password' || e.target.name === 'passwordRepeat') {
        if (password.value === passwordRepeat.value) {
            passwordRepeat.classList.add('success');
            password.classList.add('success');
        } else {
            passwordRepeat.classList.remove('success');
            password.classList.remove('success');
        }
    }
});