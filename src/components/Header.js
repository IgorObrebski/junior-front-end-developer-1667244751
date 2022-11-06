import React from "react";
import logo from "../logo.svg";
import "../Styles/Header.css";
import avatar from "../hendrix.jpg";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Logo Nerds.family' />
      <div
        className='avatar'
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
};

export default Header;
