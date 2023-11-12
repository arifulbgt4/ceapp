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
      User(getUser.name, getUser.email);
    }
  }

  logout() {
    this.user = {};
    User();
  }
}

const app = new App();
const el = document.getElementById("root");

app.login("Dorris_Emmerich66@hotmail.com", "tF_j7aQQue4RtWH");

console.log(app.isAuthenticated);
