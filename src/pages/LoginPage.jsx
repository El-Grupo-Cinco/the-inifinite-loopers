import { useState } from "react";
import { login } from "../functions/loginAndLogout.js";
import "../styles/LoginPage.css";
import { Login } from "../components/Login.jsx";
import { Logout } from "../components/Logout.jsx";

export function LoginPage({
  onLoginSuccess,
  onLoginFail,
  showLogin,
  setIsLogin,
  setShowLoginForm,
}) {
  const [view, setView] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const tryLogin = () => {
    const user = login(username, password);
    if (user) {
      onLoginSuccess(user);
    } else {
      onLoginFail();
    }
  };

  return (
    <>
      {showLogin ? (
        <Login
          view={view}
          setView={setView}
          setUsername={setUsername}
          setPassword={setPassword}
          tryLogin={tryLogin}
          username={username}
          password={password}
        />
      ) : (
        <Logout setIsLogin={setIsLogin} showLoginForm={setShowLoginForm} />
      )}
    </>
  );
}

export default LoginPage;
