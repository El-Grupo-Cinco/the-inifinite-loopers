import { User } from "../object/user.js";

localStorage.setItem("users", JSON.stringify([]));

const userList = [
    new User ("9371ab7b-e043-41fb-899d-5efd256f136f", "Super-Bobang", "Test123"),
    new User ("65d2d61b-6188-470e-ac1d-fe8f189d0372", "Rabbit Of Fire", "Test123"),
    new User ("caded204-9e89-4777-ab3e-cda1362202ab", "Fever Zever", "Test123"),
    new User ("db48811e-134b-4497-9982-131cea1316f2", "Garlic Baguette", "Test123"),
]

saveUsers();

function saveUsers() {
    console.log("Setting up mock users");
    
    for (let user of userList) {
        user.save();
    }

    console.log("user-list created:" + localStorage.getItem("users"));
}