import { useEffect, useState } from "react";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreatePost from "./components/CreatePost.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import "./styles/App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const handleNewPost = (post) => setPosts([post, ...posts]);

  //checks login status when loading firsttime (to set login/Log out button in header)
  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");

    if (!stored || stored === "false") {
      setIsLoggedIn("Login");
    } else {
      setIsLoggedIn("Log out");
    }
  }, []);

  //used in LoginPage props, used to set user and changes login/Log out button in header
  const handleLoginSuccess = (userObj) => {
    localStorage.setItem("loggedIn", JSON.stringify(userObj));
    setIsLoggedIn("Log out");
  }

  //same as above but in case login fails
  const handleLoginFail = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn("Login");
  };

  //setup but not implemented yet
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn("Login");
  };

  return (
    <div>
      <Header
        onNavigate={setPage}
        loggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <main>
        {page === "home" && <HomePage posts={posts} />}
        {page === "new" && <CreatePost onSubmit={handleNewPost} />}
        {page === "login" && <LoginPage
            onLoginSuccess={handleLoginSuccess}
            onLoginFail={handleLoginFail} 
          />}
        {page === "profile" && <h1>Your Profile</h1>}
        {page === "about" && <AboutPage />}
      </main>

      <Footer onNavigate={setPage} />
    </div>
  );
}
