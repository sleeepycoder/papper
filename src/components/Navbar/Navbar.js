// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import Header from '../Header/Header';
import FiltersAndSearch from '../FilterAnd Search/FiltersAndSearch';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <><nav className="navbar">
      <div className="logo">Peppermint Robotics</div>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/carrier">CARRIER</a></li>
      
        {/* Add more navigation links */}
      </ul>
    </nav><Header />
   
    </>
  );
};

export default Navbar;
