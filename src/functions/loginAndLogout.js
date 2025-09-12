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
  console.log(JSON.stringify(users));
  users.map((u) => {
    new User(u.uuid, u.username, u.password);
  });
  console.log(JSON.stringify(users));

  for (let user of users) {
    console.log(JSON.stringify(user));

    if (user.username === username) {
      localStorage.setItem(
        "loggedIn",
        JSON.stringify(checkPassword(user, password))
      );
      return user;
    }
  }
  localStorage.setItem("loggedIn", false);
  return false;
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
function checkPassword(user, passwordInput) {
  if (passwordInput === user.password) {
    console.log("checkpass true");

    return user;
  }
  console.error("checkpass false");
  return false;
}
