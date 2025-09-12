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
import { BlogPost } from "./object/BlogPost.js";
import { User } from "./object/user.js";
import { HeroPage } from "./pages/HeroPage.jsx";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [users, setUsers] = useState([]);

    const handleNewPost = (post) => {
        const updatedPosts = [post, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts)); // <-- this line keeps them saved
    };


    //checks login status when loading first time (to set login/Log out button in header)
  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");

    if (!stored || stored === "false") {
      setIsLoggedIn("Login");
    } else {
      setIsLoggedIn("Log out");
    }
  }, []);

  useEffect(() => {
    const localStorageUsers = JSON.parse(localStorage.getItem("users"));
    const newUsers = localStorageUsers.map((u) => {
      return new User(u.userId, u.username, "", u.avatar);
    });
    setUsers(newUsers);
  }, []);

    useEffect(() => {
        const localStoragePosts = JSON.parse(localStorage.getItem("posts") || "[]");
        const newPosts = localStoragePosts.map((p) => {
            return new BlogPost(p.id, p.date, p.title, p.content, p.userId, p.imageSrc);
        });
        setPosts(newPosts);
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
          <Route path="/" element={<HomePage posts={posts} users={users} />} />
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
          <Route path="/hero/:heroId" element={<HeroPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
