import { useNavigate } from "react-router-dom";

export function Logout({ setIsLogin, showLoginForm }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("loggedIn", false);
    setIsLogin("Login");
    showLoginForm(true);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>
        You're busy and this super-hero business isn't done remotely.
        <br />
        Go save the world!
      </h2>
      <button id="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
