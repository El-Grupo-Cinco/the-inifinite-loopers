import "../styles/Header.css";
import logo from "../assets/infiniteLooperLogo.png";
import { HeroSearchBar } from "../components/HeroSearchBar.jsx";
import { NavLink } from "react-router-dom";

export default function Header({ loggedIn }) {
  return (
    <header className="site-header">
        <NavLink to="/" className="logo">
            <img src={logo} alt="The Infinite Loopers" height="50" style={{ cursor: "pointer" }} />
        </NavLink>
        <HeroSearchBar />
      <nav className="nav-links">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/create-post">
          <button>New Post</button>
        </NavLink>
        <NavLink to="/profile">
          <button>Profile</button>
        </NavLink>
        <NavLink to="/login">
          <button>{loggedIn}</button>
        </NavLink>
      </nav>
    </header>
  );
}
