import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="title">Naruto Characters</Link>
                <div className="links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
