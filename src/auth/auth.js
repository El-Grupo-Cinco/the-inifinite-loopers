// src/auth/auth.js
// Minimal front-end auth using localStorage + salted SHA-256 hashing.

const USERS_KEY = "til_users";      // map: usernameLower -> { username, salt, passwordHash, createdAt }
const SESSION_KEY = "til_session";  // { username, loginAt }

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeUsers(usersMap) {
  localStorage.setItem(USERS_KEY, JSON.stringify(usersMap));
}

function saveSession(username) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ username, loginAt: new Date().toISOString() })
  );
}

export function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function bytesToHex(bytes) {
  return [...new Uint8Array(bytes)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(str) {
  const data = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return bytesToHex(digest);
}

function randomSaltHex(len = 16) {
  const bytes = new Uint8Array(len);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

async function hashPassword(password, salt) {
  // Simple scheme: SHA-256( salt + ":" + password )
  return sha256Hex(`${salt}:${password}`);
}

/** Register a new user. Throws Error on invalid input or if taken. */
export async function registerUser(username, password) {
  const uname = String(username || "").trim();
  const pwd = String(password || "");

  if (!uname) throw new Error("Username is required.");
  if (pwd.length < 6) throw new Error("Password must be at least 6 characters.");

  const users = readUsers();
  const key = uname.toLowerCase();
  if (users[key]) throw new Error("That username is already taken.");

  const salt = randomSaltHex(16);
  const passwordHash = await hashPassword(pwd, salt);

  users[key] = {
    username: uname,    // preserve casing for display
    salt,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  writeUsers(users);

  // auto-login new user
  saveSession(uname);
  return { username: uname };
}

/** Login an existing user. Throws Error on failure. */
export async function loginUser(username, password) {
  const uname = String(username || "").trim();
  const pwd = String(password || "");

  const users = readUsers();
  const record = users[uname.toLowerCase()];
  if (!record) throw new Error("Invalid username or password.");

  const computed = await hashPassword(pwd, record.salt);
  if (computed !== record.passwordHash) throw new Error("Invalid username or password.");

  saveSession(record.username);
  return { username: record.username };
}

/** Reset password for an existing user. Throws Error on failure. */
export async function resetPassword(username, newPassword) {
  const uname = String(username || "").trim();
  const pwd = String(newPassword || "");

  if (pwd.length < 6) throw new Error("New password must be at least 6 characters.");

  const users = readUsers();
  const key = uname.toLowerCase();
  const record = users[key];
  if (!record) throw new Error("User not found.");

  const salt = randomSaltHex(16);
  const passwordHash = await hashPassword(pwd, salt);

  users[key] = { ...record, salt, passwordHash };
  writeUsers(users);

  // optional: keep them logged in after reset
  saveSession(record.username);
  return { username: record.username };
}

/** Log out current session. */
export function logoutUser() {
  clearSession();
}

/** Current logged-in username (or null) */
export function getCurrentUsername() {
  const s = loadSession();
  return s?.username ?? null;
}
