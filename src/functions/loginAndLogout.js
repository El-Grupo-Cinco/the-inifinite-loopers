import { User } from "../object/user.js";

/**
 * perform a cheap version of login, returns true or false.
 * not to be used in security sensitive environment
 * @param {*} username 
 * @param {*} password 
 * @returns boolean based on successful login
 */
export function login(username, password) {
    const users = JSON.parse(localStorage.getItem("users"));
    users.map((u) => {
        new User(u.uuid, )
    })

    for (let user of users) {
        if (user.username === username) {
            localStorage.setItem("loggedIn", checkPassword(username, password, user.password));
            return localStorage.getItem("loggedIn");
        }

        localStorage,setItem("loggedIn", false);
        return false;
    }
}

/**
 * removes loggedIn item from localStorage
 */
export function logout() {
    localStorage.clear("loggedIn");
}

/**
 * checks the password entered is the same as the password stored in localStorage
 * @param {*} passwordInput 
 * @param {*} passwordLocalStorage 
 * @returns 
 */
function checkPassword(username, passwordInput, passwordLocalStorage) {
    if (passwordInput === passwordLocalStorage) {
        localStorage.setItem("username", username); //for easy access when creating posts
        return true;
    }

    return false;
}