import React from 'react';
import './Footerpage.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="address">
          <h4>Our Address</h4>
          <p>123 E-commerce Street, Suite 100<br />
            Banglore, India 560097</p>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
