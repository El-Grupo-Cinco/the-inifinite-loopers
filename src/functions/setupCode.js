import { User } from "../object/user.js";

localStorage.setItem("users", JSON.stringify([]));

const userList = [
    new User ("", "Super-Bobang", "Test123"),
    new User ("", "Rabbit Of Fire", "Test123"),
    new User ("", "Fever Zever", "Test123"),
    new User ("", "Garlic Baguette", "Test123"),
]

saveUsers();

function saveUsers() {
    console.log("Setting up mock users");
    
    for (let user of userList) {
        user.save();
    }

    console.log("user-list created:" + localStorage.getItem("users"));
}