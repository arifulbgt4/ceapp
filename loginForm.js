const form = document.getElementById('form');

const loginForm = document.createElement('form');
loginForm.setAttribute('class', 'form');
form.appendChild(loginForm);
const tittle = document.createElement('h1');
tittle.setAttribute('class', 'tittle');
tittle.textContent = `User Login`;
loginForm.appendChild(tittle);
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'emailInput');
emailInput.placeholder = 'Your Email';
const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'passInput');
passwordInput.placeholder ='Password';
const loginBtn = document.createElement('button');
loginBtn.setAttribute('type', 'submit')
loginBtn.setAttribute('class', 'loginBtn');
loginBtn.setAttribute('onclick', 'handleLogin()');
loginBtn.textContent = 'Login';

loginForm.appendChild(emailInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginBtn);

function handleLogin(){
    console.log(`Login Success!`);
}
