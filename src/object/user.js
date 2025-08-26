import { create_UUID } from "../functions/uuidGenerator.js";

export class User {
    constructor (uuid, username, password) {
        this.userID = create_UUID(uuid);
        this.username = username;
        this.password = password;
        //TODO add avatar
    }

    save() {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(this);

        localStorage.setItem("users", JSON.stringify(users));

        console.log("created: ", this);
        
    }
}