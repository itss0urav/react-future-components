import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file named Navbar.css
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link className='link' to="/">
                <h1 className="navbar-logo">React Future Components</h1>
            </Link>
            <ul className="navbar-menu">
                <li className="navbar-item"></li>

            </ul>
        </nav>
    );
};

export default Navbar;
