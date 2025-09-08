import { useEffect, useState } from "react";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreatePost from "./components/CreatePost.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/Privacy.jsx";
import UserPage from "./pages/UserPage.jsx";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleNewPost = (post) => setPosts([post, ...posts]);

  //checks login status when loading first time (to set login/Log out button in header)
  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");

    if (!stored || stored === "false") {
      setIsLoggedIn("Login");
    } else {
      setIsLoggedIn("Log out");
    }
  }, []);

  //used in LoginPage props, used to set user and changes login/Log out button in header
  //also sets if login form shall show in LoginPage
  const handleLoginSuccess = (userObj) => {
    localStorage.setItem("loggedIn", JSON.stringify(userObj));
    setIsLoggedIn("Log out");
    setShowLoginForm(false);
  };

  //same as above but in case login fails
  const handleLoginFail = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn("Login");
    setShowLoginForm(true);
  };

  //setup but not implemented yet
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn("Login");
  };

  return (
    <BrowserRouter>
      <Header loggedIn={isLoggedIn} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route
            path="/create-post"
            element={<CreatePost onSubmit={handleNewPost} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onLoginSuccess={handleLoginSuccess}
                onLoginFail={handleLoginFail}
                showLogin={showLoginForm}
                setIsLogin={setIsLoggedIn}
                setShowLoginForm={setShowLoginForm}
              />
            }
          />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
