// src/LoginPage.jsx
import { useState } from "react";
import "./LoginPage.css";
import { useAuth } from "./contexts/Authcontext";

function LoginPage({ onSuccess }) {
  const { login, register, resetPassword } = useAuth();
  const [view, setView] = useState("login");

  // login
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // register
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");

  // reset
  const [fpUser, setFpUser] = useState("");
  const [fpPass, setFpPass] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(loginUser, loginPass);
      alert("Logged in!");
      onSuccess?.(); // go to user page
    } catch (err) {
      alert(err.message || "Login failed.");
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await register(regUser, regPass);
      alert("Account created & logged in!");
      onSuccess?.();
    } catch (err) {
      alert(err.message || "Registration failed.");
    }
  }

  async function handleForgot(e) {
    e.preventDefault();
    try {
      await resetPassword(fpUser, fpPass);
      alert("Password reset. You are now logged in.");
      onSuccess?.();
    } catch (err) {
      alert(err.message || "Password reset failed.");
    }
  }

  return (
    <div className="auth-container">
      {view === "login" && (
        <>
          <h2>Login</h2>
          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              required
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <div className="auth-links">
            <p onClick={() => setView("register")}>Create new user</p>
            <p onClick={() => setView("forgot")}>Forgot password?</p>
          </div>
        </>
      )}

      {view === "register" && (
        <>
          <h2>Create New User</h2>
          <form className="auth-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              required
              value={regUser}
              onChange={(e) => setRegUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={regPass}
              onChange={(e) => setRegPass(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <div className="auth-links">
            <p onClick={() => setView("login")}>Back to login</p>
          </div>
        </>
      )}

      {view === "forgot" && (
        <>
          <h2>Forgot Password</h2>
          <form className="auth-form" onSubmit={handleForgot}>
            <input
              type="text"
              placeholder="Enter Username"
              required
              value={fpUser}
              onChange={(e) => setFpUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              required
              value={fpPass}
              onChange={(e) => setFpPass(e.target.value)}
            />
            <button type="submit">Reset Password</button>
          </form>
          <div className="auth-links">
            <p onClick={() => setView("login")}>Back to login</p>
          </div>
        </>
      )}
    </div>
  );
}

export default LoginPage;
