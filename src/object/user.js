export class User {
  constructor(userId, username, password, avatar = "", description) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.description = description;
  }

  save() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(this);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("created: ", this);
  }
}
