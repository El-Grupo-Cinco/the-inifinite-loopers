import '../styles/Header.css'
import logo from '../assets/infiniteLooperLogo.png'
import { HeroSearchBar } from '../components/HeroSearchBar.jsx'

export default function Header({ onNavigate }) {
    return (
        <header className="site-header">
            <div className="logo" onClick={() => onNavigate('home')}>
                <img src={logo} alt="The Infinite Loopers" height="50" />
            </div>
            <HeroSearchBar />
            <nav className="nav-links">
                <button onClick={() => onNavigate('home')}>Home</button>
                <button onClick={() => onNavigate('new')}>New Post</button>
                <button onClick={() => onNavigate('profile')}>Profile</button>
                <button onClick={() => onNavigate('login')}>Log out</button>
            </nav>
        </header>
    )
}
