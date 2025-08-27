// src/App.jsx
import { useEffect, useState } from "react";
import Header from './Header.jsx';
import LoginPage from "./LoginPage";
import UserPage from "./components/UserPage.jsx";
import { useAuth } from "./contexts/Authcontext";

function App() {
  const [page, setPage] = useState('home');
  const { user, logout } = useAuth();

  // If user opens "Profile" directly while logged out, push to login
  useEffect(() => {
    if (page === 'profile' && !user) setPage('login');
  }, [page, user]);

  return (
    <div>
      <Header
        onNavigate={setPage}
        onLogout={logout}
        isLoggedIn={!!user}
      />

      <main>
        {page === 'login' && (
          <LoginPage onSuccess={() => setPage('profile')} />
        )}

        {page === 'home' && <h1>Welcome to the Infinite Loopers Blog</h1>}
        {page === 'new' && <h1>Create a New Post</h1>}

        {page === 'profile' && <UserPage />}
      </main>
    </div>
  );
}

export default App;
