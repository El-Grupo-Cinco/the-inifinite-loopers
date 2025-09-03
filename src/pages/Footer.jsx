import '../styles/Footer.css';
import PropTypes from 'prop-types';

export default function Footer({ onNavigate }) {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} The Infinite Loopers</p>
            <nav className="footer-links">
                <button onClick={() => onNavigate('about')}>About</button>
                <button onClick={() => onNavigate('contact')}>Contact</button>
                <button onClick={() => onNavigate('privacypolicy')}>Privacy Policy</button>                
            </nav>
        </footer>
    );
}

Footer.propTypes = {
    onNavigate: PropTypes.func.isRequired,
};
