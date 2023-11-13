const form = document.getElementById('form');

const loginForm = document.createElement('form');
form.appendChild(loginForm);

const userNameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const loginBtn = document.createElement('button');
loginBtn.textContent = 'Login'

loginForm.appendChild(userNameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginBtn);
