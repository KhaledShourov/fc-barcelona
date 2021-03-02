import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/tem">Team Player</a>
                <a href="/about">About</a>
                <a href="/live">Live Match</a>
            </nav>
        </div>
    );
};

export default Header;