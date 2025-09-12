import { Link } from "react-router-dom";
import "../styles/Footer.css";
import PropTypes from "prop-types";

export default function Footer({ onNavigate }) {
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

Footer.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};
