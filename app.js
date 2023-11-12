class App {
  constructor() {
    this.user = {};
    this.isAuthenticated = false;
  }
  async login(email, password) {
    const res = await fetch(
      "https://6550ea597d203ab6626e53c6.mockapi.io/api/v1/user",
      {
        method: "GET",
      }
    );

    const data = await res.json();

    const getUser = data.find((element) => {
      if (element.email === email) {
        return element;
      }
    });

    if (getUser === undefined) {
      this.isAuthenticated = false;
      this.user = {};
      return;
    }

    if (getUser.password === password) {
      this.isAuthenticated = true;
      this.user = getUser;
      User(getUser.name, getUser.email, getUser.avatar);
    }
  }

  logout() {
    this.user = {};
    // User();
  }
}

const app = new App();
const el = document.getElementById("root");

app.login("Lucinda12@hotmail.com", "vc1TVwuNtU4VZi5");

console.log(app.isAuthenticated);
