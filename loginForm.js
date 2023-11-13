const form = document.getElementById('form');

const loginForm = document.createElement('form');
form.appendChild(loginForm);

const userNameInput = document.createElement('input');
userNameInput.setAttribute('type', 'text');
userNameInput.placeholder = 'User Name';
const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.placeholder ='Password';
const loginBtn = document.createElement('button');
loginBtn.textContent = 'Login'

loginForm.appendChild(userNameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginBtn);
