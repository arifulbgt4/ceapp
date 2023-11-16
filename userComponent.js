function User(name, email, image) {
  const div = document.createElement("div");
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


