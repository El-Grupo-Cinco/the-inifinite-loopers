import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} The Infinite Loopers</p>
            <nav className="footer-links">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
            </nav>
        </footer>
    );
}
