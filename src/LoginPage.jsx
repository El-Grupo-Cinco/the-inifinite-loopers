import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [view, setView] = useState("login")

  return (
    <div className="auth-container">
      {view === "login" && (
        <>
          <h2>Login</h2>
          <form className="auth-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
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
          <form className="auth-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
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
          <form className="auth-form">
            <input type="text" placeholder="Enter Username" required />
            <input type="password" placeholder="New Password" required />
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