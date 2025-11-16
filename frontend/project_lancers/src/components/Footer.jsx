import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-column">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              <li>Graphics & design</li>
              <li>Web development</li>
              <li>Video & Animation</li>
              <li>Application Development</li>
              <li>Photography</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Community</h3>
            <ul className="footer-links">
              <li>Community Hub</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li>Help & Support</li>
              <li>Our reviews</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>About us</li>
              <li>Leadership</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <span className="social-text">Follow us</span>
          <div className="social-icons">
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-link">Terms of Service</span>
        <span className="footer-link">Privacy policy</span>
      </div>
    </footer>
  );
};

export default Footer;