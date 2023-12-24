import React from 'react';
import './Style.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="header-wrapper">
        <div className="logo-left">
          {/* Use require syntax for the image path */}
          <img src={require('./image/logo-left.29d686a3ec1469294cf2.png')} alt="Logo" />
        </div>
        <div className="assessment-title">
          <p className="logo-text">AI Pulse Check</p>
        </div>
        <div className="logo-right">
          {/* Content for logo-right goes here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
