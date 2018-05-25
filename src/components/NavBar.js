import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">Exchange</Link>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
    </ul>

  </nav>
);

export default NavBar;
