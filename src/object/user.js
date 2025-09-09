export class User {
    constructor (uuid, username, password, avatar = "") {
        this.userID = uuid;
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


export const users = [
    {
        id: "123",
        username: "Spiderman",
        avatar: "https://i.pravatar.cc/100?u=spidey",
    },
    {
        id: "456",
        username: "Ironman",
        avatar: "https://i.pravatar.cc/100?u=ironman",
    },
];