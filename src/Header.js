import React from 'react';
import logo from './assets/LittleLemonLogo.png';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="Little Lemon Logo" />
                <h1>Little Lemon</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;