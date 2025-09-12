export function Login({
  view,
  setView,
  setUsername,
  setPassword,
  tryLogin,
  username,
  password,
}) {
  return (
    <div className="auth-container">
      {view === "login" && (
        <>
          <h2>Login</h2>
          <form
            className="auth-form"
            onSubmit={(event) => {
              event.preventDefault();
              tryLogin();
            }}
          >
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
          <div className="auth-links">
            <p onClick={() => setView("register")}>Create new user</p>
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
    </div>
  );
}
