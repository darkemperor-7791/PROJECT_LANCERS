import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-icon">
          <span className="menu-bars">☰</span>
        </button>
        <span className="logo">LANCE</span>
        <a href="#freelancers" className="nav-link">FreeLancers</a>
        <a href="#findwork" className="nav-link">Find Work</a>
      </div>
      <div className="nav-right">
        <button className="login-btn">Login</button>
        <button className="signin-btn">Sign In</button>
        <div className="nav-icons">
          <div className="icon-badge">
            <span className="badge-icon">💳</span>
            <span className="badge-number">25</span>
          </div>
          <span className="icon heart-icon">♡</span>
          <span className="icon bell-icon">🔔</span>
          <div className="profile-circle"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;