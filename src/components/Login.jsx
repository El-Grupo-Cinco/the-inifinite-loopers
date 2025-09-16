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
        </>
      )}
    </div>
  );
}
