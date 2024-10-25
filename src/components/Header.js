import React from 'react';
import logo from '../assets/Logo.svg';
import Nav from './Nav';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container grid nav-bar">
                <div className="nav-bar-logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;