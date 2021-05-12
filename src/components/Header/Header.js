import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div className ="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/home">Home</a>
        <a href="/match">Match</a>
        <a href="/live">Live</a>
        <a href="/honours">Honours</a>

      </nav>
    </div>
  );
};

export default Header;