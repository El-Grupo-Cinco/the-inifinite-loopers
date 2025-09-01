import { useState } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LoginPage from "./LoginPage";
import CreatePost from "./components/CreatePost.jsx";
import BlogFeed from './components/BlogFeed'

function App() {
  const [page, setPage] = useState('home');
  const [posts, setPosts] = useState([])

  const handleNewPost = (post) => {
      const updated = [post, ...posts]
      setPosts(updated)
      localStorage.setItem('posts', JSON.stringify(updated))
      setPage('home')
  }

  return (
    <div>
        <Header onNavigate={setPage} />

        <main>
            {page === 'new' && <CreatePost onSubmit={handleNewPost} />}
            {page === 'login' && <LoginPage />}
            {page === 'home' && <BlogFeed posts={posts} />}
            {page === 'profile' && <h1>Your Profile</h1>}
        </main>

        <Footer />
    </div>
  )
}

export default App;
