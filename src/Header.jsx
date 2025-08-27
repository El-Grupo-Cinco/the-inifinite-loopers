// src/Header.jsx
import './Header.css'
import logo from './assets/infiniteLooperLogo.png'

export default function Header({ onNavigate, onLogout, isLoggedIn }) {
  const handleProfile = () => {
    if (isLoggedIn) onNavigate('profile');
    else onNavigate('login');
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      onLogout?.();
      onNavigate('login');
    } else {
      onNavigate('login');
    }
  };

  return (
    <header className="site-header">
      <div className="logo" onClick={() => onNavigate('home')}>
        <img src={logo} alt="The Infinite Loopers" height="50" />
      </div>
      <nav className="nav-links">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('new')}>New Post</button>
        <button onClick={handleProfile}>Profile</button>
        <button onClick={handleLoginLogout}>Log out</button>
      </nav>
    </header>
  )
}
