function User(name, email, image) {
  const div = document.createElement("div");
  div.setAttribute('class', 'profile');
  div.innerHTML = `
  <img src='${image}' />
        <h3>${name}</h3>
        <p>${email}</p>
    `;

  //   if (!name && !email) {
  //     el.removeChild();
  //     return;
  //   }

  el.appendChild(div);
}

app.logout();
54