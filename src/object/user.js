export class User {
  constructor(userId, username, password, avatar = "") {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    //TODO add avatar
  }

  save() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(this);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("created: ", this);
  }
}
