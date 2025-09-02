// src/App.jsx
import { useState } from "react";
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import CreatePost from "./components/CreatePost.jsx";
import HomePage from './pages/HomePage.jsx';
import AboutPage from "./pages/AboutPage.jsx";
import './styles/App.css';

export default function App() {
  const [page, setPage] = useState('home'); 
  const [posts, setPosts] = useState([]);

  const handleNewPost = (post) => setPosts([post, ...posts]);

  return (
    <div>
      <Header onNavigate={setPage} />

      <main>
        {page === 'home' && <HomePage posts={posts} />} 
        {page === 'new' && <CreatePost onSubmit={handleNewPost} />}
        {page === 'login' && <LoginPage />}
        {page === 'profile' && <h1>Your Profile</h1>}
        {page === 'about' && <AboutPage />}
      </main>

      <Footer onNavigate={setPage} />
    </div>
  );
}