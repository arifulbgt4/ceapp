function User(name, email) {
  const div = document.createElement("div");
  div.innerHTML = `
        <h3>${name}</h3>
        <p>${email}</p>
    `;

  if (!name && !email) {
    el.removeChild();
    return;
  }

  el.appendChild(div);
}

app.logout();
