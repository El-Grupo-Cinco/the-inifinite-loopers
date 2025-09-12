import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} The Infinite Loopers</p>
      <nav className="footer-links">
        <Link to={"/about"}>
          <button>About</button>
        </Link>
        <Link to={"/contact"}>
          <button>Contact</button>
        </Link>
        <Link to={"/privacy-policy"}>
          <button>Privacy Policy</button>
        </Link>
      </nav>
    </footer>
  );
}
