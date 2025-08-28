import { useState } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LoginPage from "./LoginPage";


function App() {
  const [page, setPage] = useState('home');


    return (
    <div>
        <Header onNavigate={setPage} />

        <main>
            {page === 'login' && <LoginPage />}
            {page === 'home' && <h1>Welcome to the Infinite Loopers Blog</h1>}
            {page === 'new' && <h1>Create a New Post</h1>}
            {page === 'profile' && <h1>Your Profile</h1>}
        </main>

        <Footer />
    </div>
  );
}

export default App;
