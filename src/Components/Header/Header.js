import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1 className="header-text">Bengal Tigers Cricket Club Team Selection</h1>
            <h2 className="header-text">Team Selection</h2>
        </div>
    );
};

export default Header;