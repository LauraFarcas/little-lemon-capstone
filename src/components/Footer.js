import React from 'react';
import footerLogo from '../assets/logo-white.png';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-container">
                <img class="footer-logo" src={footerLogo} alt="logo-footer"></img>
                <div class="footer-site-map">
                    <p class="footer-title"> SITEMAP</p>
                    <a class="footer-item" href="/">Home</a>
                    <a class="footer-item" href="/about">About</a>
                    <a class="footer-item" href="/menu">Menu</a>
                    <a class="footer-item" href="/reservations">Reservations</a>
                    <a class="footer-item" href="/order-online">Order Online</a>
                    <a class="footer-item" href="/login">Login</a>
                </div>
                <div class="footer-contact">
                    <p class="footer-title"> CONTACT</p>
                    <p class="footer-item"> 123 Citrus Lane</p>
                    <p class="footer-item"> 123-456-7890</p>
                    <p class="footer-item"> little.lemon@lemon.com</p>
                </div>
                <div class="footer-social">
                    <p class="footer-title"> SOCIAL MEDIA LINKS</p>
                    <a class="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a class="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a class="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;