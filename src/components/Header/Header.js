// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Peppermint Robotics</div>
      <h1 className="tagline">Join the Future of Robotics</h1>
      <button className="cta-button">Explore Job Opportunities</button>
    </header>
  );
};

export default Header;
