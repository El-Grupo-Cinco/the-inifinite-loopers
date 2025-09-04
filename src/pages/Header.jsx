import "../styles/Header.css";
import logo from "../assets/infiniteLooperLogo.png";
import { HeroSearchBar } from "../components/HeroSearchBar.jsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header({ onNavigate, loggedIn }) {
  return (
    <header className="site-header">
      <div className="logo" onClick={() => onNavigate("home")}>
        <img src={logo} alt="The Infinite Loopers" height="50" />
      </div>
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
