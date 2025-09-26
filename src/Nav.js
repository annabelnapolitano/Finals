import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from './Logo.svg';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={Logo} alt="Little Lemon Logo" className="logo"/>
        <span className="logo-text"></span>
      </div>
      <ul className="nav-list">
         <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
